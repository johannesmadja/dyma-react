import styles from "./App.module.scss";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
// import { seeds } from "../features/recipes/data/seeds";
import { Outlet } from "react-router";
import { Suspense } from "react";

// seeds();

function App() {
  return (
    <>
      <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header />
        <div className="flex-fill d-flex flex-column">
          <Suspense fallback={<h2> Chargment ...</h2>}>
            <Outlet />
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
