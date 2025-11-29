<template>
  <router-link class="vue-link" :to="{ name: 'ProductDetailsView', params: { id: product.id }}">
  <div class="card">
    <h2>{{ product.name }}</h2>
    <p>قیمت: {{ product.price }} تومان</p>
  </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: {
    product: Object,
    reqired: true
  },
};
</script>

<style>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  cursor: pointer;
}

.vue-link {
  text-decoration: none;
  color: inherit;
}
</style>
