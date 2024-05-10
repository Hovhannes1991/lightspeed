<script setup lang="ts">
const paths = [
  {label: "Home", path_name: "home"},
  {label: "Cart", path_name: "cart"},

]
</script>

<template>
  <div class="navigation-menu">
    <ul>
      <li v-for="item in paths" :key="item.label">
        <RouterLink :to="{name: item.path_name}">{{ item.label }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.navigation-menu {
  ul {
    display: flex;
    gap: 20px;

    li {
      list-style: none;

      a {
        font-size: 24px;
        color: white;
        transition: color 0.2s ease-in-out;
        text-underline-offset: 5px;

        &:hover {
          color: gold;
        }
      }
    }
  }
}
</style>