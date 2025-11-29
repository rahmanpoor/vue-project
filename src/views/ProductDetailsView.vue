<template lang="en">
    <div v-if="product">
        <h2>{{ product.name }}</h2>
        <p>قیمت: {{ product.price }} تومان</p>
        <p>موجودی: {{ product.inStock }}</p>
        <p>َشماره دسته: {{ product.categoryId }}</p>
    </div>
</template>
<script>
import ProductService from "@/services/ProductService";
export default {
  props: ["id"],
  name: "ProductDetailsView",
  data() {
    return {
      product: null,
    };
  },
  async created() {
    try {
      const { data } = await ProductService.getProduct(this.id);
      this.product = data;
    } catch (error) {
      console.error("خطا در دریافت محصول:", error);
    }
  },
};
</script>
<style lang=""></style>
