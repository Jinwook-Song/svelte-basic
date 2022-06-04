<script>
	import Something from './Something.svelte'

	let showSomething = false
</script>

<button on:click={() => {showSomething = !showSomething}}>Toggle</button>

{#if showSomething}
	<Something />
{/if}