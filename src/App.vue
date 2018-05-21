<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">page1</router-link><br />
      <router-link to="/page2">page2</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 800px;
}
.nav {
  float: left;
  width: 200px;
  height: 800px;
  border: 1px solid #f00;
}
.content {
  float: left;
  width: 1000px;
  border: 1px solid #f0f;
}
</style>
