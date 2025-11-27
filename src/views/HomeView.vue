<template>
  <div class="home-container">
    <h1>محصولات</h1>
    <div class="products-grid">
       <router-link to="/product/1">
      <Card
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
      </router-link>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import ProductService from "@/services/ProductService";

export default {
  name: "HomeView",
  components: {
    Card,
  },
  data() {
    return {
      products: null,
    };
  },
  created() {
    ProductService.getProducts()
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>


<style>
.products-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
