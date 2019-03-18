<template>
    <div class="column is-2 is-sidebar-menu is-hidden-mobile">
        <aside class="menu">
            <div class='menu-top'>
                <div>
                    <img src="~/assets/img/mount-logo.svg" alt="Logo">
                </div>
                <h1>{{ $t('common.appname') }}</h1>
            </div>
            <p class="menu-label">
            General
            </p>
            <ul class="menu-list">
                <li>
                    <nuxt-link :to="localePath('dashboard')">
                        <span class="icon">
                            <i class="fa fa-columns"></i>
                        </span>
                        <span>Dashboard</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="localePath('history')">
                        <span class="icon">
                            <i class="fa fa-history"></i>
                        </span>
                        <span>Historique</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="localePath('schedule')">
                        <span class="icon">
                            <i class="fa fa-calendar"></i>
                        </span>
                        <span>Plannification</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="localePath('settings')">
                        <span class="icon">
                            <i class="fa fa-sliders"></i>
                        </span>
                        <span>Paramètres</span>
                    </nuxt-link>
                </li>
                <p class="menu-label">
                Administration
                </p>
                <li>
                    <nuxt-link :to="localePath('account')">
                        <span class="icon">
                            <i class="fa fa-user"></i>
                        </span>
                        <span>Mon compte</span>
                    </nuxt-link>
                </li>
                <li>
                    <a @click="signOut">
                        <span class="icon">
                            <i class="fa fa-sign-out"></i>
                        </span>
                        <span>Déconnexion</span>
                    </a>
                </li>
            </ul>
            <div class="menu-bottom">
                <div class="dropdown is-hoverable">
					<div class="dropdown-trigger">
						<button class="button" aria-haspopup="true" aria-controls="dropdown-menu3">
						<span>{{ currentLang }}</span>
						<span class="icon is-small">
							<i class="fa fa-angle-down" aria-hidden="true"></i>
						</span>
						</button>
					</div>
					<div class="dropdown-menu" id="dropdown-menu3" role="menu">
						<div class="dropdown-content">
							<nuxt-link :to="switchLocalePath('fr')" class="dropdown-item">
								{{ $t('common.lang.french') }}
							</nuxt-link>
							<nuxt-link :to="switchLocalePath('en')" class="dropdown-item">
								{{ $t('common.lang.english') }}
							</nuxt-link>
						</div>
					</div>
                </div>
            </div>
        </aside>
    </div>
</template>
<script>
export default {
	data() {
		return {
			currentLang: (this.$i18n.locale && this.$i18n.locale == 'fr') ? 'Français' : 'English'
	    }
	},

	methods: {
		signOut() {
			console.log('deco');
		}
	}
}
</script>
<style lang="scss" scoped>
	@import 'assets/css/var';
	@import 'assets/css/sidebar';
</style>
