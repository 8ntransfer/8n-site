<script>
	import Header from '../lib/components/sections/Header.svelte';
	import '../app.postcss';
	import './styles.css';
	import Navbar from '$lib/components/sections/Navbar.svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	import { page } from '$app/stores';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Logo from '$lib/components/svg/Logo.svelte';
	import { twMerge } from 'tailwind-merge';

	let splashScreenHidden = false;

	setTimeout(() => {
		splashScreenHidden = true;
	}, 1000);
</script>

<div class="app">
	<SvelteToast />

	<Navbar />
	{#if $page.url.pathname === '/'}
		<Header />
	{/if}

	<div
		class={twMerge(
			'h-[100vh] w-[100vw] fixed top-0 transition-all ease-in-out duration-1000 left-0 bg-blue-50 z-50 flex justify-center items-center',
			splashScreenHidden && 'opacity-0 pointer-events-none'
		)}
	>
		<Logo withBg={false} logoColor="#2563eb" class="h-28 w-28 sm:h-28 sm:w-28" />
	</div>

	<main class="max-w-[100vw]">
		<slot />
	</main>
</div>
