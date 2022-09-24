<script>
	import ConsoleLine from './ConsoleLine.svelte';

	export let logs;
</script>

<div class="console-container">
	{#each logs as log}
		<ConsoleLine {log} />
	{/each}
</div>

<style>
	.console-container {
		position: absolute;
		background-color: white;
		border: none;
		width: 100%;
		height: 100%;
	}
</style>
