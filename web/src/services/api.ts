import axios from "axios";

const baseURL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? "http://localhost:3333" : undefined);

if (!baseURL) {
  throw new Error("Configure VITE_API_URL com o endereço da API.");
}

export const api = axios.create({
  baseURL,
});
