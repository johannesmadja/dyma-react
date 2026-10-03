import styles from "./SearchBar.module.scss";

function SearchBar({setFilter}) {
  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
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
  );
}

export default SearchBar;
