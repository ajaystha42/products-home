const API_SERVER = import.meta.env.VITE_API_URL;

export const getProducts = () =>
  fetch(`${API_SERVER}/products`).then((res) => res.json());

export const getProductById = (id: any) =>
  fetch(`${API_SERVER}/products/${id}`).then((res) => res.json());

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
