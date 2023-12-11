<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import IntersectionObserver from './IntersectionObserver.svelte';

	let hasIntersected = false;

	const isIntersecting = () => {
		console.log('isIntersecting');

		hasIntersected = true;
	};
</script>

<IntersectionObserver on:intersecting={isIntersecting} top={-200} />
<div class="overflow-hidden bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto relative grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
		>
			<div class="lg:pr-8 lg:pt-4">
				<div class="lg:max-w-lg">
					<div
						class={twMerge(
							'block transition-all duration-300 ease-[cubic-bezier(0.16, 1, 0.3, 1)] opacity-0 translate-x-[-2%]',
							hasIntersected && 'opacity-100 translate-x-0'
						)}
					>
						<p class="text-base font-semibold leading-6 text-blue-500 uppercase">Prestations</p>
						<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Nos missions
						</p>
						<p class="mt-6 text-lg leading-8 text-gray-600">
							Découvrez notre expertise immobilière complète. Opus Expertises vous accompagne à
							chaque étape de votre projet, que ce soit pour résoudre des malfaçons, traiter des
							sinistres, ou évaluer un bien avant l'achat.
						</p>
					</div>

					<dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
						<a
							href="/prestations/expertises/completes"
							class={twMerge(
								'relative block pl-6 hover:bg-gray-100 p-4 rounded-lg cursor-pointer',
								`transition-all duration-300  translate-x-[-2%] opacity-0`,
								hasIntersected && 'opacity-100 translate-x-0 '
							)}
							style=" transition: opacity .6s cubic-bezier(0.16, 1, 0.3, 1),transform .6s cubic-bezier(0.16, 1, 0.3, 1); transition-delay: 300ms;"
						>
							<dt class="inline font-semibold text-gray-900 relative">
								Expertise Malfaçon, Désordre, Litige...
							</dt>
							<dd class="inline">
								Pour fissures, traces d'humidité, litiges artisans, notre mission identifie,
								analyse, et propose des solutions. Rapport détaillé juridiquement opposable.
							</dd>
						</a>
						<a
							href="/prestations/assistance/expertise-apres-sinistre"
							class={twMerge(
								'relative block pl-6 hover:bg-gray-100 p-4 rounded-lg cursor-pointer',
								`transition-all duration-300  translate-x-[-2%] opacity-0`,
								hasIntersected && 'opacity-100 translate-x-0 '
							)}
							style=" transition: opacity .6s cubic-bezier(0.16, 1, 0.3, 1),transform .6s cubic-bezier(0.16, 1, 0.3, 1); transition-delay: 400ms;"
						>
							<dt class="inline relative font-semibold text-gray-900">
								Assistance Sinistres Assurances, Catastrophe Naturelle, Contre-Expertise
							</dt>
							<dd class="inline">
								En cas de sinistre, évaluation des dommages, soutien face à l'assurance. De la
								négociation à l'indemnisation totale.
							</dd>
						</a>
						<a
							href="/prestations/avis"
							class={twMerge(
								'relative block pl-6 hover:bg-gray-100 p-4 rounded-lg cursor-pointer',
								`transition-all duration-300  translate-x-[-2%] opacity-0`,
								hasIntersected && 'opacity-100 translate-x-0 '
							)}
							style=" transition: opacity .6s cubic-bezier(0.16, 1, 0.3, 1),transform .6s cubic-bezier(0.16, 1, 0.3, 1); transition-delay: 500ms;"
						>
							<dt class="inline font-semibold text-gray-900 relative">
								Avis Avant Achat/Vente avec ou sans Rapport d'Expertise
							</dt>
							<dd class="inline">
								Avant l'achat, notre avis évalue la structure, identifie les désordres, propose des
								solutions. Compte rendu détaillé avec photos des désordres identifiés.
							</dd>
						</a>
					</dl>
				</div>
			</div>
			<img
				src="/images/photos/isolation.png"
				alt="Isolation d'une maison"
				class="sticky bottom-0 top-0 w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
				width="2432"
				height="1442"
			/>
		</div>
	</div>
</div>

<style>
</style>
