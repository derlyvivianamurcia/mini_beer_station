<template>
  <header class="header">
    <nav class="navbar">
      <div class="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <ul class="menu-items">
          <li><a href="#"><img :src="IconMagnifier"  alt="Icon Magnifier"></a></li>
          <li><a href="#"><img :src="IconCart" alt="Icon cart"></a></li>
        </ul>
        <h1 class="logo">BEER Station</h1>
        <router-link :to="'/'">
        <div class="container-img">
          <img class="img-logo" :src="IconLogo" alt="logo" />
        </div>
      </router-link>
       <div class="container-items">
        <ul class="items">
          <li><a href="#"><img :src="IconMagnifier"  alt="Icon Magnifier"></a></li>
          <li><a href="#"><img :src="IconCart" alt="Icon cart"></a></li>
        </ul>
      </div>
      </div>
    </nav>
  </header>
</template>
<script>
import IconLogo from "../../assets/icons/logo.png";
import IconMagnifier from "../../assets/icons/lupa.png";
import IconCart from "../../assets/icons/carro-de-la-carretilla.png"
export default {
  data() {
    return {
      IconLogo: IconLogo,
      IconMagnifier: IconMagnifier,
      IconCart: IconCart,
    };
  },
};
</script>

 <style lang="scss" scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
}

.navbar input[type="checkbox"],
.navbar .hamburger-lines {
  display: none;
}

.container {
  max-width: 1200px;
  width: 90%;
  margin: auto;
}

.navbar {
  position: fixed;
  width: 100%;
  background: #000000;
  color: #fff;
  z-index: 1;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.menu-items {
  order: 2;
  display: flex;
}
.logo {
  order: 1;
  font-size: 1.8rem;
}
img.img-logo {
  height: 10vh;
}

.menu-items li,
button {
  list-style: none;
  margin-left: 1.5rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}
.container-items{
  display: none;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

@media (max-width: 768px) {
  .navbar-container input[type="checkbox"],
  .navbar-container .hamburger-lines {
    display: block;
  }

  .navbar-container {
    display: block;
    position: relative;
    height: 64px;
  }

  .navbar-container input[type="checkbox"] {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  .navbar-container .hamburger-lines {
    height: 25px;
    width: 35px;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .container-img {
    position: absolute;
    top: 4px;
    left: 58px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img.img-logo {
      height: 7vh;
    }
  }
  .container-items{
    position: absolute;
    top: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    right: 11px;
    ul{
      list-style: none;
      display: flex;
      img{
        height: 4vh;
      }
    }
  }
  .navbar-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #fff;
  }

  .navbar-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar-container .hamburger-lines .line2 {
    transition: transform 0.1s ease-in-out;
  }

  .navbar-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar .menu-items {
    padding-top: 100px;
    background: #24252a;
    height: 100vh;
    max-width: 300px;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -40px;
    padding-left: 40px;
    transition: transform 0.5s ease-in-out;
    overflow: scroll;
  }

  .navbar .menu-items li {
    margin-bottom: 1.8rem;
    font-size: 1rem;
    font-weight: 500;
  }

  button {
    width: fit-content;
    margin-left: 1rem;
  }

  .logo {
    display: none;
  }

  .navbar-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }
}

@media (max-width: 500px) {
  .navbar-container input[type="checkbox"]:checked ~ .logo {
    display: none;
  }
}
</style>

