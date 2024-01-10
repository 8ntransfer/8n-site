<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import {
		ButtonColorClass,
		type ButtonColor,
		type ButtonSize,
		type ButtonVariant,
		ButtonVariantClass,
		ButtonSizeClass,
		ButtonCommonClass,
		ButtonHoverClass
	} from '$lib/types/Button';
	import ChevronBottom from '~icons/mdi/chevron-down';
	import ArrowRight from '~icons/mdi/arrow-right';
	import type { Link } from '$lib/types/Link';

	export let text = 'Explorez mes prestations';
	export let color: ButtonColor = 'primary';
	export let btnSize: ButtonSize = 'small';
	export let variant: ButtonVariant = 'contained';
	export let disabled = false;
	export let loading = false;
	export let iconPosition: 'left' | 'right' = 'left';
	export let to = '';
	export let selected = false;

	let clazz = '';
	export { clazz as class };

	import { page } from '$app/stores';

	let activeClass = ButtonCommonClass;
	$: activeClass += ' ' + ButtonColorClass[color];
	$: activeClass += ' ' + ButtonVariantClass[variant];
	$: activeClass += ' ' + ButtonSizeClass[btnSize];
	$: activeClass += ' ' + (disabled ? 'opacity-50 pointer-events-none' : '');
	$: activeClass += ' ' + (loading ? 'cursor-wait' : '');
	$: activeClass += ' ' + (selected ? ButtonHoverClass[color] : '');
	$: activeClass += ' ' + clazz;

	let currentLinkId: number = 1;

	const setCurrentLink = (link: Link) => {
		console.log('mouse enter', link);

		currentLinkId = link.id;
	};

	let links: Link[] = [
		{
			id: 1,
			title: 'Expertise malfaçon, désordre, litige...',
			href: '/prestations/expertises/avec-rapport',
			text: "L'équipe propose des prestations en tous genres"
		},
		{
			id: 2,
			title: "Assistance sinistres / Expert d'assuré",
			href: '/prestations/assistance/assistance-apres-sinistre',
			text: 'Assistance Sinistres assurances, catastrophe naturelle, contre expertise'
		},
		{
			id: 3,
			title: 'Évaluation immobilière',
			href: '/prestations/avis',
			text: 'Votre expert réalise un avis avant achat avec compte rendue écrit ou oral in situe.'
		}
	];

	let childLinks: Link[] = [
		{
			id: 1,
			parent: 1,
			title: "Mission d'expertise avec rapport",
			href: '/prestations/expertises/avec-rapport',
			text: "Une fois sa mission clairement établie,votre expert va mener pour vous une mission d'expertise et identifier le désordre ou problème, sa nature et sa cause."
		},
		{
			id: 2,
			parent: 1,
			title: 'Expertise avec Avis Oral',
			href: '/prestations/expertises/oral',
			text: 'Après avoir éditer une lettre de mission avec un objectif clairement défini, votre expert se déplace sur les lieux et vous donne son avis technique oral.'
		},
		{
			id: 3,
			parent: 1,
			title: 'Expertise avec Note Expertale',
			href: '/prestations/expertises/note-expertale',
			text: 'Avis oral  + note expertale de compte rendue de la mission sans reportage photo ni  documentation réglementaire.'
		},
		{
			id: 4,
			parent: 2,
			title: 'Assistance après sinistre',
			href: '/prestations/assistance/assistance-apres-sinistre',
			text: 'Votre expert vous assiste comme expert d’assuré pour l’évaluation des dommages directs sur les bâtiments, matériels, mobiliers, marchandises...'
		},
		{
			id: 5,
			parent: 2,
			title: 'Catastrophe Naturelle',
			href: '/prestations/assistance/catastrophes-naturelles',
			text: 'Votre expert vous assiste comme expert d’assuré dés la survenue de l’événement et vous guide pour le bon déroulement de la phase déclarative.'
		},
		{
			id: 6,
			parent: 1,
			title: 'Judiciaire',
			href: '/prestations/expertises/judiciaire',
			text: "Réunion d'expertise Judiciaire"
		},
		{
			id: 7,
			parent: 3,
			title: 'Avis avant achat/vente',
			href: '/prestations/avis',
			text: 'Votre expert réalise un avis avant achat avec compte rendue écrit ou oral in situe.'
		}
	];
</script>

<button
	class={activeClass +
		' group relative after:content-[""] after:absolute after:hidden hover:after:block after:top-7 after:left-[50%] after:translate-x-[-50%] after:h-9 after:w-[100%] after:text-red-500'}
	on:mouseenter={() => setCurrentLink(links[0])}
>
	<span class="pr-0.5">{text}</span><span class="group-hover:rotate-180 ease-out duration-300"
		><ChevronBottom /></span
	>
	<div
		class="absolute mt-2 top-[100%] left-[50%] translate-x-[-50%] shadow-md rounded-md p-2 bg-white text-left flex gap-2 invisible group-hover:visible w-[clamp(650px, 100%, 80vw)]"
	>
		<div class="relative min-w-[300px] w-[300px] max-w-[300px]">
			{#each links as link}
				<a
					href={link.href}
					on:mouseenter={() => setCurrentLink(link)}
					class="block px-4 w-[100%] py-2 rounded-md text-left {currentLinkId === link.id
						? 'bg-gray-100 text-blue-100'
						: ''} "
				>
					<div class="font-medium text-sm text-sky-800 flex justify-between align-middle">
						{link.title}
						{#if link.standalone}
							<ArrowRight />
						{/if}
					</div>
				</a>
			{/each}
		</div>
		<div class="relative min-w-[400px] w-[400px] max-w-[400px]">
			{#each childLinks as link}
				{#if link.parent === currentLinkId}
					<a href={link.href} class="block px-4 py-2 rounded-md text-left hover:bg-gray-100">
						<div class="font-medium text-sky-800">{link.title}</div>
						<div class="font-medium text-sm text-slate-500">{link.text}</div>
					</a>
				{/if}
			{/each}
		</div>
	</div>
</button>
