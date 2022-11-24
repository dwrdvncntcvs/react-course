import React, { useCallback, useState } from "react";
import { BASE_URL } from "../../variables";
import ErrorModal from "../UI/ErrorModal";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const removeIngredient = async (id) => {
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}/ingredients/${id}.json`, {
        method: "DELETE",
      });
      setIsLoading(false);

      setIngredients((prev) => prev.filter((ig) => ig.id !== id));
    } catch (err) {
      setError("Something went wrong while removing ingredient");
      setIsLoading(false);
    }
  };

  const addNewIngredient = async (ingredient) => {
    setIsLoading(true);
    const result = await fetch(`${BASE_URL}/ingredients.json`, {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await result.json();
    setIsLoading(false);

    setIngredients((prev) => [...prev, { id: data.name, ...ingredient }]);
  };

  const clearError = () => {
    setError(null);
  };

  const filterIngredient = useCallback((filterIngredients) => {
    setIngredients(filterIngredients);
  }, []);

  return (
    <div className="App">
      {error ? <ErrorModal onClose={clearError}>{error}</ErrorModal> : null}
      <IngredientForm onAddIngredient={addNewIngredient} loading={isLoading} />

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
