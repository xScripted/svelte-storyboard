<script lang="ts">
  import { onMount } from 'svelte'

  let HTMLtitle

  onMount(() => {
    window.addEventListener('scroll', () => {
      if (HTMLtitle) {
        HTMLtitle.style.transform = `translateX(-${window.scrollY}px)`
      }
    })
  })
</script>

<style lang="scss">
  @mixin notDesktop {
    @media (max-width: 1170px) {
      @content;
    }
  }

  .container {
    height: fit-content;
    grid-template-columns: repeat(3, 1fr);
    padding: 50px;
    width: 100%;

    @include notDesktop {
      .text {
        flex-direction: column;
        justify-content: left;
        align-items: center !important;

        .text1 {
          font-size: 50px !important;
        }

        .text2 {
          max-width: 600px !important;
        }
      }

      .title {
        font-size: 300px !important;
        top: -10% !important;
        left: 25% !important;
      }
    }

    .title {
      position: absolute;
      white-space: nowrap;
      left: 50%;
      top: -65%;
      font-weight: bold;
      font-size: 600px;
      opacity: 0.3;
      color: lightcoral;
    }

    .text {
      display: flex;
      justify-content: center;
      align-items: end;
      margin: 20px;
      margin-top: 125px;
      gap: 20px;

      .text1,
      .text2 {
        position: relative;
        display: block;
        color: black;
      }

      .text1 {
        font-size: 60px;
        font-weight: bold;
        max-width: 600px;
      }

      .text2 {
        font-size: 20px;
        font-weight: 500;
        max-width: 400px;
      }
    }
  }
</style>

<div class="container">
  <div class="title" bind:this={HTMLtitle}>Tramita</div>
  <div class="text">
    <div class="text1">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
    <div class="text2">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione culpa animi tempore vero nobis veritatis obcaecati ducimus omnis
      repellendus molestias hic, eligendi ea. Maxime sunt perspiciatis illum quam dolorem velit.
    </div>
  </div>
</div>
