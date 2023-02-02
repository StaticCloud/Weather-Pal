<script>
    import { onMount } from "svelte"
    import CurrentDayCard from "./dashboard/CurrentDayCard.svelte";
    export let data;
</script>

<div>
    <CurrentDayCard firstDay={data.daily[0]}/>
</div>