<script lang="ts">
    export let name = '';
    export let route = '';
    export let currRoute: string | null;

    console.log(currRoute)

    const determinRoute = () => {
        switch(route){
            case '/':
                return "/"
            case 'galeria':
                return `/${route}`
            case 'game':
                return `/${route}`

        }
    }

</script>

<div>
    <a class="hover:text-headline transition-colors duration-400 cursor-pointer" class:text-accent={currRoute === determinRoute()} href={route} >{name}</a>
</div>
