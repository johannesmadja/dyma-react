import { NavLink } from "react-router";
import styles from "./HeaderMenu.module.scss";

function HeaderMenu() {
  return (
    <ul className={`${styles.MenuContainer} card p-20`}>
      <NavLink to="/admin"> Admin </NavLink>
      <li>Wishlist</li>
      <li>Connexion</li>
    </ul>
  );
}

export default HeaderMenu;
