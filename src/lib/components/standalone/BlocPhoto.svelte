<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import IntersectionObserver from './IntersectionObserver.svelte';

	let hasIntersected = false;

	const isIntersecting = () => {
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
							Découvrez nos domaines d'expertise. Nous proposons des missions variées telles que
							l'avis oral, la note expertale ou le rapport d'expertise amiable, juridiquement
							opposable pour s'adapter à vos besoins et défendre au mieux vos intérêts.
						</p>
					</div>

					<dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
						<a
							href="/prestations/expertises/avec-rapport"
							class={twMerge(
								'relative block ',
								`transition-all duration-300  translate-x-[-2%] opacity-0`,
								hasIntersected && 'opacity-100 translate-x-0 '
							)}
							style=" transition: opacity .6s cubic-bezier(0.16, 1, 0.3, 1) 300ms,transform .6s cubic-bezier(0.16, 1, 0.3, 1) 300ms, background .3s ease-in 0s;"
						>
							<div class="pl-6 p-4 rounded-lg cursor-pointer hover:bg-gray-100">
								<dt class="inline font-semibold text-gray-900 relative">Expertise désordres –</dt>
								<dd class="inline">
									Malfaçon • garantie décennale • litiges chantier • défauts esthétiques • fissures
									gros œuvres et second œuvre • humidité • infiltration • isolation thermique • vice
									caché
								</dd>
							</div>
						</a>
						<a
							href="/prestations/assistance/assistance-apres-sinistre"
							class={twMerge(
								'relative block',
								`transition-all duration-300  translate-x-[-2%] opacity-0`,
								hasIntersected && 'opacity-100 translate-x-0 '
							)}
							style=" transition: opacity .6s cubic-bezier(0.16, 1, 0.3, 1),transform .6s cubic-bezier(0.16, 1, 0.3, 1); transition-delay: 400ms;"
						>
							<div class="pl-6 p-4 rounded-lg cursor-pointer hover:bg-gray-100">
								<dt class="inline relative font-semibold text-gray-900">
									Assistance règlement de sinistre et contre expertise d'assurance
								</dt>
								<dd class="inline">
									Incendie, inondation , tempête • Catastrophe naturelle sécheresse ou inondation
								</dd>
							</div>
						</a>
						<a
							href="/prestations/avis"
							class={twMerge(
								'relative block ',
								`transition-all duration-300  translate-x-[-2%] opacity-0`,
								hasIntersected && 'opacity-100 translate-x-0 '
							)}
							style=" transition: opacity .6s cubic-bezier(0.16, 1, 0.3, 1),transform .6s cubic-bezier(0.16, 1, 0.3, 1); transition-delay: 500ms;"
						>
							<div class="pl-6 p-4 rounded-lg cursor-pointer hover:bg-gray-100">
								<dt class="inline font-semibold text-gray-900 relative">
									Avis avant achat ou vente d'un bien immobilier
								</dt>
								<dd class="inline">
									Avis sur un désordre identifié • Audit général des parties visibles de l'enveloppe
									extérieure et du second œuvre
								</dd>
							</div>
						</a>
					</dl>
				</div>
			</div>
			<img
				src="/images/photos/fissure_fenetre.jpg"
				alt="Isolation d'une maison"
				class="sticky bottom-0 top-0 w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
				width="2432"
				height="1442"
			/>
		</div>
	</div>
</div>
<IntersectionObserver on:intersecting={isIntersecting} top={0} />

<style>
</style>
