import { useContext } from "react";
import styles from "./Recipe.module.scss";
import { ApiContext } from "../../../context/ApiContext";
import { deleteRecipe } from "../services/RecipeService";

function Recipe({ recipe, toogleLiked, removeRecipe }) {
  const BASE_API_URL = useContext(ApiContext);

  async function handleClickLike() {
    try {
      const response = await fetch(`${BASE_API_URL}/${recipe._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          liked: !recipe.liked,
        }),
      });

      if (response.ok) {
        const res = await response.json();
        toogleLiked(res);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleClikDelete(e) {
    e.stopPropagation();

    try {
      await deleteRecipe(recipe._id);
      removeRecipe();
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div onClick={handleClickLike} className={styles.recipe}>
      <span
        onClick={handleClikDelete}
        className={`material-symbols-outlined ${styles.close}`}
      >
        close
      </span>
      <div className={styles.imageContainer}>
        <img src={recipe.image} alt="recipe" />
      </div>

      <div
        className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}
      >
        <h3 className="mb-10">{recipe.title}</h3>
        <span
          className={`material-symbols-outlined ${recipe.liked ? "text-primary" : ""}`}
        >
          favorite
        </span>
      </div>
    </div>
  );
}

export default Recipe;
