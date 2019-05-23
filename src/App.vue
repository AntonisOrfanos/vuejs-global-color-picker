<template>
  <div id="my-app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">

      <ul class="navbar-nav">
        <li class="nav-item">
          <b-link class="nav-link" to="/">Home</b-link>
        </li>
        <li class="nav-item">
          <b-link class="nav-link" to="/color-picker">Color Picker</b-link>
        </li>
        <li class="nav-item">
          <b-link class="nav-link" to="/scss">SCSS</b-link>
        </li>
      </ul>

    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>
//import MyColorPicker from './components/MyColorPicker.vue'

export default {
  name: 'app',
  // components: {
  //   MyColorPicker
  // }
}
</script>

<style lang="scss">
  #my-app {
    background: #fff;
    box-shadow: 0px -3px 10px 5px #fff;
    // padding: 0;
  }
  a.nav-link {
    text-decoration: none !important;
    font-weight: normal !important;
  }
  .router-link-exact-active {
    font-weight: bold !important;
  }
</style>
