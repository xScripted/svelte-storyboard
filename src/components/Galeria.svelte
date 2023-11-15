<script lang="ts">
  export let photos: string[] = []
  export let i: number = 0
  let X: number = 0
  export let closed: boolean = false
</script>

<style lang="scss">
  @mixin notDesktop {
    @media (max-width: 1170px) {
      @content;
    }
  }

  .gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: rgb(19, 38, 47);
    width: 100%;
    height: 100vh;

    z-index: 99;
    top: 0;

    .contador {
      position: absolute;
      margin: 0 auto;
      top: 50px;
      color: white;
      font-size: 20px;
    }

    .image-container {
      overflow: hidden;
      width: 100%;
      max-width: 1000px;

      .images {
        width: 100%;
        height: 100%;
        display: flex;

        @include notDesktop {
          overflow-x: scroll;
          -ms-scroll-snap-type: x mandatory;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
        }

        .image {
          width: 100%;
          flex-shrink: 0;

          img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    button {
      position: absolute;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      top: calc(50% - 25px);
      display: flex;
      justify-content: center;
      align-items: center;
      border: 3px solid white;
      overflow: hidden;
      background-color: inherit;
      z-index: 99;
      cursor: pointer;

      svg {
        fill: white;
        transition: 0.2s ease;
      }

      .circle {
        width: 50px;
        transition: 0.2s ease;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        background-color: white;
        transform: translateX(50px) translateY(50px);
        border: 2px solid white;
      }

      &:hover {
        transition: 0.3s ease;
        .circle {
          transform: translateX(0px) translateY(0px);
        }
        svg {
          fill: black;
        }
      }
    }

    .previous,
    .next {
      @include notDesktop {
        display: none;
      }
    }

    .close {
      position: absolute;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      top: 25px;
      right: 25px;
      transform: scale(0.9);

      svg {
        transition: 0.3s ease;
        z-index: 3;
        stroke: white;
      }

      &:hover {
        svg {
          transition: 0.3s ease;
          stroke: black;
        }
      }
    }
  }
</style>

{#if !closed}
  <div class="gallery">
    <div class="image-container">
      <div class="images" style="transform: translateX({-i * 1000}px);">
        {#each photos as photo}
          <div class="image">
            <img src={photo} alt="" />
          </div>
        {/each}
      </div>
    </div>
    <div class="contador">{i + 1} / {photos.length}</div>
    <button class="previous" style="left: 75px;" on:click={() => (i = i === 0 ? photos.length - 1 : i - 1)}>
      <div class="arrow" style="z-index: 99;">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
        </svg>
      </div>
      <div class="circle" />
    </button>
    <button class="next" style="right: 75px;" on:click={() => (i = i === photos.length - 1 ? 0 : i + 1)}>
      <svg class="arrow" style="z-index: 99;" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
      </svg>
      <div class="circle" />
    </button>
    <button class="close" on:click={() => (closed = true)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 15 15">
        <path d="m4.5 4.5l6 6m-6 0l6-6" />
      </svg>
      <div class="circle" />
    </button>
  </div>
{/if}
