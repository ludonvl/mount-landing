<template>
    <div class="hero-head">
        <nav class="navbar is-white">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="../">
                        <img src="~/assets/img/mount-logo.svg" alt="Logo">
                        <span>{{ $t('common.appname') }}</span>
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
                            <nuxt-link :to="localePath('signup')" class="button is-outlined">
                                <span class="icon">
                                    <i class="fa fa-rocket"></i>
                                </span>
                                <span>{{ $t('navbar.signup') }}</span>
                            </nuxt-link>
                        </span>
                        <span class="navbar-item">
                            <nuxt-link :to="localePath('signin')" class="button is-primary">
                                <span class="icon">
                                    <i class="fa fa-user"></i>
                                </span>
                                <span>{{ $t('navbar.signin') }}</span>
                            </nuxt-link>
                        </span>
                        <div class="navbar-item has-dropdown is-hoverable">
                          <a class="navbar-link is-arrowless">
                              {{ currentLang }}
                          </a>

                          <div class="navbar-dropdown is-right">
                            <nuxt-link :to="switchLocalePath('fr')" class="navbar-item">
                              {{ $t('common.lang.french') }}
                            </nuxt-link>
                            <nuxt-link :to="switchLocalePath('en')" class="navbar-item">
                              {{ $t('common.lang.english') }}
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
  data() {
    return {
      currentLang: this.$i18n.locale.charAt(0).toUpperCase() + this.$i18n.locale.slice(1)
    }
  }
}
</script>

<style lang="scss" scoped>

  @import 'assets/css/var';

  .navbar {
    background: #fff;
    border-bottom: $primary 3px solid;

    .navbar-brand {
      font-family: $ft_nunito_bold;
      font-size: 2rem;

      img {
        max-height: 2.75rem;
      }

      span {
        margin-left: 10%;
        color: darken($primary, 50%);
      }
    }

    .navbar-menu {
      font-family: $ft_nunito_regular;
    }

    .navbar-dropdown a:hover {
      background: #eee;
    }
  }
</style>
