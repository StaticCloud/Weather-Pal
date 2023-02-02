<div>
    <input class="search" type="text" placeholder="Search for a city..."/>
</div>

<style>
    .search {
        padding: 10px;
        font-size: 1rem;
        width: 100%;
        border: none;

        background-color: var(--search-unselected);
        transition: all 0.5s;
    }

    .search:focus {
        outline: none;
        color: var(--search-unselected);
        background-color: var(--white);
    }
</style>