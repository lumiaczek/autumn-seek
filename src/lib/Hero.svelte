<script>
// @ts-nocheck

	import { goto } from "$app/navigation";


</script>

<section class="grid grid-cols-2 mt-24 gap-8">
    <div class="flex flex-col justify-center mr-4">
        <h1 class="text-6xl text-bold text-accent">Poszukajmy jesieni</h1>
        <h2 class="text-4xl text-headline mt-4">Czy wiesz że...</h2>
        <p class="text-headline mt-4 text-lg">Jesienią liście zmieniają kolor, ponieważ drzewa ograniczają produkcję chlorofilu, zielonego barwnika, który dominuje latem. W jego miejsce ujawniają się inne barwniki: karotenoidy (żółte i pomarańczowe) oraz antocyjany (czerwone), które były ukryte w liściach przez cały rok. To sposób drzewa na oszczędzanie energii przed zimą!</p>
        <button class="text-headline px-8 py-4 rounded-xl bg-accent w-full text-xl mt-4" on:click={goto("/#tips")}>
            Dowiedz się więcej
        </button>
    </div>
    
    <div>
        <img src="fall.svg" alt="">
    </div>


</section>