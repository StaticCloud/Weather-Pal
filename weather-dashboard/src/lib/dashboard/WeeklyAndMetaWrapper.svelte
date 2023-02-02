<script>
    export let days;
</script>

<div class="weeklyAndMeta card">
    {#each days as day}
    {/each}
</div>

<style>
    .weeklyAndMeta {
        flex: 2 0;
    }
</style>

