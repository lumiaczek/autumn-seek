<script context="module">
    import NavbarItem from "./NavbarItem.svelte";
    import { page } from '$app/stores';

</script>

<footer class="lg:h-[20vh] bg-main mt-6">
	<div
		class="flex flex-col h-full justify-between items-center md:mx-auto xl:w-[92%] 2xl:w-[85%] px-6 xl:px-0 bg-main text-headline"
	>
		<div class="flex flex-col justify-center items-center text-center w-full py-8 px-6">
			<div>
				<p class="text-4xl text-accent font-bold">
					Poszukajmy Jesieni!
				</p>
				<ul class="flex flex-row gap-4 items-center justify-center mt-2">
                    <NavbarItem name="Strona główna" currRoute={$page.route.id} route="/"/>
                    <NavbarItem name="Galeria" currRoute={$page.route.id} route="galeria"/>
                    <NavbarItem name="Gra interaktywna" currRoute={$page.route.id} route="game"/>

                </ul>
			</div>
		</div>
	</div>
	<div class="bg-main text-white text-xl p-4 flex flex-row justify-center">
		<div class="mx-auto xl:w-[92%] 2xl:w-[85%] px-6 xl:px-0 border-t border-gray-500">
			<div class="flex flex-row mt-3 text-center text-white font-light items-center">
				<p>Copyright &#169;2023 | Daniel Borowski & Dominik Danicki | Wszelkie prawa zastrzeżone</p>
			</div>
		</div>
	</div>
</footer>