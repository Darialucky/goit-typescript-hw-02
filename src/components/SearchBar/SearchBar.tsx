import React, { useState, FormEvent, ChangeEvent } from "react";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";
import style from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const inputValue = (
      e.currentTarget.querySelector('input[name="query"]') as HTMLInputElement
    ).value.trim();
    if (inputValue === "") {
      toast.error("Please, enter correct value!");
      setQuery("");
      return;
    }
    onSearch(inputValue);
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
