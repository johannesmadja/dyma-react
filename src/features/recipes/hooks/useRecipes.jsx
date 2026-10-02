import { useEffect, useState } from "react";
import { getAllDatas } from "../services/RecipeService";

export function useRecipes(pageIndex, pageSize) {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchRecipes() {
      try {
        setIsLoading(true);
        setError(null);
        const newRecipes = await getAllDatas(pageIndex, pageSize);
        if (!ignore) {
          setRecipes((x) => [...x, ...newRecipes]);
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

  return { recipes, setRecipes, isLoading, error };
}
