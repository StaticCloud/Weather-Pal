<script>
    export let maxVal;
    export let percent;
    export let color;
    export let units;

    let finalPercent;

    if (percent >= maxVal) {
        finalPercent = maxVal;
    } else {
        finalPercent = (318 - (318 * percent) / maxVal);
    }
</script>

<div class="progress-wrap">
    <svg>
        <circle class="outer" cx="75" cy="75" r="60"></circle>
        <circle class="progress" cx="75" cy="75" r="50" 
                style="--percent: {finalPercent}; --color: {color};"></circle>
        <circle class="inner" cx="75" cy="75" r="40"></circle>
    </svg>
    <div class="info-wrap">
        <h5>{percent}{units}</h5>
    </div>
</div>

<style>
    svg {
        width: 150px;
        height: 150px;
        transform: rotate(-90deg);
    }

    .progress-wrap {
        width: 150px;
        height: 150px;
        position: relative;
    }

    .info-wrap {
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .outer {
        fill: var(--darker-gray);
    }

    .inner {
        fill: var(--dark-gray);
    }

    .progress {
        fill: var(--darker-gray);
        stroke: var(--color);
        stroke-width: 20px;
        stroke-dasharray: 318;
        stroke-dashoffset: 318;
        animation: animateCircle 1.5s ease-out forwards;
    }

    @keyframes animateCircle {
        to {
            stroke-dashoffset: var(--percent);
        }
    }


</style>