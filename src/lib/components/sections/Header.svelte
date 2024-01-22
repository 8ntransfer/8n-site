<script>
	import Button from '../standalone/Button.svelte';
</script>

<header class="relative h-[90vh]">
	<img
		src="/images/header/header-wallpaper-3.png"
		alt=""
		class="absolute inset-0 h-full w-full object-cover"
	/>

	<div>
		<div
			class="absolute top-[50%] left-0 translate-y-[-50%] w-full flex flex-col gap-4 items-start pl-4 pr-4 md:pl-10"
		>
			<a
				href="/contact"
				target="_blank"
				class="hidden md:inline-flex justify-between items-center py-1 px-1 pe-4 mb-0 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
			>
				<span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">New</span>
				<span class="text-sm font-medium">Nouvel expert en bâtiment près de chez vous</span>
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

			<h1
				class="text-white self-center justify-self-center text-center text-4xl md:self-start md:text-left md:text-5xl lg:text-6xl font-extrabold tracking-tight titleHome"
			>
				Sinistre, litige, malfaçon, fissures... <br /> Vos intérêts, notre priorité.
			</h1>
			<h2
				class="mt-3 text-lg text-center self-center md:self-start md:text-left text-white sm:mt-5 sm:max-w-xl md:mt-5 md:text-xl lg:mx-0"
			>
				<span class="font-black text-blue-100">8N Expertise Bâtiment</span> vous accompagne dans la gestion
				des sinistres, malfaçons, litiges avec entreprises, et conseils relatifs à l'état structurel
				ou pathologies du bâtiment. La rigueur et l'indépendance sont les maîtres-mots de la conduite
				de nos mission.
			</h2>
			<div
				class="flex w-full mt-5 self-center items-center justify-self-center justify-center md:justify-start"
			>
				<Button text="Nous contacter" btnSize="medium" to="/contact" />
				<Button
					text="Nos prestations"
					btnSize="medium"
					color="white"
					to="/prestations/expertises/avec-rapport"
					class="ml-2"
				/>
			</div>
			<div class="hidden mt-4 sm:flex xs:bg-yellow-200 w-fit self-center md:self-start text-white">
				Une question spécifique&nbsp;? <a href="#faq" class="underline cursor-pointer ml-1">
					Regardez notre FAQ
				</a>
			</div>
		</div>
	</div>
</header>

<style>
</style>
