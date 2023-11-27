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
	import PrestationsBloc from '$lib/components/sections/PrestationsBloc.svelte';

	const currentYear = new Date().getFullYear();

	const imagesForBlocImagesTextList: [Image, Image, Image, Image] = [
		{
			src: '/images/photos/plans.avif',
			alt: 'Image de plans'
		},
		{
			src: '/images/photos/house.avif',
			alt: 'Image de maison'
		},
		{
			src: '/images/photos/construction.avif',
			alt: 'Image de construction'
		},
		{
			src: '/images/photos/plans.avif',
			alt: 'Image de plans'
		}
	];

	const aboutUsItems: ListItem[] = [
		{
			title: 'Expertise et Expérience',
			description:
				"29 ans d'expérience : Notre expert principal, formé et certifié par l'OFIB, met à profit une expérience solide dans le domaine."
		},
		{
			title: 'Engagements',
			description:
				'Nous offrons des réponses techniques, réglementaires et parfois juridiques aux désordres du bâtiment.'
		},
		{
			title: 'Certifications',
			description: "Certifié expert bâtiment option judiciaire par l'OFIB."
		},
		{
			title: 'Intégrité et Transparence',
			description:
				'Nous croyons en des valeurs solides, assurant une approche honnête et transparente.'
		}
	];

	const faqItems: ListItem[] = [
		{
			title: 'Quand devrais-je faire appel à un expert en bâtiment ?',
			description:
				"Vous devriez consulter un expert en bâtiment en cas de malfaçons, fissures, problèmes d'humidité, dégâts des eaux, ou tout autre problème structurel dans votre propriété."
		},
		{
			title: "Qu'est-ce qu'une expertise en bâtiment apporte de plus qu'une simple inspection ?",
			description:
				"Une expertise en bâtiment va au-delà d'une simple inspection en fournissant une analyse approfondie des problèmes, des recommandations de réparation, et un rapport juridiquement opposable si nécessaire."
		},
		{
			title: 'Comment choisir un bon expert en bâtiment ?',
			description:
				"Choisissez un expert certifié, ayant une expérience significative dans le domaine, de bonnes références et des certifications reconnues. Consultez les avis clients et assurez-vous que l'expert est spécialisé dans les domaines qui vous préoccupent."
		},
		{
			title: "Quels sont les services proposés pour l'achat d'une propriété ?",
			description:
				"Nous offrons un audit technique avant l'achat, identifiant les éventuels problèmes structurels et fournissant des conseils sur les réparations nécessaires. Cela vous permet de prendre une décision éclairée lors de l'achat d'un bien immobilier."
		},
		{
			title: 'Que faire en cas de sinistre dans ma propriété ?',
			description:
				"Contactez-nous dès que possible. Nous intervenons en tant qu'expert d'assuré, évaluant les dommages, défendant vos droits auprès de l'assurance, et vous guidant tout au long du processus d'indemnisation."
		},
		{
			title: 'Quelle est la différence entre une expertise amiable et une expertise judiciaire ?',
			description:
				"Une expertise amiable est réalisée à la demande des parties pour résoudre un litige, tandis qu'une expertise judiciaire est ordonnée par un tribunal dans le cadre d'une procédure judiciaire. Les deux visent à apporter un éclairage technique sur les titles en litige."
		},
		{
			title: "Comment puis-je bénéficier de vos services d'assistance à la réception de travaux ?",
			description:
				"Si vous avez un Contrat de Construction de Maison Individuelle (CMI) ou une Vente en l'État Futur d'Achèvement (VEFA), nous pouvons vous assister lors de la réception des travaux pour vous assurer que tout est conforme aux normes et aux spécifications."
		},
		{
			title: "Quel est le coût d'une expertise en bâtiment ?",
			description:
				"Le coût peut varier en fonction de la nature et de l'étendue de l'expertise requise. Contactez-nous pour discuter de votre cas spécifique et obtenir un devis personnalisé."
		},
		{
			title: 'Pouvez-vous intervenir en urgence en cas de dégâts des eaux graves ?',
			description:
				'Oui, nous pouvons intervenir en urgence pour évaluer les dégâts des eaux, fournir des recommandations immédiates, et vous aider dans les démarches avec votre assurance.'
		},
		{
			title: "Quels sont les avantages d'un rapport d'expertise juridiquement opposable ?",
			description:
				"Un rapport d'expertise juridiquement opposable peut être utilisé comme preuve irréfutable dans des litiges. Il renforce votre position lors de négociations ou de procédures judiciaires, si nécessaire."
		}
	];

	const aboutUsDescription = `
L'expertise est un outil essentiel pour éclairer les décisions dans des situations complexes. Fort d'une expérience de plus de 29 ans et certifié par l'OFIB, notre expert principal chez 8N Expertise Bâtiment offre un regard objectif à chaque étape de votre projet, que ce soit pour un achat, une location, la construction d'une maison ou des travaux. En respectant les principes du contradictoire, l'expert produit un rapport détaillé, juridiquement contraignant. Notre engagement se traduit par une disponibilité immédiate et un traitement rapide de votre dossier. Chez nous, votre satisfaction est notre priorité.`;

	const categoriesOnIntervientSur: Category[] = [
		{ id: 1, label: 'Problèmes Structurels' },
		{ id: 2, label: 'Transactions Immobilières' },
		{ id: 3, label: 'Assurance et Sinistres' },
		{ id: 4, label: 'Travaux et Construction' },
		{ id: 5, label: 'Juridique et Litiges' },
		{ id: 6, label: 'Conseils Techniques' }
	];

	const listOnIntervientSur: ListItem[] = [
		{
			category: 1,
			title: 'Malfaçons',
			description: 'Identification et expertise des défauts de construction ou de réalisation.'
		},
		{
			category: 1,
			title: 'Fissures',
			description: "Analyse des fissures présentes sur les façades ou structures d'un bâtiment."
		},
		{
			category: 1,
			title: 'Humidité',
			description:
				"Expertise des problèmes d'humidité pouvant affecter la structure d'un bien immobilier."
		},
		{
			category: 1,
			title: 'Infiltrations',
			description:
				"Expertise des infiltrations d'eau qui peuvent compromettre l'intégrité d'un bâtiment."
		},
		{
			category: 1,
			title: 'Thermique',
			description: "Analyse des problèmes liés à l'isolation thermique d'un bien immobilier."
		},
		{
			category: 2,
			title: 'Audit technique avant Achat/Vente',
			description:
				"Évaluation technique d'un bien immobilier avant sa mise en vente ou son acquisition."
		},
		{
			category: 2,
			title: 'Constat d’habitabilité',
			description:
				"Évaluation des conditions d'habitabilité d'un bien immobilier selon les normes en vigueur."
		},
		{
			category: 3,
			title: 'Expert d’assuré',
			description:
				"Intervention après un sinistre pour évaluer les dommages et défendre les droits de l'assuré."
		},
		{
			category: 3,
			title: 'CAT NAT',
			description:
				"Expertise suite à un sinistre lié à une catastrophe naturelle, avec défense des droits auprès de l'assurance."
		},
		{
			category: 3,
			title: 'Dégâts des eaux',
			description:
				"Intervention après des dégâts des eaux pour évaluer les dommages et assister dans les démarches d'assurance."
		},
		{
			category: 3,
			title: 'Cambriolage',
			description:
				"Évaluation des dommages causés lors d'un cambriolage avec assistance pour les démarches d'assurance."
		},
		{
			category: 3,
			title: 'Responsabilité civile',
			description:
				'Expertise en cas de dommages causés par un tiers, avec assistance dans les litiges civils.'
		},
		{
			category: 3,
			title: 'Incendie',
			description:
				"Intervention après un incendie pour évaluer les dommages et soutenir dans les démarches d'assurance."
		},
		{
			category: 4,
			title: 'Assistance à réception de travaux (CMI-VEFA)',
			description:
				"Soutien technique lors de la réception des travaux dans le cadre d'un Contrat de Construction de Maison Individuelle ou d'une Vente en l'État Futur d'Achèvement."
		},
		{
			category: 5,
			title: 'Assistance à expertise judiciaire',
			description:
				'Accompagnement technique lors de procédures judiciaires nécessitant une expertise dans le domaine du bâtiment.'
		},
		{
			category: 6,
			title: 'Assistance et conseils techniques',
			description:
				"Fourniture de conseils et d'assistance technique pour divers aspects liés au bâtiment."
		},
		{
			category: 5,
			title: 'Trouble anormal du voisinage',
			description:
				'Intervention en cas de problèmes de voisinage impactant la qualité de vie, avec expertise technique.'
		}
	];
</script>

<svelte:head>
	<Head
		title="8N - Expertise du bâtiment"
		description="Solutions complètes pour vos problèmes de construction."
	/>
</svelte:head>

<!-- <VideoSection /> -->

<section class="pt-40 pb-40">
	<SectionTextDescList
		subTitle="QUI SOMMES NOUS"
		title="8N un expert indépendant à vos côtés pour la défense de vos intérêts."
		listItems={aboutUsItems}
		bodyText={aboutUsDescription}
		btnText="En savoir plus"
		btnLink="/qui-sommes-nous"
	/>
</section>

<section class="pb-40">
	<BlocImagesTextList
		subTitle="Question"
		title="Expert en bâtiment, c'est quoi ?"
		bodyText="Assurez la solidité de vos constructions avec notre service d'expertise en bâtiment. Nous offrons une inspection approfondie, des rapports détaillés et des conseils d'experts pour garantir la qualité de vos biens immobiliers. Découvrez comment notre expertise peut contribuer à la sécurité et à la valeur de vos investissements."
		listItems={[
			'Inspection Pointue',
			'Détection Précoce',
			'Rapports Détaillés',
			'Conseils Expérimentés',
			'Litiges Éclairés'
		]}
		images={imagesForBlocImagesTextList}
	/>
</section>

<section class="pb-40">
	<BlocPhoto />
</section>

<section class="pb-40">
	<PrestationsBloc />
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

<Section class="p-10">
	<FAQSection items={faqItems} />
</Section>

<Footer />

<style>
</style>
