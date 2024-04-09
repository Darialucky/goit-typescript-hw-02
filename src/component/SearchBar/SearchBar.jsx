import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";
import style from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.query.value.trim() === "") {
      toast.error("Please, enter correct value!");
      setQuery("");
      return;
    }
    onSearch(query);
    setQuery("");
  };

  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button className={style.button} type="submit">
          <FiSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
