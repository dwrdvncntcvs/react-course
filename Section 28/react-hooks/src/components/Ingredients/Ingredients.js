import React, { useCallback, useState } from "react";
import { BASE_URL } from "../../variables";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  const removeIngredient = async (id) => {
    await fetch(`${BASE_URL}/ingredients/${id}.json`, {
      method: "DELETE",
    });

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

  const filterIngredient = useCallback((filterIngredients) => {
    setIngredients(filterIngredients);
  }, []);

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addNewIngredient} />

      <section>
        <Search onLoadIngredients={filterIngredient} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredient}
        />
      </section>
    </div>
  );
}

export default Ingredients;
