<template>
	<nav class="navbar is-success" role="navigation" aria-label="main navigation">
		<div class="container is-max-desktop px-2">
			<div class="navbar-brand">
				<div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>
				<a
					role="button"
					class="navbar-burger"
					:class="{ 'is-active': showMobileNav }"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
					@click.prevent="showMobileNav = !showMobileNav">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div
				id="navbarBasicExample"
				class="navbar-menu"
				:class="{ 'is-active': showMobileNav }">
				<div class="navbar-end">
					<router-link
						to="/"
						class="navbar-item"
						active-class="is-active"
						@click="showMobileNav = false">
						Notes
					</router-link>
					<router-link
						to="/stats"
						class="navbar-item"
						active-class="is-active"
						@click="showMobileNav = false">
						Stats
					</router-link>
				</div>
			</div>
		</div>
	</nav>
</template>

<style>
@media (max-width: 1023px) {
	.navbar-menu {
		position: absolute;
		left: 0;
		width: 100%;
	}
}
</style>

<script setup>
import { ref } from "vue";

// mobile nav
const showMobileNav = ref(false);
</script>
