<script lang="ts">
    let arr:number[]=[];

        for(let i=0; i<9; ++i){
        arr.push(i);
        }
</script>

<svelte:head>
    <title>Poszukajmy Jesieni | Galeria</title>
</svelte:head>

<h1 class="text-7xl text-center font-bold text-accent mb-2">Galeria</h1>
<p class="text-3xl text-center font-light text-headline mb-8">Zobacz ciekawe zdjęcia!</p>
<main class="grid grid-cols-3 grid-rows-3 gap-6 bg-main">
    {#each arr as item}
        <img src="https://picsum.photos/800/400" alt="">
    {/each}
</main> 