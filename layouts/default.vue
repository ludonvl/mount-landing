<template>
  <div class="hero is-fullheight is-default is-bold">
    <Navbar/>
    <nuxt/>
    <Footer />
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {
  components: {
    Navbar,
    Footer,
  }
}
</script>
