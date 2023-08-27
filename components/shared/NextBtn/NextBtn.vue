<template>
  <div class="container-btn-next">
    <div class="text-btn">
      <h2>Sigue mercando</h2>
      <h1>Vinos</h1>
    </div>
    <div class="container-arrow">
      <img class="icon-arrow" :src="IconArrow" alt="" />
    </div>
  </div>
</template>

<script>
import IconArrow from "../../../assets/icons/arrow.png";
export default {
  data() {
    return {
      IconArrow: IconArrow,
    };
  },
};
</script>

<style lang="scss" scoped>
.container-btn-next {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border: solid 2px rgba(67, 65, 65, 0.14902);
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  .text-btn {
    h2 {
      font-size: 1.1rem;
      font-family: "Poppins", sans-serif;
    }
  }
  .container-arrow {
    display: flex;
    justify-content: right;
    .icon-arrow {
      height: 7vh;
    }
  }
}
@media (min-width: 1024px) {
  .container-btn-next {
    margin: 20px;
  }
}
</style>
