<script lang="ts">
	import { page } from '$app/stores';
	import Button from '../standalone/Button.svelte';

	import Headphones from '~icons/mdi/headphones';
	import MegaMenu from '../standalone/MegaMenu.svelte';
	import { browser } from '$app/environment';

	let currentLink = '';

	$: currentLink = $page.url.pathname;

	let y = 0;
	let isOnTop = true;
	let isOnHeader = true;

	$: isOnTop = y < 100;
	// is on header should be false when user has scroll 100vh
	// and true when user has scroll 100vh + 1px
	$: isOnHeader = browser && y < window.innerHeight / 2;
</script>

<svelte:window bind:scrollY={y} />

<nav
	class="fixed top-0 left-0 w-full flex items-center justify-between py-6 px-10 z-10 transition-all ease-in-out {!isOnTop
		? 'bg-slate-600/30 backdrop-blur-lg'
		: ''} {currentLink !== '/' ? 'bg-slate-600/30 backdrop-blur-lg' : ''}"
>
	<a href="/">
		<img src="/images/logo.svg" alt="" class="h-8" />
	</a>

	<div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
		<ul class="flex gap-2">
			<li>
				{#if currentLink === '/'}
					<Button text="Accueil" color="ghost" to="/" class="text-white" selected />
				{:else}
					<Button text="Accueil" color="ghost" to="/" class="text-white" />
				{/if}
			</li>
			<li>
				{#if currentLink.includes('/prestations')}
					<MegaMenu class="text-white" text="Prestations" color="ghost" selected />
				{:else}
					<MegaMenu class="text-white" text="Prestations" color="ghost" />
				{/if}
			</li>
			<li>
				{#if currentLink === '/contact'}
					<Button class="text-white" text="Contact" color="ghost" to="/contact" selected />
				{:else}
					<Button class="text-white" text="Contact" color="ghost" to="/contact" />
				{/if}
			</li>
		</ul>
	</div>
	{#if (isOnHeader && currentLink === '/') || currentLink === '/contact'}
		<Button
			text="+33 7 81 39 96 49"
			color="primary"
			to="tel:+33781399649"
			selected={currentLink === '/'}><Headphones slot="icon" /></Button
		>
	{:else}
		<Button text="Nous contacter" color="primary" to="/contact" selected={currentLink === '/'}
			><Headphones slot="icon" /></Button
		>
	{/if}
</nav>
