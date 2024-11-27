<script lang="ts">
	import { onMount } from "svelte";

    let score: number;

    $: score;

    onMount(() => {
        if(localStorage.length !== 0){
            score = Number(localStorage.getItem("score"));
        }
    })



    const addScore = () => {
        score++;

        localStorage.setItem("score", score.toString())
    }
</script>

<svelte:head>
    <title>Poszukajmy Jesieni | Gra interaktywna</title>
</svelte:head>

<main class="h-screen">
    <h1 class="text-7xl text-center font-bold text-accent mt-8 mb-2">Gra interaktywna</h1>
    <p class="text-3xl text-center font-light text-headline mb-8">Zagraj w clicker!</p>

    <section>
        <p class="text-headline text-3xl text-center">Punkty: {score}</p>
        <p class="text-center font-light mt-2 mb-4">Klikaj w listek aby zdobywać punkty</p>
        <div class="w-full flex justify-center items-center">
            <button on:click={addScore}>
                <img src="/favicon.png" alt="" class="w-14">
            </button>
        </div>
    </section>
</main>