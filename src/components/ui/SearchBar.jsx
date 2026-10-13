import styles from "./SearchBar.module.scss";

function SearchBar({ onSearch, placeholder = "Rechercher" }) {
  return (
    <div
      className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar}`}
    >
      <span className="material-symbols-outlined mr-15">search</span>
      <input
        onInput={(e) => onSearch(e.target.value)}
        className="flex-fill"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchBar;
