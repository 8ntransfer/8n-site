<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	const unit = 20;
	const containerSize = unit * 20;
	let windowWidth = 0;

	onMount(() => {
		browser && window.addEventListener('keydown', handleKeyPress);
	});

	onDestroy(() => {
		browser && window.removeEventListener('keydown', handleKeyPress);
	});

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let invaders = [];
	let bullet: {
		id: number;
		x: number;
		y: number;
		size: number;
		speed: number;
	}[] = [];
	let spaceship: { id: number; x: number; y: number; size: number; speed: number };
	let numberOfInvadersPerRow = 2;
	let cptBullet = 0;
	let cptInvaders = 0;

	let invadersLoop;
	let bulletLoop;

	const play = () => {
		// Récupérer le canvas et son contexte
		canvas = document.getElementById('canvas') as HTMLCanvasElement;
		ctx = canvas?.getContext('2d') as CanvasRenderingContext2D;

		spaceship = {
			x: unit,
			y: containerSize - unit * 2,
			size: unit,
			speed: 5
		};

		generateInvaders();

		initInvadersLoop();
		initBulletLoop();

		draw();
	};

	function initInvadersLoop() {
		invadersLoop = setInterval(() => {
			cptInvaders++;
			if (cptInvaders % 2 === 0) {
				addNewInvaders();
			}
			moveInvaders();
			draw();
		}, 1000);
	}

	function addNewInvaders() {
		for (let i = 0; i < numberOfInvadersPerRow; i++) {
			// generate random number between 0 and containerSize - unit * 2
			let x = Math.floor(Math.random() * (containerSize - unit * 2));

			// change x to be a multiple of unit
			x = Math.floor(x / unit) * unit;

			invaders.push({
				id: invaders.length,
				x: x,
				y: unit * 2,
				size: unit,
				touched: false,
				speed: 20
			});
		}
	}

	function initBulletLoop() {
		bulletLoop = setInterval(() => {
			cptBullet++;
			if (cptBullet % 10 === 0) {
				addBullet();
			}
			moveBullet();

			detectCollision();

			draw();
		}, 100);
	}

	function addBullet() {
		bullet.push({
			id: bullet.length,
			x: spaceship.x + spaceship.size / 2,
			y: spaceship.y,
			size: unit / 2,
			speed: 20
		});
	}

	function detectCollision() {
		invaders.forEach((invader) => {
			bullet.forEach((bullet) => {
				if (
					bullet.x >= invader.x &&
					bullet.x <= invader.x + invader.size &&
					bullet.y >= invader.y &&
					bullet.y <= invader.y + invader.size
				) {
					// remove invader
					invaders = invaders.map((i) => {
						if (i.id === invader.id) {
							i.touched = true;
						}
						return i;
					});

					// remove bullet
					bullet = bullet.filter((b) => b.id !== bullet.id);
				}
			});
		});
	}

	function moveBullet() {
		bullet.forEach((bullet) => {
			bullet.y -= bullet.speed;
		});
	}

	function generateInvaders() {
		for (let i = 0; i < numberOfInvadersPerRow; i++) {
			// generate random number between 0 and containerSize - unit * 2
			let x = Math.floor(Math.random() * (containerSize - unit * 2));

			// change x to be a multiple of unit
			x = Math.floor(x / unit) * unit;

			invaders.push({
				id: i,
				x: x,
				y: unit * 2,
				size: unit,
				speed: 5
			});
		}
	}

	function moveInvaders() {
		invaders.forEach((invader) => {
			invader.y += unit;
		});
	}

	// Gérer les entrées clavier

	function handleKeyPress(e: KeyboardEvent) {
		// Déplacer le spaceship en fonction de la touche enfoncée
		switch (e.key) {
			case 'ArrowLeft':
				spaceship.x -= unit;
				break;
			case 'ArrowRight':
				spaceship.x += unit;
				break;
		}

		// Rafraîchir le canvas
		draw();
	}

	// Dessiner le spaceship sur le canvas
	function draw() {
		// Effacer le canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = '#d7d7d7';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// Dessiner le spaceship
		ctx.fillStyle = '#00F'; // Couleur bleue
		ctx.fillRect(spaceship.x, spaceship.y, spaceship.size, spaceship.size);

		// Dessiner les invaders
		ctx.fillStyle = '#F00'; // Couleur rouge
		invaders.forEach((invader) => {
			console.log(invader.y);

			if (!invader.touched) {
				ctx.fillRect(invader.x, invader.y, invader.size, invader.size);
			}
		});

		// Dessiner les bullets
		ctx.fillStyle = '#0F0'; // Couleur verte

		bullet.forEach((bullet) => {
			ctx.fillRect(bullet.x, bullet.y, bullet.size, bullet.size);
		});
	}

	// Appel initial pour dessiner le spaceship au démarrage
</script>

<svelte:window bind:innerWidth={windowWidth} />

<main class="main">
	<div class="canvasContainer">
		<button on:click={play}>Play</button>
		<canvas id="canvas" width={windowWidth} height={400} />
	</div>
</main>

<style>
</style>
