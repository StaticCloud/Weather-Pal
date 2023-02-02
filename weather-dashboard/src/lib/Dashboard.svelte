<script>
    import CurrentDayCard from "./dashboard/CurrentDayCard.svelte";
    import WeeklyAndMetaWrapper from "./dashboard/WeeklyAndMetaWrapper.svelte";
    import Search from "./Search.svelte";
    
    export let data;
    export let cityName;
</script>

<div class="dashboard">
    <Search/>
    <div class="dashboard-wrap">
        <CurrentDayCard cityName={cityName} firstDay={data.daily[0]}/>
        <WeeklyAndMetaWrapper days={data.daily}/>
    </div>
</div>

<style>
    .dashboard {
        max-width: 1098px;
    }

    .dashboard-wrap {
        width: 100%;
        display: flex;
    }
</style>