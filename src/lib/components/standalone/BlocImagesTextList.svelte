<script lang="ts">
	import type { Image } from '$lib/types/Image';
	import RectangleCircles from '../svg/RectangleCircles.svelte';

	export let subTitle = 'Sub title';
	export let title = 'Title';
	export let bodyText = 'lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	export let images: [Image, Image, Image, Image];
	export let listItems: string[] = [];
</script>

<div
	class="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20"
>
	<div class="relative">
		<div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
			<div class="ml-auto lg:col-start-2 lg:max-w-2xl">
				<p class="text-base font-semibold leading-6 text-blue-500 uppercase">{subTitle}</p>
				<h4
					class="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9"
				>
					{title}
				</h4>
				<p class="mt-4 text-lg leading-loose text-gray-500 dark:text-gray-300">
					{bodyText}
				</p>
				<ul class="gap-6 mt-8 md:grid md:grid-cols-2">
					{#each listItems as listItem}
						<li class="mt-6 lg:mt-0">
							<div class="flex">
								<span
									class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-blue-800 bg-blue-100 rounded-full dark:text-green-500 drark:bg-transparent"
								>
									<svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
								</span>
								<span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
									{listItem}
								</span>
							</div>
						</li>
					{/each}
				</ul>
			</div>
			<div class="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
				<div class="relative space-y-4">
					<div class="flex items-end justify-center space-x-4 lg:justify-start">
						<img
							class="w-32 rounded-lg shadow-lg md:w-56"
							width="200"
							src={images[0].src}
							alt={images[0].alt}
						/>
						<img
							class="w-40 rounded-lg shadow-lg md:w-64"
							width="260"
							src={images[1].src}
							alt={images[1].alt}
						/>
					</div>
					<div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
						<img
							class="w-24 rounded-lg shadow-lg md:w-40"
							width="170"
							src={images[2].src}
							alt={images[2].alt}
						/>
						<img
							class="w-32 rounded-lg shadow-lg md:w-56"
							width="200"
							src={images[3].src}
							alt={images[3].alt}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>
