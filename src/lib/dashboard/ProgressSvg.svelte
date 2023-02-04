<script>
    export let maxVal;
    export let percent;
    export let color;
    export let units;

    let finalPercent;

    if (percent >= maxVal) {
        finalPercent = maxVal;
    } else {
        finalPercent = (381 - (381 * percent) / maxVal);
    }
</script>

<div class="progress-wrap">
    <svg>
        <circle class="outer" cx="100" cy="100" r="70"></circle>
        <circle class="progress" cx="100" cy="100" r="60" 
                style="--percent: {finalPercent}; --color: {color};"></circle>
        <circle class="inner" cx="100" cy="100" r="60"></circle>
    </svg>
    <div class="info-wrap">
        <h4>{percent}{units}</h4>
    </div>
</div>

<style>
    svg {
        width: 200px;
        height: 200px;
        transform: rotate(-90deg);
    }

    .progress-wrap {
        width: 200px;
        height: 200px;
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
        stroke-dasharray: 381;
        stroke-dashoffset: 381;
        animation: animateCircle 1.5s ease-out forwards;
    }

    @keyframes animateCircle {
        to {
            stroke-dashoffset: var(--percent);
        }
    }


</style>