import axios from 'axios';

const productService = {
    products: async (typeId) => {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/products?categoriesId=${typeId}`);
        return res.data.data;
    },
    productDetails: async (id) => {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/products/${id}`);
        return res.data.data;
    },
};

export default productService;
