<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Navbar from '$lib/Navbar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="w-full bg-main">
	<main class="w-[90%] mx-auto text-text">
		<Navbar></Navbar>
		{@render children()}
	</main>
</div>

<Footer/>