<script lang="ts">
	import type { Category, ListItem } from '$lib/types/ListItem';
	import { twMerge } from 'tailwind-merge';
	import IntersectionObserver from './IntersectionObserver.svelte';

	export let title = 'Title';
	export let subTitle = 'Sub title';
	export let listItems: ListItem[] = [];
	export let categories: Category[] = [];

	let selectedCategory = 1;
	let hasIntersected = false;

	$: filteredListItems = listItems.filter((item) => item.category === selectedCategory);

	const handleCategoryClick = (categoryId: number) => {
		selectedCategory = categoryId;
	};

	const isIntersecting = () => {
		hasIntersected = true;
	};
</script>

<IntersectionObserver on:intersecting={isIntersecting} top={-200} />
<div
	class={twMerge(
		'container p-6 px-6 mx-auto bg-white dark:bg-gray-800 transition-all duration-300 ease-[cubic-bezier(0.16, 1, 0.3, 1)] opacity-0 translate-y-[2%]',
		hasIntersected && 'opacity-100 translate-y-0'
	)}
>
	<div class="mb-16 text-center">
		<h2 class="text-base font-semibold tracking-wide text-blue-600 uppercase">{subTitle}</h2>
		<p
			class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl"
		>
			{title}
		</p>
	</div>
	<div>
		<select
			class="w-full px-3 py-2 mb-4 sm:hidden leading-loose border text-gray-400 rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 {!!selectedCategory
				? 'text-gray-700'
				: ''}"
			on:change={(e) => handleCategoryClick(Number(e.target.value))}
		>
			{#each categories as category}
				<option value={category.id}>{category.label}</option>
			{/each}
		</select>

		<ul class=" flex-wrap justify-center hidden sm:flex">
			{#each categories as category}
				<li class="mr-2">
					<button
						on:click={() => handleCategoryClick(category.id)}
						class="px-3 py-2 mb-2 text-xs rounded-full text transition-all ease-in-out duration-400 {category.id ===
						selectedCategory
							? 'text-blue-700 bg-blue-100'
							: ' text-blue-600  bg-transparent hover:bg-gray-500/5'}"
					>
						{category.label}
					</button>
				</li>
			{/each}
		</ul>
	</div>
	<div class="flex flex-wrap my-12 dark:text-white">
		{#each filteredListItems as listItem}
			<div class="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
				<div class="flex items-center mb-6">
					<div class=" text-xl">{listItem.title}</div>
				</div>
				<p class="leading-loose text-gray-500 dark:text-gray-200 text-md">
					{listItem.description}
				</p>
			</div>
		{/each}
	</div>
</div>
<IntersectionObserver on:intersecting={isIntersecting} top={0} />

<style>
</style>
