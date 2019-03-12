<template>
    <div class="hero-body">
        <video autoplay loop class="video-background" poster="/thumbnail.png" muted plays-inline>
            <source src="~/assets/videos/IMG_4625.webm" type="video/webm" />
            <source src="~/assets/videos/IMG_4625.mp4" type="video/mp4" />
        </video>
        <div class="container has-text-centered">
            <div class="column is-6 is-offset-3">
                <h1 class="title">{{ $t('common.title') }}</h1>
                <h2 class="subtitle">{{ $t('common.catcher') }}</h2>
            </div>
        </div>
    </div>
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
// .hero .nav, .hero.is-success .nav {
//   -webkit-box-shadow: none;
//   box-shadow: none;
// }
.hero .subtitle {
  padding: 3rem 0;
  line-height: 1.5;
}
/* The only rule that matters */
.video-background {
/*  making the video fullscreen  */
   position: absolute;
   opacity: .6;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
   overflow: hidden;
}
</style>
