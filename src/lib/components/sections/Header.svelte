<script>
	import { text } from '@sveltejs/kit';
	import Button from '../standalone/Button.svelte';
	import Navbar from './Navbar.svelte';
</script>

<header class="relative h-[90vh]">
	<img
		src="/images/header/header-wallpaper-2.png"
		alt=""
		class="absolute inset-0 h-full w-full object-cover"
	/>

	<div>
		<div class="absolute top-[50%] left-0 translate-y-[-50%] flex flex-col gap-4 items-start pl-10">
			<a
				href="https://maps.app.goo.gl/hYM3s8VpujVuogpK7"
				target="_blank"
				class="inline-flex justify-between items-center py-1 px-1 pe-4 mb-0 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
			>
				<span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">New</span>
				<span class="text-sm font-medium">Nouvel expert en bâtiment sur Revel</span>
				<svg
					class="w-2.5 h-2.5 ms-2 rtl:rotate-180"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 6 10"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m1 9 4-4-4-4"
					/>
				</svg>
			</a>

			<h1 class="text-white text-6xl font-extrabold tracking-tight titleHome">
				Vous avez besoin de <span class="">Conseil ?</span><br /> 8N est là pour vous accompagner
			</h1>
			<h2 class="mt-3 text-lg text-white sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
				Découvrez l'expertise qui va au-delà des normes. 8N Expertise en bâtiment, votre partenaire
				de confiance, résout vos défis immobiliers avec précision et engagement. Explorez la qualité
				à chaque détail.
			</h2>
			<div class="w-full mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
				<Button text="Nous contacter" btnSize="medium" to="/contact" />
				<Button
					text="Nos prestations"
					btnSize="medium"
					color="white"
					to="/prestations/expertises/completes"
					class="ml-2"
				/>
			</div>
			<div class="mt-4 text-white">
				Une question spécifique ?
				<a href="#faq" class="underline cursor-pointer"> Regardez notre FAQ </a>
			</div>
		</div>
	</div>
</header>

<style>
</style>
