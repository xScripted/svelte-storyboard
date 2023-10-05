<script lang="ts">
  import { onMount } from 'svelte'
  export let title: string
  export let text1: string
  export let text2: string
  export let color: string = '#af7adb'
  export let left = false

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

  @mixin notDesktop {
    @media (max-width: 1170px) {
      @content;
    }
  }

  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;

    &.left {
      .rectangle {
        border-radius: 0 100px 100px 0;
        transform: translateX(-100%);
        left: 0;
      }

      .text {
        position: absolute;
        padding-right: 150px;
        text-align: end;
        right: 0;
      }
    }

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
        transform: translateX(0%) !important;
        transition: 1s ease;
      }
    }

    .text {
      position: absolute;
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

      @include notDesktop {
        margin-left: -125px;

        .text1 {
          font-size: 40px;
        }

        .text2 {
          font-size: 20px;
        }
      }
    }
  }

</style>

<div class="container" class:left>
  <div class="rectangle" bind:this={HTMLrectangle} class:active />
  <div class="text">
    <div class="title">{title}</div>
    <div class="text1">{text1}</div>
    <div class="text2">{text2}</div>
  </div>
</div>
