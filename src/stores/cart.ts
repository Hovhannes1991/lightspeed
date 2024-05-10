import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {IProduct} from "@/types/types.ts";


const cart_data = localStorage.getItem("cart-data");
const initial_data = cart_data ? JSON.parse(cart_data) : [];

export interface ICartItem {
    id: number;
    product: IProduct;
    count: number;
}

export const useCartStore = defineStore('cart', () => {
    const items = ref<ICartItem[]>(initial_data);

    const totalPrice = computed(() => {
        return items.value.reduce((acc, current) => {
            return acc + current.count * current.product.price;
        }, 0);
    });

    const totalCount = computed(() => items.value.reduce((acc, current) => acc + current.count, 0));

    function addToCart(product: IProduct) {
        const existing_product = items.value.find(item => item.id === product.id);
        if (existing_product) existing_product.count++;
        else {
            items.value.push({
                id: product.id,
                product: product,
                count: 1,
            })
        }
    }

    function decreaseItemCount(id: number) {
        const existing_product = items.value.find(item => item.id === id);
        if (!existing_product) return;
        if (existing_product.count > 1) existing_product.count--;
        else deleteFromCart(id);
    }

    function deleteFromCart(id: number) {
        const existing_product = items.value.find(item => item.id === id);
        if (!existing_product) return;
        items.value = items.value.filter(item => item.id !== id);
    }

    return {items, totalPrice, totalCount, addToCart, decreaseItemCount, deleteFromCart}
})