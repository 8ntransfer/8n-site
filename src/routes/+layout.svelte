<script>
	import Header from '../lib/components/sections/Header.svelte';
	import '../app.postcss';
	import './styles.css';
	import Navbar from '$lib/components/sections/Navbar.svelte';

	import { page } from '$app/stores';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<div class="app">
	<SvelteToast />

	<Navbar />
	{#if $page.url.pathname === '/'}
		<Header />
	{/if}

	<main class="max-w-[100vw]">
		<slot />
	</main>
</div>
