<script lang="ts">
  export let photos: string[] = []
  export let i: number = 0
  let X: number = 0
</script>

<style lang="scss">
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
      width: 50%;
      max-width: 1000px;

      .images {
        width: 100%;
        height: 100%;
        display: flex;

        .image {
          width: 100%;
          min-width: 1000px;

          img {
            object-fit: contain;
            width: 1000px;
            height: 80vh;
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

      .circle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        background-color: white;
        transform: translateX(50px) translateY(50px);
        border: 2px solid white;
        transition: 0.2s ease;
      }

      &:hover {
        .circle {
          transition: 0.3s ease;
          transform: translateX(0px) translateY(0px);
        }
      }
    }
  }
</style>

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
</div>
