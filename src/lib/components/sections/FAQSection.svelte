<script lang="ts">
	import type { ListItem } from '$lib/types/ListItem';
	import { twMerge } from 'tailwind-merge';
	import IntersectionObserver from '../standalone/IntersectionObserver.svelte';
	let hasIntersected = false;

	export let items: ListItem[] = [];

	const isIntersecting = () => {
		hasIntersected = true;
	};
</script>

<div id="faq" class="px-4 py-20 bg-lightblue">
	<IntersectionObserver on:intersecting={isIntersecting} top={-200} />
	<div class="relative items-start flex flex-col max-w-6xl mx-auto md:flex-row">
		<h2
			class="mb-8 md:sticky md:top-28 md:self-start w-full mr-8 text-5xl font-extrabold leading-9 md:w-1/3"
		>
			Foire aux <span class="text-blue-600">questions</span>
		</h2>
		<dl class="w-full md:w-2/3">
			{#each items as item, i}
				<span
					class={twMerge(
						`opacity-0 translate-x-[-2%]`,
						hasIntersected && 'opacity-100 translate-x-0'
					)}
					style=" transition: opacity .6s cubic-bezier(0.16, 1, 0.3, 1),transform .6s cubic-bezier(0.16, 1, 0.3, 1); transition-delay: {(i +
						1) *
						100 +
						100}ms;"
				>
					<dt class="mb-4">
						<h3 class="text-xl font-semibold">
							{@html item.title}
						</h3>
					</dt>
					<dd class="mb-16">
						<p>
							{@html item.description}
						</p>
					</dd>
				</span>
			{/each}
		</dl>
	</div>
	<IntersectionObserver on:intersecting={isIntersecting} top={-200} />
</div>

<style>
</style>
