<script>
	import Youtube from 'svelte-youtube-embed';
	import { Parallax, ParallaxLayer, StickyLayer } from 'svelte-parallax';

	import Head from '$lib/components/sections/Head.svelte';
	import VideoSection from '$lib/components/sections/VideoSection.svelte';
</script>

<section class="relative pl-10 flex min-h-[90vh] items-center">
	<div class="relative overflow-visible max-w-2xl w-[50%] h-[200px]">
		<Parallax sections={4} config={{ stiffness: 0.2, damping: 0.3 }}>
			<ParallaxLayer rate={1} offset={0}>
				<img src="/images/photos/house.avif" alt="" class="" />
			</ParallaxLayer>
			<ParallaxLayer rate={-0.5} offset={1}>
				<img
					src="/images/photos/plans.avif"
					alt=""
					class="absolute object-cover rounded-xl scale-75 translate-x-[-30%] translate-y-[-30%] z-10"
				/>
			</ParallaxLayer>
			<ParallaxLayer rate={0} span={3}>
				<img
					src="/images/photos/construction.avif"
					alt=""
					class="absolute object-cover rounded-xl"
				/>
			</ParallaxLayer>
		</Parallax>
	</div>

	<div class="flex flex-col items-start pl-10 max-w-md">
		<span class="px-3 py-1 text-xs flex items-center rounded-full text-blue-600 bg-blue-200">
			Video
		</span>
		<h3 class="text-xl font-medium">Expert en bâtiment, késako&nbsp;?</h3>
		<p class="text-slate-500">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates voluptatum voluptatibus
			soluta repellendus impedit quae voluptas dolores neque sed nulla deleniti nostrum repellat
			enim fugiat, eos magnam ea, cupiditate ipsum!
		</p>
	</div>
</section>

<style>
</style>
