import React, { useCallback, useMemo, useReducer } from "react";
import useHttp from "../../hooks/useHttp";
import { BASE_URL } from "../../variables";
import ErrorModal from "../UI/ErrorModal";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const ingredientsReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      return [...state, payload];
    case "DELETE":
      return state.filter((ig) => ig.id !== payload);
    case "SET":
      return payload;
    default:
      return state;
  }
};

function Ingredients() {
  const [ingredients, igDispatch] = useReducer(ingredientsReducer, []);
  const { http, sendRequest, clear } = useHttp();

  const clearError = useCallback(() => clear(), [clear]);

  const removeIngredient = useCallback(
    async (id) => {
      await sendRequest(`${BASE_URL}/ingredients/${id}.json`, "DELETE");

      igDispatch({ type: "DELETE", payload: id });
    },
    [sendRequest]
  );

  const addNewIngredient = useCallback(
    async (ingredient) => {
      const data = await sendRequest(
        `${BASE_URL}/ingredients.json`,
        "POST",
        JSON.stringify(ingredient)
      );

      igDispatch({ type: "ADD", payload: { id: data.name, ...ingredient } });
    },
    [sendRequest]
  );

  const filterIngredient = useCallback((filterIngredients) => {
    igDispatch({ type: "SET", payload: filterIngredients });
  }, []);

  const ingredientList = useMemo(
    () => (
      <IngredientList
        ingredients={ingredients}
        onRemoveItem={removeIngredient}
      />
    ),
    [ingredients, removeIngredient]
  );

  return (
    <div className="App">
      {http.error ? (
        <ErrorModal onClose={clearError}>{http.error}</ErrorModal>
      ) : null}
      <IngredientForm
        onAddIngredient={addNewIngredient}
        loading={http.loading}
      />

      <section>
        <Search onLoadIngredients={filterIngredient} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
