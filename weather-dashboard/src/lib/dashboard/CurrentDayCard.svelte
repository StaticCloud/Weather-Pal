<script>
    import { unixConverterLong } from "../utils/epoch";
    export let firstDay;
    export let cityName;

    const dateTime = unixConverterLong(firstDay.dt)
</script>

<div class="block-wrapper card">
    <h1>{cityName}</h1>
    <p class="date">{dateTime}</p>
</div>

<style>
    .date {
        color: var(--light-gray)
    }
    .block-wrapper {
        flex: 1 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }
</style>