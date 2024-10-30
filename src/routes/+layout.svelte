<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Navbar from '$lib/Navbar.svelte';
</script>

<div class="w-full h-screen bg-main">
	<main class="w-[90%] mx-auto text-text">
		<Navbar></Navbar>
		{@render children()}
	</main>
</div>

