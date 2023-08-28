<template>
  <section class="section-filter">
    <a v-if="!openMenu" class="container-buttonW" @click="getMenu">
      <h1>Filtrar</h1>
      <img class="button-filter" :src="IconFilter" alt="Icon Filter" />
    </a>
    <div v-if="openMenu" id="dropdown">
      <div class="header-dropdown">
        <a class="image-dropclose" @click="closeMenu"
          ><img src="../../assets/icons/close.png" alt="Image close" />
        </a>
      </div>
      <div class="information_dropdown">
        <h2>
          <strong>Filtros</strong>
        </h2>
        <form action="" id="formElement">
          <div v-for="(filter, i) in filters" :key="i">
            <label
              >{{ filter.name
              }}<input
                type="checkbox"
                :id="filter.id"
                :value="filter.name"
                v-model="selected"
                @input="handleInput"
              /> </label
            ><br />
          </div>
        </form>
      </div>
      <div class="container-btns">
        <button
          v-if="disabled"
          class="container-clear"
          disabled
          v-on:click.prevent="decrement"
        >
          <h1>Limpiar</h1>
        </button>
        <button v-else class="container-clear" v-on:click.prevent="decrement">
          <h1>Limpiar</h1>
        </button>
        <router-link :to="'/result-filter?name=' + this.results">
        <button class="container-filter" @click="filterProduct()"
>          <h1>Filtrar</h1>
          <img class="button-filter" :src="IconFilter" alt="Icon Filter" />
          <span class="icon-button__badge">{{ this.quantity }}</span>
        </button>
      </router-link>

      </div>
    </div>
  </section>
</template>

<script>
import IconFilter from "../../assets/icons/filter.png";

export default {
  data() {
    return {
      openMenu: false,
      IconFilter: IconFilter,
      disabled: true,
      quantity: 0,
      product: '',
      results:'',
       selected: [],
      data: {
        category: null,
      },
    };
  },
  computed: {
    filters() {
      return this.$store.state.filters;
    },
     filter() {
      return this.$store.getters.filterProduct(this.$route.query.name);
    },
  },
  methods: {
    getMenu() {
      this.openMenu = true;
    },
    closeMenu() {
      this.openMenu = false;
    },
    handleInput(event) {
      if (event.target.value === event.target.value) {
        this.results = event.target.value
        this.quantity++;
        this.disabled = false;
      }
    },
    decrement() {
      if (this.quantity > 0) {
        this.quantity--;
        document
          .querySelectorAll("#formElement input[type=checkbox]")
          .forEach(function (checkElement) {
            checkElement.checked = false;
          });
          this.quantityFunction;
      }
    },
    filterProduct(){
      this.$store.state.filters = this.product;
      this.filters;
      this.closeMenu();
    }
  },
  watch: {
    quantityFunction: function (val) {
      this.quantity = val + " " + this.quantity;
    },
  },
};
</script>

<style lang="scss" scoped>
.section-filter {
  position: fixed;
  bottom: 50%;
  left: 30%;
  z-index: 115;
  display: flex;
  justify-content: center;
  align-items: center;
  .container-buttonW {
    background-color: rgb(7, 41, 153);
    width: 100%;
    z-index: 6;
    display: flex;
    color: white;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    h1 {
      padding: 7px 0px 0px 15px;
    }
    img.button-filter {
      width: 50px;
      height: 25px;
      margin: 7% 13%;
    }
  }

  #dropdown {
    width: 459px;
    top: auto;
    right: 0px;
    position: inherit;
    bottom: 0px;
    background: white;
    position: fixed;
    left: 0px;
    z-index: 5;
    float: left;
    background: rgb(0 0 0 / 62%);

    .information_dropdown {
      margin: auto;
      width: 294px;
      display: flex;
      flex-flow: column;
      background: white;
      label {
        display: flex;
        justify-content: space-between;
      }
    }
    .information_dropdown h2 {
      font-size: 20px;
      font-weight: 600px;
    }
    .information_dropdown p {
      font-size: 14px;
      margin: 0;
    }
    .container-btns {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      .container-clear {
        box-shadow: 0px 3px 6px #b9cae371;
        border: 1px solid #ffffff;
        background-color: rgba(221, 222, 227, 0.903);
        z-index: 6;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-family: "Poppins", sans-serif;
        cursor: pointer;
      }
      .container-filter {
        box-shadow: 0px 3px 6px #b9cae371;
        border: 1px solid #ffffff;
        background-color: rgb(7, 41, 153);
        width: 100%;
        height: 50px;
        z-index: 6;
        padding: 10px 0px 0px 50px;
        display: flex;
        position: relative;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-family: "Poppins", sans-serif;
        cursor: pointer;
        img {
          height: 4vh;
          padding: 5px;
        }
        .icon-button__badge {
          top: 0;
          width: 25px;
          height: 25px;
          background: white;
          color: black;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
        }
      }
    }
    .header-dropdown {
      margin-top: 72%;
      a.image-dropclose {
        justify-content: right;
        display: flex;
      }
      .image-dropclose img {
        width: 30px;
        margin-right: 30px;
        cursor: pointer;
      }
    }
  }
}

@media (max-width: 540px) {
  .section-filter {
    bottom: 0%;
    #dropdown {
      width: 100%;
      box-shadow: 0px 5px 5px #c7c1c1;
      .header-dropdown {
        margin-top: 121%;
      }
      .information_dropdown {
        width: 100%;
        padding: 0px 10% !important;
      }
    }
  }
}

@media (min-width: 1024px) {
  .section-filter {
    bottom: 0%;
    #dropdown {
      width: auto;
      .information_dropdown {
        width: auto;
        padding: 1rem;
      }
      .header-dropdown {
        margin: 22rem 0 0 0;
      }
    }
    .container-buttonW {
      right: 0px;
    }
  }
}
</style>
