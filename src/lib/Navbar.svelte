<script context="module">
	import { page } from '$app/stores';
    import NavbarItem from './NavbarItem.svelte';
</script>

<script lang="ts">

</script>

<nav
	class="w-full sticky top-0 left-0 z-10 bg-primary flex flex-col md:flex-row justify-center items-center md:mt-0 py-6 px-4 bg-main"
>
	<div
		class="flex lg:flex-row flex-col justify-between items-center w-full md:mx-auto xl:w-[92%] 2xl:w-[85%]"
	>
        <img src="favicon.png" alt="" class="h-12">
		<div class="flex flex-row justify-between items-center w-full lg:w-fit gpa-4">
            <ol class="flex flex-row items-center gap-4 text-xl">
                <NavbarItem name="Strona główna" currRoute={$page.route.id} route="/"/>
                <NavbarItem name="Galeria" currRoute={$page.route.id} route="galeria"/>
                <NavbarItem name="Gra interaktywna" currRoute={$page.route.id} route="game"/>
            </ol>
		</div>



	</div>
</nav>

