<template>
    <div class="hero-head">
        <nav class="navbar is-fresh is-transparent no-shadow" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img src="~assets/img/mount-logo.svg" alt="" width="112" height="28">
                    </a>


                    <a role="button" :class="['navbar-burger', { 'is-active': isHamburger }]" @click="isHamburger = !isHamburger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbar-menu" :class="['navbar-menu', { 'is-active': isHamburger }]">
                    <div class="navbar-end">
                        <a href="#" v-scroll-to="'#features'" class="navbar-item is-secondary">
                            {{ $t("navbar.features") }}
                        </a>
                        <a href="#" v-scroll-to="'#downloads'" v-smooth-scroll class="navbar-item is-secondary">
                            {{ $t("navbar.download") }}
                        </a>
                        <a href="#" v-scroll-to="'#pricing'" class="navbar-item is-secondary">
                            {{ $t("navbar.pricing") }}
                        </a>
                        <a href="#" class="navbar-item is-secondary modal-trigger" data-target="modal">
                            {{ $t("navbar.login") }}
                        </a>
                        <a class="navbar-item">
                            <span class="button signup-button rounded secondary-btn raised">
                            {{ $t("navbar.signup") }}
                            </span>
                        </a>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-item">
                                {{ currentLang }}
                            </a>

                            <div class="navbar-dropdown is-right">
    							<nuxt-link :to="switchLocalePath('fr')" class="navbar-item">
                                    {{ $t("common.lang.french") }}
    							</nuxt-link>
    							<nuxt-link :to="switchLocalePath('en')" class="navbar-item">
                                    {{ $t("common.lang.english") }}
    							</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        computed: {
            currentLang() {
                return this.$i18n.locale.charAt(0).toUpperCase() + this.$i18n.locale.slice(1)
            }
        },

        data() {
            return {
                isHamburger: false
            }
        }
    }
</script>
