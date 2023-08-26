<template>
  <div>
    <div class="grid-products">
      <div v-for="(product, i) in products" :key="i" class="card-product">
        <CardProduct :product="product" />
      </div>
    </div>
  </div>
</template>
<script>
import CardProduct from "../shared/CardProduct/CardProduct.vue";

export default {
  components: {
    CardProduct,
  },
  data() {
    return {};
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
<style lang="scss" scoped>
.grid-products .card-product {
  width: 100%;
  padding: 10px;
}
.grid-products {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 1024px) {
  .grid-products {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .card-product {
      width: auto;
      margin: 1rem;
    }
  }
}
</style>
