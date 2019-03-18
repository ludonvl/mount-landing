<template>
	<div class="column is-main-content">
		<section class="hero is-primary">
			<div class="hero-body">
				<div class="container">
				<h1 class="title">
					Dashboard
				</h1>
				<!-- <h2 class="subtitle">
					Hero subtitle
				</h2> -->
				</div>
			</div>
		</section>
		<a class="button is-info is-medium is-fullwidth" @click="addDevice()">Ajouter un device</a>
		<div :class="[{ 'is-active': openModal }, 'modal']">
			<div class="modal-background"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">Modal title</p>
					<button class="delete" aria-label="close" @click="closeModal"></button>
				</header>
				<section class="modal-card-body">
				<!-- Content ... -->
				</section>
				<footer class="modal-card-foot">
					<button class="button is-success">Save changes</button>
					<button class="button">Cancel</button>
				</footer>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		layout: 'user',

		data() {
			return {
				openModal: false
			}
		},

		methods: {
			addDevice() {
				this.openModal = true;
				console.log(this.openModal);
			},

			closeModal() {
				this.openModal = false;
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import 'assets/css/var';
	@import 'assets/css/dashboard';

	.hero {
		border-radius: 10px;

		.hero-body {
			padding: 2rem 1.5rem;
		}
	}
</style>
