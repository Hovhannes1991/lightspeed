<script setup lang="ts">
import TheLoader from "@/components/TheLoader.vue";
import Message from 'primevue/message';

import {useRouter} from "vue-router";
import type {ICategory} from "@/types/types.ts";

const router = useRouter();

interface IProps {
  categories: ICategory[];
  error: null | string;
  loading: boolean;
}

const props = defineProps<IProps>();
const goToCategoryPage = (id: number, name: string) => {
  router.push({name: "category", params: {id, name}})
}
</script>

<template>
  <Message v-if="props.error" severity="error">{{ props.error }}</Message>
  <TheLoader v-else-if="props.loading"/>
  <div v-else class="categories">
    <h2>Categories</h2>
    <ul>
      <li v-for="category in props.categories"
          @click="goToCategoryPage(category.id, category.name)"
          class="category"
          :key="category.id">
        <span>{{ category.name }}</span>
        <div>
          <img :src="category.imageUrl" :alt="category.name" :key="category.id">
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.categories {
  font-size: 20px;
  padding: 10px 20px;
  border-bottom: 2px solid black;

  h2 {
    text-align: left;
    margin: 0;
  }

  ul {
    display: flex;
    width: fit-content;
    flex-wrap: wrap;
    list-style: none;
    margin: 0 0 20px 0;
    gap: 14px;
    padding: 0;

    li.category {
      width: 100px;
      height: 100px;
      cursor: pointer;
      box-shadow: 0 0 2px 2px #0884ea;
    }

    img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>