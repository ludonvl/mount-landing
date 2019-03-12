<template>
    <div class="hero-head">
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="../">
                        <img src="~/assets/img/mount-logo2.svg" alt="Logo">
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
                            <nuxt-link :to="localePath('signup')" class="button is-white is-outlined">
                                <span class="icon">
                                    <i class="fa fa-rocket"></i>
                                </span>
                                <span>{{ $t('navbar.signup') }}</span>
                            </nuxt-link>
                        </span>
                        <span class="navbar-item">
                            <nuxt-link :to="localePath('signin')" class="button is-danger">
                                <span class="icon">
                                    <i class="fa fa-user"></i>
                                </span>
                                <span>{{ $t('navbar.signin') }}</span>
                            </nuxt-link>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<style scoped>

</style>