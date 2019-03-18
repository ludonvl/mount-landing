<template>
    <div class="columns is-fullheight">
	    <Sidebar/>
    	<nuxt/>
	</div>
</template>
<script>
import Sidebar from '../components/Sidebar'

export default {
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

// *, *:before, *:after {
//   box-sizing: border-box;
//   margin: 0;
// }

.columns {
  &.is-fullheight {
    margin: 0;
    padding: 0;
    min-height: calc(100vh);
    max-height: calc(100vh);
    height: calc(100vh);
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    .column {
      overflow-y: auto;
    }
  }
}

</style>

