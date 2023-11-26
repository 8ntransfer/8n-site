<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import {
		ButtonColorClass,
		type ButtonColor,
		type ButtonSize,
		type ButtonVariant,
		ButtonVariantClass,
		ButtonSizeClass,
		ButtonCommonClass,
		ButtonHoverClass
	} from '$lib/types/Button';
	import Loader from '$lib/svg/Loader.svelte';

	export let text = 'Explorez mes prestations';
	export let color: ButtonColor = 'primary';
	export let btnSize: ButtonSize = 'small';
	export let variant: ButtonVariant = 'contained';
	export let disabled = false;
	export let loading = false;
	export let iconPosition: 'left' | 'right' = 'left';
	export let animation: 'scale' | 'opacity' = 'opacity';
	export let to = '';
	export let selected = false;
	let clazz = '';
	export { clazz as class };

	const SLOTS = $$props.$$slots;
	let activeClass = ButtonCommonClass;
	$: activeClass += ' ' + ButtonColorClass[color];
	$: activeClass += ' ' + ButtonVariantClass[variant];
	$: activeClass += ' ' + ButtonSizeClass[btnSize];
	$: activeClass += ' ' + (disabled ? 'opacity-50 pointer-events-none' : '');
	$: activeClass += ' ' + (loading ? 'cursor-wait' : '');
	$: activeClass += ' ' + (selected ? ButtonHoverClass[color] : '');
	$: activeClass += ' ' + clazz;
	$: activeClass += ' ' + (animation === 'scale' ? 'hover:scale-105 hover:shadow-sm' : '');

	const dispatch = createEventDispatcher();
	const handleClick = () => {
		dispatch('click');
	};
</script>

{#if !!to}
	<a href={to} class={activeClass} on:click={handleClick}>
		{#if loading}
			<Loader />
		{:else if !!SLOTS?.icon && iconPosition === 'left'}
			<slot name="icon" />
		{/if}
		<span
			class="{loading || (!!SLOTS?.icon && iconPosition === 'left') ? 'pl-1' : ''} {!!SLOTS?.icon &&
			iconPosition === 'right'
				? 'pr-0.5'
				: ''}">{text}</span
		>
		{#if !!SLOTS?.icon && iconPosition === 'right'}
			<slot name="icon" />
		{/if}
	</a>
{:else}
	<button class={activeClass} on:click={handleClick}>
		{#if loading}
			<Loader />
		{:else if !!SLOTS?.icon && iconPosition === 'left'}
			<slot name="icon" />
		{/if}
		<span
			class="{loading || (!!SLOTS?.icon && iconPosition === 'left') ? 'pl-1' : ''} {!!SLOTS?.icon &&
			iconPosition === 'right'
				? 'pr-0.5'
				: ''}">{text}</span
		>
		{#if !!SLOTS?.icon && iconPosition === 'right'}
			<slot name="icon" />
		{/if}
	</button>
{/if}
