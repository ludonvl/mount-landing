<template>
    <div class="hero-head">
        <nav class="navbar is-fresh is-transparent no-shadow" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img src="~assets/img/mount-logo.svg" alt="" width="112" height="28">
                        <span class="name">{{$t('common.appname')}}</span>
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
                        <a href="#" v-scroll-to="'#downloads'" class="navbar-item is-secondary">
                            {{ $t("navbar.download") }}
                        </a>
                        <nuxt-link to="/signin" class="navbar-item is-secondary modal-trigger">
                            {{ $t("navbar.login") }}
                        </nuxt-link>
                        <nuxt-link to="/signup" class="navbar-item">
                            <span class="button signup-button rounded secondary-btn raised">
                            {{ $t("navbar.signup") }}
                            </span>
                        </nuxt-link>
                        <div class="navbar-item has-dropdown is-hoverable hide-tablet">
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
<style lang="scss">
@import '~assets/scss/var';

    .navbar-item {
        .name {
            color: $primary;
            font-size: 26px;
            font-family: $ft_nunito_regular;
            font-weight: bold;
        }
    }
</style>
<style lang="scss" scoped>
@media (max-width: 1023px) {
    .hide-tablet {
        display:none;
    }
}
</style>
