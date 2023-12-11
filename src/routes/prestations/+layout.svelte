<script lang="ts">
	import { page } from '$app/stores';
	import Head from '$lib/components/sections/Head.svelte';
	import Footer from '$lib/components/standalone/Footer.svelte';
	import { goto } from '$app/navigation';

	let currentLink = '';

	$: currentLink = $page.url.pathname;

	let activeClass =
		'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full font-semibold text-blue-600 before:bg-blue-600';
	let nonActiveClass =
		'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300';

	let menu = [
		{
			title: 'Expertise malfaçon, désordre, litige...',
			links: [
				{
					title: "Mission d'expertise complète",
					href: '/prestations/expertises/completes'
				},
				{
					title: 'Expertise avec Avis Oral',
					href: '/prestations/expertises/oral'
				},
				{
					title: 'Expertise avec Note Expertale',
					href: '/prestations/expertises/note-expertale'
				}
			]
		},
		{
			title: 'Assistance Sinistres',
			links: [
				{
					title: 'Expertise après sinistre',
					href: '/prestations/assistance/expertise-apres-sinistre'
				},
				{
					title: 'Catastrophe naturelle',
					href: '/prestations/assistance/catastrophes-naturelles'
				},
				{
					title: 'Judiciaire',
					href: '/prestations/assistance/judiciaire'
				}
			]
		},
		{
			title: 'Évaluation immobilière',
			links: [
				{
					title: 'Avis avant achat/vente',
					href: '/prestations/avis'
				}
			]
		}
	];

	const handleSelectClick = (href: string) => {
		goto(href, { replaceState: true });
	};
</script>

<svelte:head>
	<Head
		title="8N - Prestations"
		description="Solutions complètes pour vos problèmes de construction."
	/>
</svelte:head>

<div class="mt-28" />
<div class="relative flex flex-col md:flex-row">
	<select
		class="md:hidden mx-4 px-3 py-2 mb-4 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 text-gray-700"
		on:change={(e) => handleSelectClick(e.target?.value)}
	>
		{#each menu as menuItem}
			<optgroup label={menuItem.title}>
				{#each menuItem.links as link}
					<option value={link.href}>{link.title}</option>
				{/each}
			</optgroup>{/each}
	</select>
	<div
		class="hidden md:flex sticky top-[4.75rem] ml-10 h-[calc(100vh-4.75rem)] w-96 overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72 xl:pr-16"
	>
		<nav class="text-base lg:text-sm">
			<ul role="list" class="space-y-9">
				{#each menu as menuItem}
					<li>
						<h2 class="font-display font-medium text-slate-900 dark:text-white">
							{menuItem.title}
						</h2>
						<ul
							role="list"
							class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
						>
							{#each menuItem.links as link}
								<li class="relative">
									<a
										class={currentLink === link.href ? activeClass : nonActiveClass}
										href={link.href}>{link.title}</a
									>
								</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	<div class="mx-4 flex justify-center items-center pt-12 pr-10 pb-20">
		<div class="md:max-w-2xl"><slot /></div>
	</div>
</div>
<Footer />
