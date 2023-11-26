<script>
	import Header from '../lib/components/sections/Header.svelte';
	import '../app.postcss';
	import './styles.css';
	import Navbar from '$lib/components/sections/Navbar.svelte';

	// get current url path
	import { page } from '$app/stores';
</script>

<div class="app">
	<Navbar />
	{#if $page.url.pathname === '/'}
		<Header />
	{/if}

	<main>
		<slot />
	</main>
</div>
