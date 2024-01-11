<script lang="ts">
	import { page } from '$app/stores';
	import Button from '../standalone/Button.svelte';

	import Headphones from '~icons/mdi/headphones';
	import MegaMenu from '../standalone/MegaMenu.svelte';
	import { browser } from '$app/environment';
	import { twMerge } from 'tailwind-merge';
	import Logo from '../svg/Logo.svelte';

	let currentLink = '';

	$: currentLink = $page.url.pathname;

	let y = 0;
	let isOnTop = true;
	let isOnHeader = true;
	let isMenuOpen = false;

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	$: isOnTop = y < 100;
	// is on header should be false when user has scroll 100vh
	// and true when user has scroll 100vh + 1px
	$: isOnHeader = browser && y < window.innerHeight / 2;
</script>

<svelte:window bind:scrollY={y} />

<nav
	class="fixed top-0 left-0 w-[100vw] flex items-center justify-between py-6 px-4 md:px-10 z-10 transition-all ease-in-out {!isOnTop
		? 'bg-slate-600/30 backdrop-blur-lg'
		: ''} {currentLink !== '/' ? 'bg-slate-600/30 backdrop-blur-lg' : ''}"
>
	<a class="z-50" href="/">
		<Logo
			class="h-12 w-12 sm:h-16 sm:w-16"
			backgoundColor={isMenuOpen ? '#1D4ED8' : '#6B728033'}
			logoColor="#fff"
		/>
		<!-- {#if isMenuOpen}
			<img src="/images/logo-blue.svg" alt="" class="h-8" />
		{:else}
			<img src="/images/logo.svg" alt="" class="h-8" />
		{/if} -->
	</a>

	<div class="absolute hidden md:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
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

	<Button
		class="hidden md:flex"
		text="+33 6 44 82 83 16"
		color="primary"
		to="tel:+33644828316"
		selected={currentLink === '/'}><Headphones slot="icon" /></Button
	>

	<!-- create a hamburger menu -->
	<div class="md:hidden">
		<button
			class={twMerge(
				'relative group z-10 flex items-center justify-center w-12 h-12',
				isMenuOpen && 'hidden'
			)}
			aria-controls="mobile-menu"
			aria-expanded="false"
			on:click={toggleMenu}
		>
			<span class="sr-only">Open main menu</span>
			<span
				aria-hidden="true"
				class={twMerge(
					'block transition-all ease-in duration-200 absolute left-[50%] top-[50%] translate-x-[calc(-50%+.25rem)] translate-y-[-.25rem] w-8 h-[3px] bg-white rounded-sm group-hover:translate-x-[calc(-50%)]  group:hover:rotate-0 group-active:translate-y-[-50%]',
					isMenuOpen && 'rotate-45 translate-x-[calc(-50%)] translate-y-[-50%]'
				)}
			/>
			<span
				aria-hidden="true"
				class={twMerge(
					'block transition-all ease-in duration-200 absolute w-8 h-[3px] left-[50%] top-[50%] translate-x-[calc(-50%-.25rem)] translate-y-[.25rem] bg-white rounded-sm group-hover:translate-x-[calc(-50%)] group-active:translate-y-[-50%]',
					isMenuOpen &&
						'rotate-[-45deg] translate-x-[calc(-50%)] translate-y-[-50%] group:hover:rotate-0'
				)}
			/>
		</button>

		<div
			class={twMerge(
				'absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden',
				isMenuOpen ? 'translate-y-0' : '-translate-y-full'
			)}
		>
			<div
				class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
			>
				<div class="pt-5 pb-6 px-5">
					<div class="flex items-center justify-between flex-row-reverse">
						<div class="-mr-2">
							<button
								type="button"
								on:click={toggleMenu}
								class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
							>
								<span class="sr-only">Close menu</span>
								<!-- Heroicon name: outline/x -->
								<svg
									class="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div class="mt-6">
						<nav class="grid gap-y-8">
							<a
								on:click={toggleMenu}
								href="/"
								class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
							>
								<span class="ml-3 text-base font-medium text-gray-900">Accueil</span>
							</a>

							<a
								on:click={toggleMenu}
								href="/prestations/expertises/avec-rapport"
								class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
							>
								<span class="ml-3 text-base font-medium text-gray-900">Prestations</span>
							</a>

							<a
								on:click={toggleMenu}
								href="/contact"
								class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
							>
								<span
									class="ml-3 text-base font-medium text
								-gray-900">Contact</span
								>
							</a>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>
