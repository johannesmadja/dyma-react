import { useState } from "react";
import styles from "./RecipesPage.module.scss";
import Recipe from "../components/Recipe";
import Loading from "../../../components/ui/Loading";
import { useRecipes } from "../hooks/useRecipes";
import SearchBar from "../../../components/ui/SearchBar";

const PAGE_SIZE = 18;

function RecipesPage() {
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const { recipes, setRecipes, isLoading } = useRecipes(page, PAGE_SIZE);

  // update recipes
  function update(recipeUpdated) {
    setRecipes(
      recipes.map((r) => (r._id === recipeUpdated._id ? recipeUpdated : r)),
    );
  }

  // update recipes
  function remove(id) {  
    setRecipes(
      recipes.filter((r) => r._id !== id),
    );
  }

  return (
    <div className="flex-fill d-flex flex-column  container p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>

      <div
        className={`p-20 flex-fill d-flex flex-column card ${styles.contentCard} `}
      >
        <SearchBar setFilter={setFilter} />

        {isLoading && !recipes.length ? (
          <Loading />
        ) : (
          <div className={`${styles.grid}`}>
            {recipes
              .filter((r) => r.title.toLowerCase().startsWith(filter))
              .map((r) => (
                <Recipe key={r._id} recipe={r} toogleLiked={update} removeRecipe={() => remove(r._id)} />
              ))}
          </div>
        )}

        <div className="flex-row-center p-20">
          <button onClick={() => setPage(page + 1)} className="btn btn-primary">
            Charger plus de recette
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipesPage;
