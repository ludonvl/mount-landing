<template>
    <section class="hero is-info is-fullheight">
        <Navbar />
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-6 is-offset-3">
                    <h1 class="title">{{ $t('common.appname') }}</h1>
                    <h2 class="subtitle">{{ $t('common.catcher') }}</h2>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import Navbar from '~/components/Navbar'

    export default {
        components: {
            Navbar
        }
    }

</script>
<style lang="scss" scoped>
html,body {
  font-family: 'Open Sans', serif;
}
.hero.is-info {
  background: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url('https://unsplash.it/1200/900?random') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.hero .subtitle {
  padding: 3rem 0;
  line-height: 1.5;
}
</style>
