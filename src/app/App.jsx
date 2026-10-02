import styles from "./App.module.scss";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
// import { seeds } from "../features/recipes/data/seeds";
import RecipesPage from "../features/recipes/pages/RecipesPage";

// seeds();

function App() {
  return (
    <>
      <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header />
        <RecipesPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
