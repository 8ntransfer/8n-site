<script>
	import Button from '$lib/components/standalone/Button.svelte';
</script>

<section class="flex items-center h-screen bg-gray-200 font-poppins dark:bg-gray-900">
	<div class="max-w-6xl px-1 mx-auto lg:px-6">
		<div class="justify-center">
			<div class="flex flex-wrap flex-row-reverse items-center">
				<div class="w-full pr-20 px-2 lg:px-4 lg:w-2/4 lg:mb-0 lg:py-0 py-7">
					<div class="text-center lg:text-left">
						<h1
							class="inline-block mb-8 font-semibold text-gray-800 text-7xl lg:text-9xl dark:text-gray-400"
						>
							Oops!
						</h1>
						<h2 class="mb-8 text-2xl font-semibold text-gray-700 lg:text-4xl dark:text-gray-400">
							404 Page introuvable
						</h2>
						<p class="mb-8 text-xl text-gray-700 dark:text-gray-400">
							Nous sommes désolés, mais la page que vous recherchez n'existe pas.
						</p>
						<div class="flex flex-wrap items-center justify-start">
							<Button text="Page d'accueil" color="primary" to="/" />
						</div>
					</div>
				</div>
				<div class="hidden w-full mb-12 lg:block lg:w-2/4 lg:mb-0">
					<img
						src="/images/404.png"
						alt="page non trouvable"
						class="relative inset-0 object-cover w-full h-2/4"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
