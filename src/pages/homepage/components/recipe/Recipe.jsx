import { useContext } from "react";
import styles from "./Recipe.module.scss";
import { ApiContext } from "../../../../context/ApiContext";

function Recipe({ recipe, toogleLiked }) {
  const BASE_API_URL = useContext(ApiContext)

  async function handleClick() {
    try {
      const response = await fetch(`${BASE_API_URL}/${recipe._id}`, {
        method: 'PATCH', 
        headers: {
          'Content-Type' : 'application/json'
        }, 
        body: JSON.stringify({
          liked : !recipe.liked
        })
      })

      if (response.ok) {
        const res = await response.json(); 
        toogleLiked(res);
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div onClick={handleClick} className={styles.recipe}>
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
