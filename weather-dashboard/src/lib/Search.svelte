<script>
    import search from '../assets/magnifying-glass-solid.svg'
    export let city;
    let query = "";

    function setCity() {
        city = query
    }
</script>

<form class="search-wrap" on:submit|preventDefault={() => setCity()}>
    <input bind:value={query} class="search" type="text" placeholder="Search for a city..."/>
    <button type="submit">
        <img src={search} alt="glass">
    </button>
</form>

<style>
    .search-wrap {
        padding: 20px;
        padding-bottom: 0px;
        background-color: var(--secondary);

        display: flex;
    }

    .search {
        padding: 18px;
        font-size: 1rem;

        flex: 1;

        color: var(--dark-gray);
        background-color: var(--white);
        transition: all 0.5s;
        border-bottom: 0px;
    }

    .search:focus {
        outline: none;
    }

    button {
        all: unset;
        background-color: var(--darker-gray);
        aspect-ratio: 1;
    }

    img {
        width: 20px;
        height: 20px;
        margin: 20px;
    }
</style>