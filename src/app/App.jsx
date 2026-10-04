import styles from "./App.module.scss";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
// import { seeds } from "../features/recipes/data/seeds";
import RecipesPage from "../features/recipes/pages/RecipesPage";
import { useState } from "react";
import Admin from "../features/admin/pages/Admin";

// seeds();

function App() {
  const [page, setPage] = useState("homepage");

  return (
    <>
      <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header setPage={setPage} />
        {page === "homepage" && <RecipesPage />}
        {page === "admin" && <Admin />}
        <Footer />
      </div>
    </>
  );
}

export default App;
