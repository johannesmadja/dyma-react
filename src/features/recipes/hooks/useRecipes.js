import { useEffect, useState } from "react";
import * as recipeService from "../services/recipeService";

export function useRecipes(pageIndex, pageSize) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function fetchRecipes() {
      try {
        setIsLoading(true);
        setError(null);
        const newRecipes = await recipeService.getRecipes(pageIndex, pageSize);
        if (!ignore) {
          setRecipes((x) => [...x, ...newRecipes]);
          // A page shorter than pageSize means it was the last one
          setHasMore(Boolean(pageSize) && newRecipes.length === pageSize);
        }
      } catch (e) {
        console.error(e);
        if (!ignore) {
          setError(e);
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    fetchRecipes();
    return () => {
      ignore = true;
    };
  }, [pageIndex, pageSize]);

  // Call the API, then sync the local list. Errors are thrown to the caller.
  async function updateRecipe(recipe) {
    const updatedRecipe = await recipeService.updateRecipe(recipe);
    setRecipes((x) =>
      x.map((r) => (r._id === updatedRecipe._id ? updatedRecipe : r)),
    );
  }

  async function deleteRecipe(id) {
    await recipeService.deleteRecipe(id);
    setRecipes((x) => x.filter((r) => r._id !== id));
  }

  return { recipes, isLoading, error, hasMore, updateRecipe, deleteRecipe };
}
