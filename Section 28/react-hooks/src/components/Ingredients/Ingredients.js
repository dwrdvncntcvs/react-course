import React, { useCallback, useMemo, useReducer } from "react";
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

const httpReducer = (state, { type, payload }) => {
  switch (type) {
    case "PENDING":
      return { ...state, loading: true };
    case "SUCCESS":
      return { ...state, loading: false };
    case "REJECTED":
      return { loading: false, error: payload };
    case "CLEAR":
      return { loading: false, error: null };
    default:
      return state;
  }
};

function Ingredients() {
  const [ingredients, igDispatch] = useReducer(ingredientsReducer, []);
  const [http, httpDispatch] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });

  const clearError = useCallback(() => httpDispatch({ type: "CLEAR" }), []);

  const removeIngredient = useCallback(async (id) => {
    try {
      httpDispatch({ type: "PENDING" });
      await fetch(`${BASE_URL}/ingredients/${id}.json`, {
        method: "DELETE",
      });
      httpDispatch({ type: "SUCCESS" });

      igDispatch({ type: "DELETE", payload: id });
    } catch (err) {
      httpDispatch({
        type: "REJECTED",
        payload: "Something went wrong while removing ingredient",
      });
    }
  }, []);

  const addNewIngredient = useCallback(async (ingredient) => {
    httpDispatch({ type: "PENDING" });

    const result = await fetch(`${BASE_URL}/ingredients.json`, {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await result.json();
    httpDispatch({ type: "SUCCESS" });

    igDispatch({ type: "ADD", payload: { id: data.name, ...ingredient } });
  }, []);

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
      {ingredients.error ? (
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
