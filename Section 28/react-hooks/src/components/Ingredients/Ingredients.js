import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  const removeIngredient = (id) => {
    setIngredients((prev) => prev.filter((ig) => ig.id !== id));
  };

  const addNewIngredient = (ingredient) => {
    setIngredients((prev) => [...prev, ingredient]);
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addNewIngredient} />

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngredient}
        />
      </section>
    </div>
  );
}

export default Ingredients;
