import { useRecipes } from "../../../../recipes/hooks/useRecipes";
import { deleteRecipe } from "../../../../recipes/services/RecipeService";
import styles from "./AdminRecipeList.module.scss";

function AdminRecipeList() {
  const { recipes, setRecipes } = useRecipes(null, null);

  async function deleteR(recipeId) {
    try {
      await deleteRecipe(recipeId);
      setRecipes(recipes.filter((r) => r._id != recipeId));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ul className={styles.list}>
      {recipes.length
        ? recipes.map((r) => (
            <li key={r._id} className="d-flex align-items-center">
              <span className="flex-fill">{r.title}</span>
              <button className="btn btn-primary mr-15">Editer</button>
              <button onClick={() => deleteR(r._id)} className="btn btn-danger">
                Supprimer
              </button>
            </li>
          ))
        : null}
    </ul>
  );
}

export default AdminRecipeList;
