import { useState } from "react";
import styles from "./RecipesPage.module.scss";
import Recipe from "../components/Recipe";
import Loading from "../../../components/ui/Loading";
import { useRecipes } from "../hooks/useRecipes";

const PAGE_SIZE = 18;

function RecipesPage() {
  // const recipes = data;
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const { recipes, setRecipes, isLoading } = useRecipes(page, PAGE_SIZE);

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  // update recipes
  function update(recipeUpdated) {
    setRecipes(
      recipes.map((r) => (r._id === recipeUpdated._id ? recipeUpdated : r)),
    );
  }

  return (
    <div className="flex-fill d-flex flex-column  container p-20">
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>

      <div
        className={`p-20 flex-fill d-flex flex-column card ${styles.contentCard} `}
      >
        <div
          className={`d-flex flex-row justify-content-center align-item-center my-30 ${styles.searchBar}`}
        >
          <span className="material-symbols-outlined mr-15">search</span>
          <input
            onInput={handleInput}
            className="flex-fill"
            type="text"
            placeholder="Rechercher"
          />
        </div>

        {isLoading && !recipes.length ? (
          <Loading />
        ) : (
          <div className={`${styles.grid}`}>
            {recipes
              .filter((r) => r.title.toLowerCase().startsWith(filter))
              .map((r) => (
                <Recipe key={r._id} recipe={r} toogleLiked={update} />
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
