<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { ListItem } from '$lib/types/ListItem';
	import Button from './Button.svelte';
	import IntersectionObserver from './IntersectionObserver.svelte';

	export let title = 'Title';
	export let subTitle = 'Sub title';
	export let bodyText = 'lorem ipsum dolor sit amet, consectetur adipiscing elit.';
	export let btnLink = '';
	export let btnText = 'See more';
	export let listItems: ListItem[] = [];

	let hasIntersected = false;

	const isIntersecting = () => {
		hasIntersected = true;
	};
</script>

<section>
	<IntersectionObserver on:intersecting={isIntersecting} top={-200} />
	<div class={twMerge('container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8 dark:bg-gray-800 ')}>
		<div class="flex flex-wrap -mx-8">
			<div
				class={twMerge(
					'w-full px-8 lg:w-1/2 transition-all ease-in duration-300 opacity-0 ',
					hasIntersected && 'opacity-100 '
				)}
			>
				<div class="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
					<p class="text-base font-semibold leading-6 text-blue-500 uppercase">{subTitle}</p>

					<h2 class="mb-4 text-3xl font-bold lg:text-4xl font-heading dark:text-white">
						{title}
					</h2>
					<p class="mb-8 leading-loose text-gray-500 dark:text-gray-300">
						{bodyText}
					</p>
					<div class="w-full md:w-1/3">
						<Button text={btnText} color="primary" to={btnLink} />
					</div>
				</div>
			</div>
			<div class="w-full px-8 lg:w-1/2">
				<ul class="space-y-12">
					{#each listItems as listItem, i}
						<li
							class={twMerge(
								`flex -mx-4 transition-all duration-300  translate-x-[-2%] opacity-0`,
								hasIntersected && 'opacity-100 translate-x-0 '
							)}
							style=" transition: opacity .6s cubic-bezier(0.16, 1, 0.3, 1),transform .6s cubic-bezier(0.16, 1, 0.3, 1); transition-delay: {(i +
								1) *
								100 +
								100}ms;"
						>
							<div class="px-4">
								<span
									class="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50"
								>
									{i + 1}
								</span>
							</div>
							<div class="px-4">
								<h3 class="my-2 text-xl font-semibold dark:text-white">{listItem.title}</h3>
								<p class=" text-gray-500 dark:text-gray-300">
									{listItem.description}
								</p>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<IntersectionObserver on:intersecting={isIntersecting} top={0} />
</section>

<style>
</style>
