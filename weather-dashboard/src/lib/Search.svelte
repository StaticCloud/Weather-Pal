<script>
    import search from '../assets/magnifying-glass-solid.svg'
</script>

<div class="search-wrap">
    <input class="search" type="text" placeholder="Search for a city..."/>
    <button>
        <img src={search} alt="glass">
    </button>
</div>

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