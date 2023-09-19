<script lang="ts">
  const blob = document.getElementById('blob')

  window.onpointermove = (event) => {
    const { clientX, clientY } = event

    blob?.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: 'forwards' }
    )
  }
</script>

<style lang="scss">
  body {
    height: 100vh;
    margin: 0;
    overflow: hidden;

    #blob {
      height: 34vmax;
      aspect-ratio: 1;
      position: absolute;
      left: 50%;
      top: 50%;
      translate: -50% -50%;
      border-radius: 50%;
      background: linear-gradient(to right, #06ffac, #fa36b8);
      animation: rotate 20s infinite;
      opacity: 0.8;
    }

    #blur {
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 2;
      backdrop-filter: blur(10vmax);
    }
  }

  @keyframes rotate {
    from {
      rotate: 0deg;
    }
    50% {
      scale: 1 1.5s;
    }
    to {
      rotate: 360deg;
    }
  }
</style>

<svelte:window on:pointermove={onpointermove} />

<body>
  <div id="blob" />
  <div id="blur" />
</body>
