import { useContext, useEffect, useState } from "react";
import styles from "./Content.module.scss";
import Recipe from "./components/recipe/Recipe";
import Loading from "../../components/loading/Loading";
import { ApiContext } from "../../context/ApiContext";

function Content() {
  // const recipes = data;
  const [recipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const BASE_API_URL = useContext(ApiContext);

  useEffect(() => {
    let ignore = false;
    async function fetchAll() {
      try {
        setIsLoading(true);
        const response = await fetch(BASE_API_URL);

        if (response.ok) {
          if (!ignore) {
            let content = await response.json();

            if (!Array.isArray(content)) {
              content = [content];
            }
            setRecipes(content);
          }
        } else {
          console.error("Oups ! Une erreur est survenue");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAll();
    return () => {
      ignore = true;
    };
  }, [BASE_API_URL]);

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
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

        {isLoading ? (
          <Loading />
        ) : (
          <div className={`${styles.grid}`}>
            {recipes
              .filter((r) => r.title.toLowerCase().startsWith(filter))
              .map((r) => (
                <Recipe key={r._id} recipe={r} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
