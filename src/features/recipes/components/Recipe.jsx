import styles from "./Recipe.module.scss";
import { deleteRecipe } from "../services/RecipeService";

function Recipe({ recipe, toogleLiked, removeRecipe }) {

  async function handleClickLike() {
    const updatedRecipe = {...recipe, liked: !recipe.liked}; 
    try {
      const response = await updatedRecipe(updatedRecipe);
      toogleLiked(response);
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
