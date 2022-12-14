import React, { memo, useCallback, useEffect, useState, useRef } from "react";
import useHttp from "../../hooks/useHttp";
import { BASE_URL } from "../../variables";

import Card from "../UI/Card";
import "./Search.css";

const Search = ({ onLoadIngredients }) => {
  const [filter, setFilter] = useState("");
  const inputRef = useRef();
  const { sendRequest } = useHttp();

  const getIngredient = useCallback(async () => {
    const query =
      filter.length === 0 ? "" : `?orderBy="title"&equalTo="${filter}"`;
    const data = await sendRequest(`${BASE_URL}/ingredients.json${query}`);

    const loadedIg = [];
    for (const key in data) {
      const dataObj = { id: key, ...data[key] };
      loadedIg.push(dataObj);
    }

    onLoadIngredients(loadedIg);
  }, [onLoadIngredients, filter, sendRequest]);

  useEffect(() => {
    if (filter.trim() === "") getIngredient();

    const timer = setTimeout(() => {
      if (filter === inputRef.current.value) getIngredient();
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [getIngredient, filter]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            ref={inputRef}
          />
        </div>
      </Card>
    </section>
  );
};

export default memo(Search);
