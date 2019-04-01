const common = require('./lang/common')
const navbar = require('./lang/navbar')
const sign = require('./lang/sign')

const translations = {
	en: {
		...common.en,
		...navbar.en,
		...sign.en,
	},
	fr: {
		...common.fr,
		...navbar.fr,
		...sign.fr,
	}
}

module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'Mount',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#3B8070' },
	/*
	** Build configuration
	*/
	build: {
		/*
		** Run ESLint on save
		*/
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
				enforce: 'pre',
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				exclude: /(node_modules)/
				})
			}
		}
	},

	css: [
		{ src: '~/assets/scss/main.scss', lang: 'scss' },
		{ src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' }
	],

	modules: [
		'@nuxtjs/axios',
		['nuxt-i18n', {
			locales: [
				{
					name: 'Français',
					code: 'fr',
					iso: 'fr-FR',
				},
				{
					name: 'English',
					code: 'en',
					iso: 'en-US',
				},
			],
			// langDir: 'lang/',
			defaultLocale: 'fr',
			vueI18n: {
				fallbackLocale: 'fr',
				messages: translations
			}
		}],
	],

	axios: {
		baseURL: 'http://localhost:8000/api/',
	}
}

