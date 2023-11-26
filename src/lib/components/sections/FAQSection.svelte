<script lang="ts">
	import type { ListItem } from '$lib/types/ListItem';

	export let items: ListItem[] = [];
</script>

<div id="faq" class="px-4 py-20 bg-lightblue">
	<div class="relative items-start flex flex-col max-w-6xl mx-auto md:flex-row">
		<h2 class="sticky top-28 self-start w-full mr-8 text-5xl font-extrabold leading-9 md:w-1/3">
			Foire aux <span class="text-indigo-600">questions</span>
		</h2>
		<dl class="w-full md:w-2/3">
			{#each items as item}
				<dt class="mb-4">
					<h3 class="text-xl font-semibold">
						{item.title}
					</h3>
				</dt>
				<dd class="mb-16">
					<p>
						{item.description}
					</p>
				</dd>
			{/each}
		</dl>
	</div>
</div>

<style>
</style>
