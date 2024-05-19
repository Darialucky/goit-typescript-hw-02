import axios from "axios";

export const fetchImages = async (page, query) => {
  const API_KEY = "7MzNquQ9xwagynYzxlGdlTc4bI3H3VaWTIzUOMlNFeQ";
  axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
  const response = await axios.get(
    `?client_id=${API_KEY}&page=${page}&query=${query}`
  );
  return response.data;
};
