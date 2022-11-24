import React, { useCallback, useEffect, useState } from "react";
import { BASE_URL } from "../../variables";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  const getAllIngredients = useCallback(async () => {
    const result = await fetch(`${BASE_URL}/ingredients.json`);
    const data = await result.json();

    const loadedIg = [];
    for (const key in data) {
      const dataObj = { id: key, ...data[key] };
      loadedIg.push(dataObj);
    }

    setIngredients(loadedIg);
  }, []);

  useEffect(() => {
    getAllIngredients();
  }, [getAllIngredients]);

  const removeIngredient = (id) => {
    setIngredients((prev) => prev.filter((ig) => ig.id !== id));
  };

  const addNewIngredient = async (ingredient) => {
    const result = await fetch(`${BASE_URL}/ingredients.json`, {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await result.json();

    setIngredients((prev) => [...prev, { id: data.name, ...ingredient }]);
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addNewIngredient} />

      <section>
        <Search />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredient}
        />
      </section>
    </div>
  );
}

export default Ingredients;
