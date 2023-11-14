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
    background-color: rgb(32, 32, 32);
    width: 100%;
    height: 100vh;

    z-index: 99;
    top: 0;

    .contador {
      position: absolute;
      margin: 0 auto;
      top: 50px;
      color: white;
      font-size: 15px;
    }

    .image-container {
      overflow: hidden;
      width: 50%;
      max-width: 1000px;
      border-radius: 20px;

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
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: none;
      background-color: white;
      top: calc(50% - 25px);
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
  <button class="previous" style="left: 75px;" on:click={() => (i = i === 0 ? photos.length - 1 : i - 1)} />
  <button class="next" style="right: 75px;" on:click={() => (i = i === photos.length - 1 ? 0 : i + 1)} />
</div>
