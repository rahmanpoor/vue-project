<template lang="en">
    <div v-if="product">
       <p>In Stock: {{ product.inStock }}</p>
        <p>Category: {{ product.categoryId }}</p>
    </div>
</template>
<script>
 import ProductService from "@/services/ProductService";
export default {
  name: "ProductDetailsView",
  data() {
    return {
      product: null,
      id: 1,
    };
  },
  created() {
    ProductService.getProduct(this.id)
      .then((response) => {
        this.product = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style lang=""></style>
