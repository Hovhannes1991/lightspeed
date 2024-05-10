// import axios from "axios";

// import type {IProduct, IProductsResponse, ICategory, ICategoriesResponse} from "@/types/types.ts";


// export const fetchProducts = async (): Promise<IProduct[]> => {
//     try {
//         const response = await axios.get<IProductsResponse>("/products");
//         return response.data.items;
//     } catch (err) {
//         throw err;
//     }
// }


// export const fetchSingleProduct = async (id: string): Promise<IProduct> => {
//     try {
//         const response = await axios.get("/products/" + id);
//         return response.data;
//     } catch (err) {
//         throw err;
//     }
// }


// export const fetchProductsByCategory = async (category_id: string): Promise<IProduct[]> => {
//     try {
//         const response = await axios.get<IProductsResponse>("/products?categories=" + category_id);
//         return response.data.items;
//     } catch (err) {
//         throw err;
//     }
// }


// export const fetchCategories = async (): Promise<ICategory[]> => {
//     try {
//         const response = await axios.get<ICategoriesResponse>("/categories");
//         return response.data.items;
//     } catch (err) {
//         throw err;
//     }
// }