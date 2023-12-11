<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import IntersectionObserver from '../standalone/IntersectionObserver.svelte';
	import Target from '~icons/mdi/BullseyeArrow';
	import Doc from '~icons/mdi/FileDocumentCheckOutline';
	import Eye from '~icons/mdi/EyeOutline';

	let hasIntersected = false;

	const isIntersecting = () => {
		console.log('isIntersecting');

		hasIntersected = true;
	};
</script>

<IntersectionObserver on:intersecting={isIntersecting} top={-200} />
<div class="bg-white dark:bg-gray-800">
	<div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
		<h2
			class={twMerge(
				'text-3xl mb-8 font-bold text-black dark:text-white sm:text-4xl opacity-0 translate-y-8 transition-all duration-300 ease-in',
				hasIntersected && 'blur-none opacity-100 translate-y-0'
			)}
		>
			<span class="block">“Besoin d'un expert pour suivre mon chantier ?”</span>
			<span class="block font-medium text-xl mt-2 text-blue-500"
				>8N Expertise et bâtiment un expert indépendant à vos côtés
			</span>
		</h2>
		<div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
			<div
				class={twMerge(
					'w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800 transition-all duration-300 ease-in translate-y-2 delay-500 opacity-0',
					hasIntersected && 'opacity-100 translate-y-0'
				)}
			>
				<div class="flex-shrink-0">
					<div
						class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-blue-500 rounded-md"
					>
						<Target style="font-size: 1.25em; " />
					</div>
				</div>
				<h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
					Nos missions
				</h3>
				<p class="py-4 text-gray-500 text-md dark:text-gray-300">
					Vous permettre d’avoir un avis objectif à chaque étape de votre projet et ainsi prendre
					les bonnes décisions.
				</p>
			</div>
			<div
				class={twMerge(
					'w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800 transition-all duration-300 ease-in translate-y-2 delay-300 opacity-0',
					hasIntersected && 'opacity-100 translate-y-0'
				)}
			>
				<div class="flex-shrink-0">
					<div
						class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-blue-500 rounded-md"
					>
						<Doc style="font-size: 1.25em; " />
					</div>
				</div>
				<h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
					Certifications
				</h3>
				<p class="py-4 text-gray-500 text-md dark:text-gray-300">
					Plus de 20 ans d’expérience et une certification "Expertise Bâtiment" délivrée par l’OFIB
				</p>
			</div>
			<div
				class={twMerge(
					'w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800 transition-all duration-300 ease-in translate-y-2 delay-700 opacity-0',
					hasIntersected && 'opacity-100 translate-y-0'
				)}
			>
				<div class="flex-shrink-0">
					<div
						class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-blue-500 rounded-md"
					>
						<Eye style="font-size: 1.25em; " />
					</div>
				</div>
				<h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
					Notre vision
				</h3>
				<p class="py-4 text-gray-500 text-md dark:text-gray-300">
					Dégagez vous des responsabilités. Le rapport d'expertise vous permettra d'obtenir
					réparation des préjudices subis.
				</p>
			</div>
		</div>
	</div>
</div>

<style>
</style>
