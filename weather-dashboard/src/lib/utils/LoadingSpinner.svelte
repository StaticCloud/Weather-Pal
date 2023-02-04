<svg>
    <circle class="outer" cx="50" cy="50" r="40"></circle>
    <circle class="progress" cx="50" cy="50" r="30"></circle>
    <circle class="inner" cx="50" cy="50" r="30"></circle>
</svg>

<style>
    svg {
        width: 100px;
        height: 100px;
        transform: rotate(-90deg);
    }

    .inner {
        fill: var(--primary);
    }

    .progress {
        stroke: var(--white);
        stroke-width: 20px;
        stroke-dasharray: 188;
        stroke-dashoffset: 141;
        transform-origin: center;
        animation: spinner 0.5s linear infinite;
    }
    
    .outer {
        fill: var(--darker-gray);
    }

    @keyframes spinner {
        to {
            transform: rotate(360deg)
        }
    }
</style>