<script lang="ts">
  export let photos: string[] = []
  export let photosIndex: number = 0
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
      top: 25px;
      color: white;
      font-size: 15px;
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
        min-width: 500px;
        
        img {
          object-fit: contain;
          width: 100%;
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
    <div class="images">
      {#each photos as photo, index}
        <div class="image">
          <img src={photo} alt="">
        </div>
      {/each}
    </div>
  </div>
  <div class="contador">{photosIndex + 1} / {photos.length}</div>
  <button class="previous" style="left: 75px;"></button>
  <button class="next" style="right: 75px;"></button>
</div>

