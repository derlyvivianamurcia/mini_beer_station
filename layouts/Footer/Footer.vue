<template>
  <footer class="footer-main bg-dark fixed-bottom">
    <div class="container">
      <div class="">
        <div class="container-one">
          <h1>¿Podemos ayudarle?</h1>
          <div class="grid-icons">
            <img :src="IconChat" alt="" />
            <img :src="IconCall" alt="" />
          </div>
          <div class="grid-items-icons">
            <h1>Chat</h1>
            <h1>Llamar</h1>
          </div>
        </div>
        <div class="container-two">
          <ul class="items">
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Medidas de seguridad (Covid-19)</a></li>
            <li><a href="#">Cómo mercar</a></li>
            <li><a href="#">Proveedores</a></li>
            <li><a href="#">Contáctenos</a></li>
            <li><a href="#">Zona de cobertura</a></li>
          </ul>
          <hr />
          <img class="icon-instagram" :src="IconInstagram" alt="" />
          <p>Política de tratamiento de datos personales</p>
        </div>
        <div class="container-three">© 2020 Axiacore</div>
      </div>
    </div>
  </footer>
</template>
<script>
import IconChat from "../../assets/images/charla.png";
import IconCall from "../../assets/images/llamada-telefonica.png";
import IconInstagram from "../../assets/icons/instagram.png";
export default {
  components: {},
  data() {
    return {
      IconChat: IconChat,
      IconCall: IconCall,
      IconInstagram: IconInstagram,
    };
  },
  methods: {},
};
</script>
,

<style lang="scss" scoped>
footer {
  .container {
    .container-one {
      background: black;
      text-align: center;
      h1 {
        font-size: 1.1rem;
        color: white;
        font-weight: bold;
        font-family: "Poppins", sans-serif;
        padding: 50px 0px 10px;
      }
      .grid-icons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 20px 125px 0px;
        img {
          height: 7vh;
        }
      }
      .grid-items-icons {
        text-transform: uppercase;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 5px 125px 35px;
      }
    }
    .container-two {
      padding: 50px;
      text-align: center;
      padding: 50px;
      ul {
        list-style: none;
        li a {
          line-height: 50px;
          font-size: 1.1rem;
          color: black;
          font-weight: bold;
          font-family: "Poppins", sans-serif;
          list-style: none;
          text-decoration: none;
          text-transform: uppercase;
        }
      }
      img.icon-instagram {
        padding: 20px;
        height: 10vh;
      }
      p {
        font-size: 1.1rem;
        color: black;
        font-weight: bold;
        font-family: "Poppins", sans-serif;
        text-transform: uppercase;
      }
    }
    .container-three {
      background: black;
      font-size: 1.1rem;
      color: white;
      font-weight: bold;
      font-family: "Poppins", sans-serif;
      text-align: center;
    }
  }
}
@media (min-width: 1024px) {
  footer {
    .container {
      .container-one {
        .grid-icons {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          padding: 20px 638px 0px;
        }
        .grid-items-icons {
          padding: 5px 593px 35px;
        }
      }
      .container-two {
        ul li a {
          font-size: 1.1rem;
          color: black;
          font-weight: bold;
          font-family: "Poppins", sans-serif;
          list-style: none;
          text-decoration: none;
          text-transform: uppercase;
        }

        p {
          font-size: 1.1rem;
          color: black;
          font-weight: bold;
          font-family: "Poppins", sans-serif;
          text-transform: uppercase;
        }
      }

      .container-three {
        background: black;
        font-size: 1.1rem;
        color: white;
        font-weight: bold;
        font-family: "Poppins", sans-serif;
      }
    }
  }
}
</style>
