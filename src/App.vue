<template>
  <div id="app" class="container">
    <div class="columns">
      <SideBar />
      <router-view/>
    </div>
  </div>
</template>
<style lang="scss">
@import 'src/style/sass/variable';
@import 'src/style/sass/layout_default';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $colorMain_3;
}
</style>
<script>
import SideBar from '@/components/SideBar';
export default {

    components: {
        SideBar
    }
}
</script>

