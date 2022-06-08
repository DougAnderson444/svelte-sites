## Fork Changelog from the standard Svelte REPL:

- added mdsvex
- added .svx extension for MDSVex files
- added ayu-dark css theme
- build the workers as es modules (vite default is iife)
- tweaked the file extension types
- emit 'compiled' event from `src/lib/index.svelte` with compiled/bundled code for consumption by another component
- also emit components from <Repl on:compiled={(e)=> ({compiled, components} = e.detail)} />
- added github format markdown (gfm) for .svx and css file for codemirror
- set svelte.compile options to {accessors: true} so parent comp can grab schema

# @sveltejs/svelte-repl

This is the guts of https://svelte.dev/repl, extracted into its own package so that it can be used elsewhere.

## TODO

- Documentation
- Tests
- Themeability

## License

[MIT](LICENSE)
