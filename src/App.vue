<template>
  <div id="app">
    <div class="main">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";

export default {
  text: "App",
  components: {
    Header,
    Main,
    Footer
  }
};
</script>

<style lang="scss">
body {
  background: #f5f5f5;
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
.main {
  width: 550px;
  margin: 0 auto;
}
input[type="text"] {
  padding: 16px 16px 16px 60px;
  border: none;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  line-height: 1.4em;
  box-sizing: border-box;
}
input:focus {
  outline: none;
}
</style>
