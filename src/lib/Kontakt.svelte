<script context="module">
	import Fa from 'svelte-fa';
	import { faEnvelope, faMap, faAddressCard } from '@fortawesome/free-solid-svg-icons';
</script>

<script lang="ts">


</script>

<main class="flex flex-col justify-center items-center p-4 mt-20">
	<div class="flex flex-col xl:flex-row justify-center lg:w-1/2 shadow-xl rounded-lg bg-opacity-85 border border-accent">
		<form
			on:submit|preventDefault
			class="flex text-charcoal p-8 rounded-xl xl:rounded-r-none xl:rounded-l-xl flex-col w-full space-y-4"
		>
			<h1 class="text-3xl text-headline text-center mb-2">Prześlij więcej ciekawostek o jesieni!</h1>
			<div>
				<label for="first_name" class="block mb-1 font-medium  text-headline">Imię</label>
				<input
					type="text"
					class="bg-gray-50 border border-gray-300 placeholder:text-gray-500 text-charcoal text-base rounded-lg focus:outline-none focus:ring-accent focus:border-accent block w-full p-2.5 "
					placeholder="Jan"
				/>
			</div>
			<div>
				<label for="first_name" class="block mb-1 font-medium  text-charcoal">Email</label>
				<input
					type="text"
					class="bg-gray-50 border border-gray-300 placeholder:text-gray-500 text-base rounded-lg focus:outline-none focus:ring-accent focus:border-accent block w-full p-2.5 "
					placeholder="example@example.com"
				/>
			</div>
			<div>
				<label for="first_name" class="block mb-1 font-medium  text-charcoal">Wiadomość</label>
				<!-- svelte-ignore element_invalid_self_closing_tag -->
				<textarea
					class="bg-gray-50 border border-gray-300 placeholder:text-gray-500 text-base rounded-lg focus:outline-none focus:ring-accent focus:border-accent block w-full p-2.5 resize-none"
					cols="30"
					rows="6"
					placeholder="Proszę o kontakt..."
				/>

			</div>
            <button class="py-3 px-6 rounded-2xl bg-accent font-medium text-headline text-sm md:text-base xl:text-lg hover:bg-opacity-50 focus:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200">
                <div class="flex flex-row items-center justify-center gap-4 text-lg">
                    <p>Wyślij</p>
                </div> 
            </button>
		</form>
		<div
			class="p-8 rounded-xl mt-6 xl:mt-0 xl:rounded-l-none xl:rounded-r-xl xl:w-1/2 flex flex-col justify-around  bg-charcoal bg-opacity-80 text-white"
		>
			<div class="p-4">
				<div class="flex flex-row items-center">
					<Fa icon={faAddressCard} size="2.5x" class="mr-3 mb-2" />
					<h1 class="text-4xl">Telefon</h1>
				</div>
				<a href="tel:888888888  " class="text-lg">+48 888 888 888</a>
			</div>
			<div class="p-4">
				<div class="flex flex-row items-center">
					<Fa icon={faMap} size="2.5x" class="mr-3 mb-2" />
					<h1 class="text-4xl">Adres</h1>
				</div>
				<a
					href="#"
					target="Google Maps"
					class="text-lg">Polska, Zachodniopomorskie, Barlinek</a
				>
			</div>
			<div class="p-4">
				<div class="flex flex-row items-center">
					<Fa icon={faEnvelope} size="2.5x" class="mr-3 mb-2" />
					<h1 class="text-4xl">Mail</h1>
				</div>
				<a href="mailto:example@example.com" class="text-lg"
					>example@example.com</a
				>
			</div>
		</div>
	</div>

</main>

