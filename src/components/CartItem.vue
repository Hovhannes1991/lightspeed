<script setup lang="ts">
import Button from "primevue/button";
import {useRouter} from "vue-router";
import {computed} from "vue";

const cart_store = useCartStore();
import {ICartItem, useCartStore} from "@/stores/cart.ts";

import {useToast} from "@/composables/useToast.ts";

const {success} = useToast();
const router = useRouter();
const props = defineProps<{ cartItem: ICartItem }>();

const goToProductPage = () => {
  router.push({name: "product", params: {id: props.cartItem.id}})
}

const priceOrder = (id: number) => {
  success("Congratulations, Your Purchase completed successfully");
  cart_store.deleteFromCart(id);
}

const totalPrice = computed(() => props.cartItem.count * props.cartItem.product.price);
</script>

<template>
  <div class="cart-item">
    <div @click="goToProductPage" class="cart-item__img-wrapper">
      <img :src="props.cartItem.product.imageUrl"
           :alt="props.cartItem.product.name">
    </div>

    <div class="cart-item__content-wrapper">
      <div class="cart-item__title">{{ props.cartItem.product.name }}</div>
      <div class="cart-item__info">
        <div class="cart-item__price">
          <span class="name">Price</span>
          <div>
            <span>{{ props.cartItem.product.price }}</span>
            <span>&#8381;</span>
          </div>
        </div>
        <div class="cart-item__count">
          <span class="name">Count</span>
          <div>
            <span>{{ props.cartItem.count }} item(s)</span>
          </div>
        </div>
        <div class="cart-item__total-price">
          <span class="name">Total Price</span>
          <div>
            <span>{{ totalPrice }}</span>
            <span>&#8381;</span>
          </div>
        </div>
      </div>
      <div class="cart-item__buttons">
        <Button @click="cart_store.decreaseItemCount(props.cartItem.id)"
                icon="pi pi-minus"
                :disabled="props.cartItem.count === 1"
                aria-label="Decrease"/>
        <Button @click="cart_store.addToCart(props.cartItem.product)"
                icon="pi pi-plus"
                aria-label="Increase"/>
        <Button @click="cart_store.deleteFromCart(props.cartItem.id)"
                severity="danger"
                label="Delete"/>
        <Button @click="priceOrder(props.cartItem.id)"
                severity="success"
                label="Place order"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-item {
  display: flex;
  width: 100%;
  padding: 16px;
  gap: 24px;
  border: 1px solid #7B8A93;
  border-radius: 12px;
  background-color: white;

  .cart-item__img-wrapper {
    cursor: pointer;

    img {
      max-width: 250px;
      border-radius: 4px;
    }
  }


  .cart-item__content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .cart-item__title {
      font-size: 24px;
      font-weight: 500;
      line-height: 32px;
      color: #059669;
      text-align: left;
    }

    .cart-item__info {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px 30px;
      height: fit-content;

      .cart-item__price,
      .cart-item__count,
      .cart-item__total-price {
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 4px 0;
        gap: 8px;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;

        .name {
          font-weight: 500;
        }
      }
    }

    .cart-item__buttons {
      display: flex;
      align-items: center;
      gap: 24px;
    }
  }
}

@media screen and (max-width: 760px) {
  .cart-item {
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;

    .cart-item__img-wrapper {
      text-align: center;
    }

    .cart-item__content-wrapper {
      .cart-item__title {
        font-size: 20px;
        text-align: center;
      }

      .cart-item__info {
        justify-content: center;
      }

      .cart-item__buttons {
        flex-direction: column;
        gap: 10px;

        button {
          width: 100%;
        }
      }
    }
  }
}
</style>