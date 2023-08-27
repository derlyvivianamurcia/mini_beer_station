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
        <div v-for="(filter, i) in filters" :key="i">
          <label
            >{{ filter.name
            }}<input
              type="checkbox"
              id="cbox1"
              value="first_checkbox"
            /> </label
          ><br />
        </div>
      </div>
      <div class="container-btns">
        <a class="container-clear">
          <h1>Limpiar</h1>
        </a>
        <a class="container-filter">
          <h1>Filtrar</h1>
          <img class="button-filter" :src="IconFilter" alt="Icon Filter" />
        </a>
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
      numberWhatsapp: 0,
      IconFilter: IconFilter,
    };
  },
  computed: {
    filters() {
      return this.$store.state.filters;
    },
  },
  methods: {
    getMenu() {
      this.openMenu = true;
    },
    closeMenu() {
      this.openMenu = false;
    },

  },
};
</script>

<style lang="scss" scoped>
.section-filter {
  position: fixed;
  bottom: 50%;
  right: 0px;
  z-index: 115;
  display: flex;
  justify-content: center;
  align-items: center;
  .container-buttonW {
    box-shadow: 0px 3px 6px #b9cae371;
    border: 1px solid #ffffff;
    background-color: rgb(7, 41, 153);
    width: 100%;
    height: 50px;
    z-index: 6;
    padding: 2px;
    display: flex;
    position: relative;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    right: 134px;
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
    box-shadow: 0px 0px 5px #c7c1c1;

    .information_dropdown {
      margin: auto;
      width: 294px;
      display: flex;
      flex-flow: column;
      label {
        display: flex;
        /* right: 52px; */
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
        padding: 10px 0px 0px 50px;
        color: black;
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
      }
    }
    .header-dropdown {
      .image-dropclose img {
        width: 30px;
        margin-right: 15px;
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
      .information_dropdown {
        width: 100%;
        padding: 0px 10% !important;
      }
      .header-dropdown {
        margin-top: 25px;
        margin-left: 2%;
      }
    }
  }
}
@media (min-width: 1024px) {
  .section-filter {
    .container-buttonW {
      right: 0px;
    }
  }
}
</style>
