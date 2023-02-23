<script>
	import Repl from '$lib/index.svelte';
	import { onMount } from 'svelte';
	import '@sveltejs/site-kit/styles/index.css';
	import '@sveltejs/site-kit/styles/code.css';

	let repl;

	onMount(() => {
		repl.set({
			components: [
				{
					name: 'App',
					type: 'svx',
					source:
						`<scr` +
						`ipt>
	let name = 'world';
</scr` +
						`ipt>

<h1>Hello {name}!</h1>

<sty` +
						`le>
	h1 { color: red;}
</sty` +
						`le>
`
				}
			]
		});
	});
</script>

<main>
	<Repl bind:this={repl} showAst />
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	main {
		height: 100vh;
	}
</style>
