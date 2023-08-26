<template>
  <div>
    <Header />
    <div class="grid-content">
      <div class="div-section">
        <h1>Cervezas</h1>
        <Products />
      </div>
    </div>
  </div>
</template>

<script>
import Products from "../components/Products/Products.vue";
export default {
  name: "IndexPage",
  components: {
    Products,
  },
};
</script>
<style lang="scss" scoped>
.grid-content {
  display: grid;
  grid-template-columns: 60% repeat(0, 1fr) 0;
  padding: 10px 10px;
  padding: 100px 10px;
  .div-section {
    h1 {
      font-size: 3rem;
    font-weight: bold;
    color: #000000;
    text-align: center;
    }
    .content-warning {
      display: flex;
      justify-content: center;
      .text-warning {
        font-size: 20px;
        font-weight: bold;
        color: #504f4f5c;
      }
    }
  }
}

@media (min-width: 1024px) {
  .grid-content {
    padding: 100px 20px;
  }
}
</style>

