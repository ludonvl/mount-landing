<template>
    <section class="hero is-info is-fullheight">
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="../">
                            <img src="~/assets/img/mount-logo.svg" alt="Logo">
                        </a>
                        <span class="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" class="navbar-menu">
                        <div class="navbar-end">
                            <span class="navbar-item">
                                <a class="button is-white is-outlined" href="#">
                                    <span class="icon">
                                        <i class="fa fa-home"></i>
                                    </span>
                                    <span>Home</span>
                                </a>
                            </span>
                            <span class="navbar-item">
                                <a class="button is-white is-outlined" href="#">
                                    <span class="icon">
                                        <i class="fa fa-superpowers"></i>
                                    </span>
                                    <span>Examples</span>
                                </a>
                            </span>
                            <span class="navbar-item">
                                <nuxt-link :to="localePath('signup')" class="button is-white is-outlined">
                                    <span class="icon">
                                        <i class="fa fa-rocket"></i>
                                    </span>
                                    <span>Sign up</span>
                                </nuxt-link>
                            </span>
                            <span class="navbar-item">
                                <nuxt-link :to="localePath('signin')" class="button is-white is-outlined">
                                    <span class="icon">
                                        <i class="fa fa-user"></i>
                                    </span>
                                    <span>Sign in</span>
                                </nuxt-link>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
            </div>

            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-6 is-offset-3">
                        <h1 class="title">
                            Mount
                        </h1>
                        <h2 class="subtitle">
                            $this is the best software platform for running an internet business. We handle billions of dollars every year for forward-thinking businesses around the world.
                        </h2>
                    </div>
                </div>
            </div>
    </section>
</template>
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
