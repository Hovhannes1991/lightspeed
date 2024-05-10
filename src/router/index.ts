import {defineAsyncComponent} from "vue";
import {createWebHistory, createRouter} from 'vue-router';

const ProductsAndCategoriesList = defineAsyncComponent(() => import("@/pages/ProductsAndCategoriesList.vue"));
const ProductInfo = defineAsyncComponent(() => import("@/pages/ProductInfo.vue"));
const CategoryInfo = defineAsyncComponent(() => import("@/pages/CategoryData.vue"));
const TheCart = defineAsyncComponent(() => import("@/pages/TheCart.vue"));
const NotFound = defineAsyncComponent(() => import("@/pages/NotFound.vue"));

const routes = [
    {name: "home", path: '/', component: ProductsAndCategoriesList},
    {name: "category", path: '/category/:name/:id', component: CategoryInfo},
    {name: "product", path: '/product/:id', component: ProductInfo},
    {name: "cart", path: '/cart/', component: TheCart},
    {name: 'NotFound', path: '/:pathMatch(.*)*', component: NotFound},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})