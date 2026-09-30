import styles from "./App.module.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import { seeds } from "./data/seeds";
import Content from "./pages/homepage/Content";

// seeds();

function App() {
  return (
    <>
      <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
