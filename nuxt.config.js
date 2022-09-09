const common = require('./lang/common')
const navbar = require('./lang/navbar')
const sign = require('./lang/sign')
const pricing = require('./lang/pricing')
const contact = require('./lang/contact')
const form = require('./lang/form')

const translations = {
	en: {
		...common.en,
		...navbar.en,
		...sign.en,
		...pricing.en,
		...contact.en,
		...form.en,
	},
	fr: {
		...common.fr,
		...navbar.fr,
		...sign.fr,
		...pricing.fr,
		...contact.fr,
		...form.fr,
	}
}

module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'Mounted',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		link: [
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' }
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
		['nuxt-fontawesome', {
			component: 'font-awesome-icon',
			imports: [{
				set: '@fortawesome/free-solid-svg-icons',
				icons: ['fas']
			}, {
				set: '@fortawesome/free-brands-svg-icons',
				icons: ['fab']
			}]
		}],
		['vue-scrollto/nuxt', { easing: 'ease-in-out', duration: 700 }],
		['nuxt-validate', {
			lang: 'fr',
			nuxti18n: {
			  locale: {
				'zh-CN': 'zh_CN'
			  }
			}
		}],
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

