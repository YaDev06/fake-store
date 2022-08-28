const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  return res.json();
};

const getACategory = async (category) => {
  const res = await fetch(
    "https://fakestoreapi.com/products/category/" + category
  );
  return res.json();
};

const getProductById = async (id) => {
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  return res.json();
};

export { getProducts, getACategory, getProductById };
