import axios from "axios";

export const fetchProducts = () =>
  axios.get(`${process.env.REACT_APP_BASE_API_URL}/products`);
