<template>
  <div class="card">
    <h2>{{ product.name }}</h2>
    <p>قیمت: {{ product.price }} تومان</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    product: Object,
  },
};
</script>

<style>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  border-radius: 5px;
}
</style>
