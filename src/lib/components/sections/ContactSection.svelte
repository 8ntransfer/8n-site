<script lang="ts">
	import { enhance } from '$app/forms';
	import Map from '~icons/mdi/map';
	import { success, warning } from '$lib/utils/toast';
	import { twMerge } from 'tailwind-merge';
	import IntersectionObserver from '../standalone/IntersectionObserver.svelte';
	import Compressor from 'compressorjs';

	let hasIntersected = false;

	let isOptionSelected = false;
	let buttonDisabled = true;
	const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let formSending = false;
	let files: FileList = [];
	let filesImages: string[] = [];
	let compressing = false;

	function compressImage(e: Event) {
		const filesFromElement = (e.target as HTMLInputElement).files;

		if (!filesFromElement) return;

		filesImages = [];

		const dt = new DataTransfer();

		compressing = true;

		for (let i = 0; i < filesFromElement.length; i++) {
			new Compressor(filesFromElement[i], {
				quality: 0.6,
				maxWidth: 1024,
				maxHeight: 1024,
				success(result: File | Blob) {
					let file: File;
					let name = (result as File).name;
					let type = (result as File).type;

					if (result instanceof Blob) {
						file = new File([result], 'compressed_' + name, { type });
					} else {
						file = result as File;
					}

					dt.items.add(file);
					filesImages = [...filesImages, URL.createObjectURL(file)];

					files = dt.files;
					if (files.length === filesFromElement.length) {
						compressing = false;
					}
				},

				error(err: Error) {
					warning('Erreur lors de la compression des images');
					console.log(err.message);
				}
			});
		}
	}

	const enhanceForm = ({ formElement, formData, action, cancel }) => {
		const images = formData.getAll('attachments');
		formData.delete('attachments');

		Array.from(files).forEach((file) => {
			formData.append('attachments', file);
		});

		if (images.length > 5) {
			warning('Vous ne pouvez pas envoyer plus de 5 images');
			cancel();
		}

		formSending = true;

		return async () => {
			success('Votre message a bien été envoyé !');
			files = [];
			formElement.reset();
			formSending = false;
		};
	};

	function handleSelect(e) {
		isOptionSelected = e.target.value !== '';
	}

	function handleFormInput(e) {
		const form = e.target.form;

		const data = new URLSearchParams(new FormData(form));

		const formData = Object.fromEntries(data);

		const isFormValid =
			Object.keys(formData).every((key) => formData[key] !== '') &&
			REGEX_EMAIL.test(formData.email) &&
			data.getAll('attachments').length <= 5;

		buttonDisabled = !isFormValid;
	}

	const isIntersecting = () => {
		hasIntersected = true;
	};
</script>

<IntersectionObserver on:intersecting={isIntersecting} top={-200} />

<section class="py-16 dark:bg-gray-900">
	<div class="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto lg:py-10 md:px-7">
		<div
			class={twMerge(
				'max-w-xl mx-auto transition-all duration-300 ease-[cubic-bezier(0.16, 1, 0.3, 1)] opacity-0 translate-y-[2%]',
				hasIntersected && 'opacity-100 translate-y-0'
			)}
		>
			<div class="text-center">
				<div class="relative flex flex-col items-center">
					<h2 class="text-base font-semibold tracking-wide text-blue-600 uppercase">Contact</h2>

					<h2 class="text-5xl font-bold dark:text-white">
						Demande <span class="text-blue-500"> d'expertise </span>
					</h2>
				</div>
			</div>
		</div>
		<div class="pt-8 flex flex-wrap mb-8 -mx-4">
			<div
				class={twMerge(
					'w-full px-4 mb-4 lg:w-1/3 lg:mb-0 transition-all duration-300 ease-[cubic-bezier(0.16, 1, 0.3, 1)] opacity-0 translate-y-[2%] delay-300',
					hasIntersected && 'opacity-100 translate-y-0'
				)}
			>
				<a
					href="https://maps.app.goo.gl/penuFWacKG7Mc9ny9"
					target="_blank"
					rel="noopener noreferrer"
					class="h-full block py-12 text-center transition-all rounded-lg shadow-md hover:shadow-xl dark:bg-gray-800"
				>
					<div
						class="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-500 rounded-full dark:bg-blue-500"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-envelope"
							viewBox="0 0 16 16"
						>
							<path
								d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
							/>
						</svg>
					</div>
					<h2 class="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
						Adresse
					</h2>
					<span class="text-base font-medium text-gray-500 md:text-lg dark:text-gray-400"
						><strong>8NExpertise</strong> Bâtiment <br />6 rue Maurice Hurel
						<br />31500 Toulouse
					</span>
				</a>
			</div>
			<div
				class={twMerge(
					'w-full px-4 mb-4 lg:w-1/3 lg:mb-0 transition-all duration-300 ease-[cubic-bezier(0.16, 1, 0.3, 1)] opacity-0 translate-y-[2%] delay-200',
					hasIntersected && 'opacity-100 translate-y-0'
				)}
			>
				<a
					href="tel:+33644828316"
					class="h-full block py-12 text-center transition-all rounded-lg shadow-md hover:shadow-xl dark:bg-gray-800"
				>
					<div
						class="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-500 rounded-full dark:bg-blue-500"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-telephone"
							viewBox="0 0 16 16"
						>
							<path
								d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
							/>
						</svg>
					</div>
					<h2 class="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
						Téléphone
					</h2>
					<span class="text-base font-medium text-gray-500 md:text-lg dark:text-gray-400"
						>+33 6 44 82 83 16</span
					>
				</a>
			</div>
			<div
				class={twMerge(
					'w-full px-4 mb-4 lg:w-1/3 lg:mb-0 transition-all duration-300 ease-[cubic-bezier(0.16, 1, 0.3, 1)] opacity-0 translate-y-[2%] delay-[400ms]',
					hasIntersected && 'opacity-100 translate-y-0'
				)}
			>
				<div
					target="_blank"
					class="h-full block py-12 text-center transition-all rounded-lg shadow-md hover:shadow-xl dark:bg-gray-800"
				>
					<div
						class="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-500 rounded-full dark:bg-blue-500"
					>
						<Map />
					</div>
					<h2 class="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl dark:text-gray-400">
						Zone de couverture
					</h2>
					<span class="text-base font-medium text-gray-500 md:text-lg dark:text-gray-400"
						>Haute Garonne – Tarn – Aude
					</span>
				</div>
			</div>
		</div>
		<div
			class={twMerge(
				'px-8 py-8 bg-white border rounded-md shadow-sm dark:border-gray-800 dark:bg-gray-800 transition-all duration-300 ease-[cubic-bezier(0.16, 1, 0.3, 1)] opacity-0 translate-y-[2%] delay-[500ms]',
				hasIntersected && 'opacity-100 translate-y-0'
			)}
		>
			<form
				on:input={handleFormInput}
				method="post"
				enctype="multipart/form-data"
				use:enhance={enhanceForm}
				action="?/upload"
			>
				<div class="mb-6">
					<h2 class="text-xl font-bold text-gray-00 dark:text-gray-400">
						Envoyez-nous un message !
					</h2>
				</div>
				<div class="flex flex-wrap mb-4 -mx-2">
					<div class="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
						<input
							class="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
							type="text"
							placeholder="Prénom"
							name="prenom"
							required
						/>
					</div>
					<div class="w-full px-2 lg:w-1/2">
						<input
							class="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
							type="text"
							placeholder="Nom"
							name="nom"
							required
						/>
					</div>
				</div>
				<input
					class="w-full px-3 py-2 mb-4 leading-loose border rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700"
					type="email"
					placeholder="abc@gmail.com"
					name="email"
					required
				/>
				<select
					class="w-full px-3 py-2 mb-4 leading-loose border text-gray-400 rounded-md bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 {isOptionSelected
						? 'text-gray-700'
						: ''}"
					name="messageType"
					placeholder="Sélectionnez une option"
					on:input={handleSelect}
					required
				>
					<option value="" selected> Sélectionnez une option </option>
					<option value="probleme-chantier"> Problème de chantiers </option>
					<option value="sinistre"> Expertise d'assuré lors de sinistre </option>
					<option value="reception-travaux"> Assistance à réception de travaux </option>
					<option value="conseils-techniques"> Assistance et conseils techniques </option>
					<option value="judiciaire"> Assistance d'expertise judiciaire </option>
					<option value="trouble-voisinage"> Trouble anormal de voisinage </option>
					<option value="autres"> Autres questions </option>
				</select>
				<textarea
					rows="4"
					placeholder="Message..."
					name="message"
					required
					class="block w-full px-4 mb-4 leading-tight text-gray-700 border rounded bg-gray-50 dark:placeholder-gray-400 py-7 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-700"
				/>

				<div class="flex items-center justify-center w-full mb-4">
					<label
						for="attachments"
						class="flex w-full h-auto border-gray-300 border rounded cursor-pointer text-gray-700 bg-gray-50 hover:bg-gray-100"
					>
						<div class="flex w-full justify-between py-2 px-4">
							<div class="flex items-center justify-center">
								<svg
									class="w-6 h-6 text-gray-500 dark:text-gray-400"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 16"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
									/>
								</svg>
								{#if files.length === 0}
									<p class="ml-2 text-sm text-gray-500 dark:text-gray-400">
										<span class="font-semibold">Joindre vos photos</span> (max 5)
									</p>
								{:else if files.length > 5}
									<p class="ml-2 text-sm text-gray-500 dark:text-gray-400">
										Trop de fichiers sélectionnés (max 5)
									</p>
								{:else}
									<p class="ml-2 text-sm text-gray-500 dark:text-gray-400">
										{files.length} fichiers sélectionnés
									</p>
								{/if}
							</div>

							<div class="flex gap-2">
								{#if files.length > 0 && files.length <= 5}
									{#each filesImages as file}
										<img src={file} class="h-8 w-8 rounded" alt="uploaded-image" />
									{/each}
								{/if}
							</div>
						</div>
						<input
							id="attachments"
							class="hidden"
							name="attachments"
							type="file"
							multiple
							accept="image/*"
							on:change={compressImage}
							bind:files
						/>
					</label>
				</div>

				<button
					disabled={buttonDisabled || compressing || formSending}
					class="w-full py-4 text-sm font-bold leading-normal text-white transition-all duration-300 bg-blue-600 rounded-md dark:bg-blue-500 dark:hover:bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
				>
					{compressing
						? 'Compression des images...'
						: formSending
						? 'Envoi en cours...'
						: 'Envoyer'}
				</button>
			</form>
		</div>
	</div>
</section>
<IntersectionObserver on:intersecting={isIntersecting} top={0} />

<style>
</style>
