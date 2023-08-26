<template>
  <div>
    <Header/>
    <div class="width-growth-limit" >
      <nuxt />
    </div>
    <Footer/>
  </div>
</template>
<script>
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer"
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
    };
  },
  methods: {

  },
};
</script>
,

<style>
.width-growth-limit {
  max-width: 1366px;
  margin: 0 auto;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h4,
h5,
h6,
span,
p,
a,
strong,
em {
  font-family: "Source Sans Pro", sans-serif;
}


</style>
