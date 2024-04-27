<script lang="ts">
	import Footer from '../lib/components/standalone/Footer.svelte';

	import BlocPhoto from '../lib/components/standalone/BlocPhoto.svelte';

	import ContactSection from '../lib/components/sections/ContactSection.svelte';

	import FAQSection from '../lib/components/sections/FAQSection.svelte';

	import MissionsBloc from '../lib/components/sections/MissionsBloc.svelte';

	import GridListItems from '../lib/components/standalone/GridListItems.svelte';

	import SectionTextDescList from '../lib/components/standalone/SectionTextDescList.svelte';

	import BlocImagesTextList from '../lib/components/standalone/BlocImagesTextList.svelte';

	import Head from '$lib/components/sections/Head.svelte';
	import type { Image } from '$lib/types/Image';
	import Section from '$lib/components/standalone/Section.svelte';
	import type { Category, ListItem } from '$lib/types/ListItem';

	const imagesForBlocImagesTextList: [Image, Image, Image, Image] = [
		{
			src: '/images/photos/couverture_degrade.jpg',
			alt: 'Toiture abimée'
		},
		{
			src: '/images/photos/fissure_liee_au_mouvement_du_sol.jpg',
			alt: 'Fissure liée au mouvement du sol'
		},
		{
			src: '/images/photos/infiltration_eau_bois.jpg',
			alt: 'Infiltration eau, pourrissement du bois'
		},
		{
			src: '/images/photos/non_respect_normes.jpg',
			alt: 'Non respect des normes'
		}
	];

	const aboutUsItems: ListItem[] = [
		{
			title: 'Expertise et Expérience',
			description:
				"Après 29 ans d'expérience dans le bâtiment, notre expert a été formé et certifié par l'OFIB (R) en expertise bâtiment amiable et complément judiciaire."
		},
		{
			title: 'Engagements',
			description:
				'Nous offrons des réponses techniques, réglementaires et parfois juridiques aux désordres du bâtiment.'
		},
		{
			title: 'Certifications',
			description: "Certifié expert bâtiment option judiciaire par l'OFIB (R)."
		},
		{
			title: 'Intégrité et Transparence',
			description:
				'Nous croyons en des valeurs solides, assurant une approche honnête, rigoureuse et claire.'
		}
	];

	const faqItems: ListItem[] = [
		{
			title: 'Quand devrais-je faire appel à un expert en bâtiment&nbsp;?',
			description:
				"Vous devriez consulter un expert en bâtiment en cas de malfaçons, fissures, problèmes d'humidité, dégâts des eaux, ou tout autre problème structurel dans votre propriété."
		},
		{
			title:
				"Qu'est-ce qu'une expertise en bâtiment apporte de plus qu'une simple inspection&nbsp;?",
			description:
				"Une expertise en bâtiment va au-delà d'une simple inspection en fournissant une analyse approfondie des problèmes, des recommandations de réparation, neutre et désintéressées et un rapport d'expertise juridiquement opposable si nécessaire."
		},
		{
			title: "Quels sont les services proposés pour l'achat d'une propriété&nbsp;?",
			description:
				"Nous offrons un audit technique avant l'achat, identifiant les éventuels problèmes structurels et fournissant des conseils sur les réparations nécessaires. Cela vous permet de prendre une décision éclairée lors de l'achat d'un bien immobilier."
		},
		{
			title: 'Que faire en cas de sinistre dans ma propriété&nbsp;?',
			description:
				"Contactez-nous dès que possible. Nous intervenons en tant qu'expert d'assuré, évaluant les dommages, défendant vos droits auprès de l'assurance, et vous guidant tout au long du processus d'indemnisation."
		},
		{
			title:
				'Quelle est la différence entre une expertise amiable et une expertise judiciaire&nbsp;?',
			description:
				"Une expertise amiable résout des litiges à la demande d'une partie, recherchant une solution amiable. L'expertise judiciaire intervient après épuisement des recours amiables, ordonnée par le juge, pour éclairer sa décision. Une expertise amiable peut dans certains cas permettre d'aller directement au fond, sans le recourt à une expertise judiciaire."
		},
		{
			title:
				"Comment puis-je bénéficier de vos services d'assistance à la réception de travaux&nbsp;?",
			description:
				"Si vous avez un Contrat de Construction de Maison Individuelle (CMI) ou une Vente en l'État Futur d'Achèvement (VEFA), nous pouvons vous assister lors de la réception des travaux pour vous assurer que tout est conforme aux normes et aux spécifications."
		},
		{
			title: "Quel est le coût d'une expertise en bâtiment&nbsp;?",
			description:
				"Le coût peut varier en fonction de la nature et de l'étendue de l'expertise requise. Contactez-nous pour discuter de votre cas spécifique et obtenir un devis personnalisé."
		},
		{
			title: "Quels sont les avantages d'un rapport d'expertise&nbsp;?",
			description:
				"Un rapport d'expertise amiable est juridiquement opposable. Il décrit un dommage, établit causes et responsabilité. Il renforce votre position pour défendre vos droits à la réparation ou l'indemnisation, lors de négociations ou de procédures judiciaires si nécessaire. "
		}
	];

	const aboutUsDescription = `
L'expertise est un outil essentiel pour éclairer les décisions dans des situations complexes. Fort d'une expérience de plus de 29 ans dans le bâtiment et certifié par l'OFIB (R), notre expert vous offre un regard objectif à chaque étape de la mission que vous lui confierez.`;

	const categoriesOnIntervientSur: Category[] = [
		{ id: 1, label: 'Désordres' },
		{ id: 2, label: 'Transactions Immobilières' },
		{ id: 3, label: 'Assurance et Sinistres' },
		{ id: 4, label: 'Travaux et Construction' },
		{ id: 5, label: 'Juridique et Litiges' }
	];

	const listOnIntervientSur: ListItem[] = [
		{
			category: 1,
			title: '<h2>Malfaçons</h2>',
			description: 'Identification et expertise des défauts de réalisation.'
		},
		{
			category: 1,
			title: '<h2>Fissures</h2>',
			description: "Analyse des fissures présentes sur les façades ou structures d'un bâtiment."
		},
		{
			category: 1,
			title: '<h2>Humidité</h2>',
			description:
				"Expertise des problèmes d'humidité pouvant affecter la structure d'un bien immobilier."
		},
		{
			category: 1,
			title: '<h2>Infiltrations</h2>',
			description:
				"Expertise des infiltrations d'eau qui peuvent compromettre l'intégrité d'un bâtiment."
		},
		{
			category: 1,
			title: '<h2>Thermique</h2>',
			description: "Analyse des problèmes liés à l'isolation thermique d'un bien immobilier."
		},
		{
			category: 2,
			title: '<h2>Audit technique avant Achat/Vente</h2>',
			description:
				"Évaluation technique d'un bien immobilier avant sa mise en vente ou son acquisition."
		},
		{
			category: 3,
			title: '<h2>Expert d’assuré</h2>',
			description:
				"Intervention après un sinistre pour évaluer les dommages et défendre les droits de l'assuré."
		},
		{
			category: 3,
			title: '<h2>CAT NAT</h2>',
			description:
				"Expertise suite à un sinistre lié à une catastrophe naturelle, sècheresse ou inondation et défense des droits de l'assuré."
		},
		{
			category: 3,
			title: '<h2>ambriolage</h2>',
			description:
				"Évaluation des dommages causés lors d'un cambriolage avec assistance pour les démarches d'assurance."
		},
		{
			category: 3,
			title: '<h2>Incendie, inondation, tempête...</h2>',
			description:
				"Intervention après un incendie, une inondation, ou une tempête pour évaluer les dommages et défendre les droits de l'assuré."
		},
		{
			category: 4,
			title: '<h2>Assistance à réception de travaux (CMI-VEFA)</h2>',
			description:
				"Soutien technique lors de la réception des travaux dans le cadre d'un Contrat de Construction de Maison Individuelle ou d'une Vente en l'État Futur d'Achèvement."
		},
		{
			category: 5,
			title: '<h2>Assistance à expertise judiciaire</h2>',
			description:
				'Accompagnement technique lors de procédures judiciaires nécessitant une expertise dans le domaine du bâtiment.'
		},
		{
			category: 5,
			title: '<h2>Trouble anormal du voisinage</h2>',
			description:
				'Intervention en cas de problèmes de voisinage impactant la qualité de vie, avec expertise technique.'
		},
		{
			category: 5,
			title: '<h2>Vices cachés</h2>',
			description:
				"Réalisation d'une expertise à la preuve du vice caché et mise à la cause du vendeur."
		}
	];
</script>

<svelte:head>
	<Head
		title="8nexpertise - expertise bâtiment"
	/>
</svelte:head>

<section class="pt-40 pb-40">
	<SectionTextDescList
		subTitle="QUI SOMMES NOUS"
		title="8N un expert indépendant à vos côtés pour la défense de vos intérêts."
		listItems={aboutUsItems}
		bodyText={aboutUsDescription}
		btnText="En savoir plus"
		btnLink="/prestations/expertises/avec-recherche-de-responsabilite"
	/>
</section>

<section class="pb-40">
	<BlocImagesTextList
		subTitle="Question"
		title="Expert en bâtiment, c'est quoi&nbsp;?"
		bodyText="L'expert en bâtiment identifie les désordres, évalue les risques, détermine garanties et recours en cas de responsabilité, suggère des solutions de réparation, et accompagne le processus jusqu'à un protocole d'accord pour la réparation ou l'indemnisation du dommage. Au besoin, il intervient jusqu'à la procédure judiciaire en tant que conseil technique de partie. Son rôle est d'assurer un suivi complet, du diagnostic initial à la résolution finale, garantissant la protection de vos intérêts dans toutes les phases du processus lié aux problèmes de construction."
		images={imagesForBlocImagesTextList}
	/>
</section>

<section class="pb-40">
	<BlocPhoto />
</section>

<section class="pb-40">
	<GridListItems
		title="Nous intervenons sur..."
		subTitle="Expertise"
		categories={categoriesOnIntervientSur}
		listItems={listOnIntervientSur}
	/>
</section>

<section class="pb-40">
	<ContactSection />
</section>

<Section class="sm:p-10">
	<FAQSection items={faqItems} />
</Section>

<Footer />

<style>
</style>
