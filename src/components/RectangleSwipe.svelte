<script lang="ts">
  import { onMount } from 'svelte'
  export let title: string
  export let text1: string
  export let text2: string
  export let color: string = '#af7adb'

  let HTMLrectangle
  let active = false

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        active = true
      }
    })
  }

  const observer = new IntersectionObserver(callback)

  onMount(() => {
    setTimeout(() => {
      observer.observe(HTMLrectangle)
    }, 100)

    HTMLrectangle.style.backgroundColor = color
  })
</script>

<style lang="scss">
  $color: #af7adb;

  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;

    .rectangle {
      position: absolute;
      right: 0;
      background-color: $color;
      opacity: 0.4;
      width: 40vw;
      height: 500px;
      border-radius: 100px 0 0 100px;
      transform: translateX(100%);
      transition: 1s ease;

      &.active {
        transform: translateX(0%);
        transition: 1s ease;
      }
    }

    .text {
      z-index: 1;

      .text1,
      .text2,
      .title {
        max-width: 800px;
        margin-left: 150px;
      }

      .text1 {
        color: rgb(61, 61, 61);
        font-size: 75px;
        font-weight: 700;
      }

      .text2 {
        color: rgb(61, 61, 61);
        padding-top: 20px;
        font-size: 25px;
      }
    }
  }
</style>

<div class="container">
  <div class="rectangle" bind:this={HTMLrectangle} class:active />
  <div class="text">
    <div class="title">{title}</div>
    <div class="text1">{text1}</div>
    <div class="text2">{text2}</div>
  </div>
</div>
