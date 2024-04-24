import axios from "axios";

export const fetchHooks = {
  fetchOneProduct: async (productId) => {
    const response = await axios.get(
      `http://localhost/WriteResfulAPIPHP/api/product/show.php?id=${productId}`
    );

    return response;
  },
  fetchProductByCategory: async (categoryId) => {
    const response = await axios.get(
      `http://localhost/WriteResfulAPIPHP/api/category/show.php?category_id=${categoryId}`
    );

    return response;
  },
};
