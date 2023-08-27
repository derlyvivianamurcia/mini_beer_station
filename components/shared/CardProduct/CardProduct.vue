<template>
  <div class="card-container">
    <div class="container-img">
      <img width="100%" class="card-image" :src="product.photos" />
    </div>
    <div class="product-details">
      <h1 class="product-name">{{ product.name }}</h1>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-bottom-details">
        <div class="product-price">
          <small>{{ product.price  | FormatterPrice }}</small>
        </div>
      </div>
    </div>
    <button class="btn" >Agregar</button>
  </div>
</template>

<script>
import FormatterPrice from "../Filters/formatterPrice";

export default {
  name: "card-product",
  props: ["product"],
  data() {
    return {};
  },
  filters: {
    FormatterPrice,
  },

};
</script>

<style lang="scss" scoped>
.card-container {
  width: 100%;
  border: solid 2px #43414126;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  height: 378px;
}
.card-image {
  height: 243px;
  display: block;
  object-fit: cover;
}
.product-details {
  padding: 1rem;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;

  .product-name {
    font-size: 1.1rem;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    width: 100px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .product-description {
    font-size: 1.1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100px;
    color: gray;
    white-space: nowrap;
  }
  .product-price {
    font-size: 1.1rem;
    font-weight: bold;
    font-family: "Poppins", sans-serif;
  }
}
.btn {
  position: absolute;
  width: 100%;
  height: 35px;
  color: #1614c4;
  font-size: 1rem;
  font-weight: bold;
  border: solid 2px #43414100;
  border-bottom-left-radius: 14%;
  text-transform: uppercase;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
}
@media (min-width: 1024px) {
  .card-image {
    height: 227px;
    display: block;
    object-fit: scale-down;
  }
  .product-details {
    padding: 1rem;
    .product-name {
      font-size: 1.1rem;
      font-weight: bold;
      font-family: "Poppins", sans-serif;
      width: auto;
    }
    .product-description {
      width: auto;
      white-space: normal;
    }

  }
  .btn {
    height: 29px;
  }
}
</style>
