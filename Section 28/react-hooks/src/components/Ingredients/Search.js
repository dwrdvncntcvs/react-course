import React, { memo, useCallback, useEffect, useState } from "react";
import { BASE_URL } from "../../variables";

import Card from "../UI/Card";
import "./Search.css";

const Search = ({ onLoadIngredients }) => {
  const [filter, setFilter] = useState("");

  const getIngredient = useCallback(async () => {
    const query =
      filter.length === 0 ? "" : `?orderBy="title"&equalTo="${filter}"`;
    const result = await fetch(`${BASE_URL}/ingredients.json${query}`);
    const data = await result.json();

    const loadedIg = [];
    for (const key in data) {
      const dataObj = { id: key, ...data[key] };
      loadedIg.push(dataObj);
    }

    onLoadIngredients(loadedIg);
  }, [onLoadIngredients, filter]);

  useEffect(() => {
    getIngredient();
  }, [getIngredient]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </Card>
    </section>
  );
};

export default memo(Search);
