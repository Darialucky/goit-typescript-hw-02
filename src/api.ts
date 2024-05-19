import axios from "axios";

const API_KEY = "7MzNquQ9xwagynYzxlGdlTc4bI3H3VaWTIzUOMlNFeQ";
axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

export const fetchImages = async <T>(
  page: number,
  query: string
): Promise<T> => {
  const { data } = await axios.get(
    `?client_id=${API_KEY}&page=${page}&query=${query}`
  );
  return data;
};
