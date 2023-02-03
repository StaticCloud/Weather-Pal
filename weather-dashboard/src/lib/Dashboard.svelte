<script>
    import CurrentDayCard from "./dashboard/CurrentDayCard.svelte";
    import WeeklyWrapper from "./dashboard/WeeklyWrapper.svelte";
    import MetaWrapper from "./dashboard/MetaWrapper.svelte";
    import Search from "./Search.svelte";
    
    export let data;
    export let cityName;
</script>

<div class="dashboard">
    <Search/>
    <div class="dashboard-wrap">
        <CurrentDayCard cityName={cityName} firstDay={data.daily[0]}/>
        <WeeklyWrapper days={data.daily}/>
    </div>
    <div class="meta-wrap">
        <MetaWrapper day={data.daily[0]}/>
    </div>
</div>

<style>
    .dashboard {
        min-width: 1020px;
    }

    .dashboard-wrap {
        width: 100%;
        display: flex;
    }
</style>