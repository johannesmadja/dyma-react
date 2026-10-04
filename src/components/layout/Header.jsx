import styles from "./Header.module.scss";
import cookchef from "../../assets/images/cookchef.png";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";

function Header({ setPage }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`d-flex flex-row align-items-center ${styles.header}`}>
      {/* <span className="material-symbols-outlined mr-15">menu</span> */}
      <div className="flex-fill">
        <img onClick={() => setPage("homepage")} src={cookchef} alt="logo" />
      </div>

      <ul className={styles.headerList}>
        <button
          onClick={() => setPage("admin")}
          className="btn btn-primary mr-15"
        >
          Ajouter une recette
        </button>
        <button className="mr-15 btn btn-primary-reverse">
          {/* <span class="material-symbols-outlined">shopping_basket</span> */}
          Wishlist
        </button>
        <button className="btn btn-primary">Connexion</button>
      </ul>

      <span className={`material-symbols-outlined ${styles.headerXs}`}>
        menu
      </span>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;
