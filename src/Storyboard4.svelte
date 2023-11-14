<script lang="ts">
  const cards = [
    { text: 'Habitaciones', icon: 'https://cdn-icons-png.flaticon.com/512/90/90011.png', value: 2 },
    { text: 'Baños', icon: 'https://cdn-icons-png.flaticon.com/512/3289/3289742.png', value: 3 },
    { text: 'm²', icon: 'https://cdn-icons-png.flaticon.com/512/18/18343.png', value: 80 },
    { text: 'Orientación', icon: 'https://cdn-icons-png.flaticon.com/512/156/156838.png', value: 'Oeste' },
  ]

  let galleryMode = false
</script>

<style lang="scss">
  .container {
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: black;
    overflow: hidden;
    transition: 0.3s ease;

    .rectangle {
      position: absolute;
      background-color: white;
      transition: 0.5s ease;
      width: 100%;
      height: 20vh;
      bottom: 0;
      z-index: 3;
    }

    &.galleryMode {
      height: 100vh;
      transition: 0.5s ease;
      background-color: white;

      .rectangle {
        height: 0;
        transition: 0.5s ease;
      }

      .background {
        transition: 0.3s ease;
        gap: 10px;
        z-index: 2;
        opacity: 1;
        position: fixed;
        height: 100%;
        padding: 0 150px;
        padding-top: 10px;

        grid-template-columns: 2fr 2fr 2fr;
        grid-template-rows: 3fr 2fr;
      }

      .photos {
        button {
          transition: 0.5s ease;
          width: 50px;
          border-radius: 50%;

          .text {
            display: none;
          }

          .icon {
            opacity: 0;
          }

          .cross {
            display: flex;
          }
        }
      }
    }

    .photos {
      position: absolute;
      top: 25px;
      right: 25px;
      z-index: 3;
      cursor: pointer;
      transform: scale(0.9);

      &:hover ~ .background {
        z-index: 1;
        opacity: 1;
        transition: 0.5s ease;
      }

      button {
        box-shadow: 1px 2px 10px 2px rgba(122, 122, 122, 0.3);
        background-color: white;
        height: 50px;
        width: 140px;
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 10px;
        border: none;
        font-weight: bold;
        cursor: pointer;
        transition: 0.5s ease;

        .text {
          transition: 1s ease;
          opacity: 1;
          margin-left: 35px;
        }

        .icon {
          transition: 0.5s ease;
          position: absolute;
          left: 15px;
          display: flex;
          align-items: center;
          height: 100%;
        }

        .cross {
          display: none;
        }

        &:hover {
          .text {
            transition: 0.3s ease;
            opacity: 0;
          }

          .icon {
            left: calc(50% - 12.5px);
          }
        }
      }
    }

    .background {
      background-color: white;
      transition: 0.5s ease;
      width: 100%;
      height: 100vh;
      opacity: 0.4;
      display: grid;
      position: absolute;

      top: 0;
      gap: 0px;

      grid-template-columns: 2fr 2fr 0fr;
      grid-template-rows: 3fr 0fr;

      .item {
        border-radius: 5px;
        position: relative;
        overflow: hidden;

        &:nth-child(1) {
          grid-column-end: 3;
          grid-column-start: 1;
        }

        img {
          position: absolute;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }

    .elements {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 50px;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;

      .title {
        font-size: 50px;
        font-weight: bold;
      }

      .ref {
        font-size: 18px;
      }

      .price {
        font-size: 55px;
        font-weight: bold;
        margin-top: 10px;
      }

      .cards {
        height: fit-content;
        width: fit-content;
        margin-top: 50px;
        gap: 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .card {
          width: 130px;
          height: 75px;
          border: 2px solid white;
          border-radius: 20px;

          display: flex;
          justify-content: space-around;
          align-items: center;

          .icon {
            width: 75px;
          }

          .value {
            margin-right: 20px;
            font-weight: 600;
          }
        }
      }
    }
  }
</style>

<div class="container" class:galleryMode>
  <div class="photos">
    <button on:click={() => (galleryMode = !galleryMode)}>
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25">
          <path
            d="M120-540v-300h300v300H120Zm80-80h140v-140H200v140Zm-80 500v-300h300v300H120Zm80-80h140v-140H200v140Zm340-340v-300h300v300H540Zm80-80h140v-140H620v140Zm-80 500v-300h300v300H540Zm80-80h140v-140H620v140ZM340-620Zm0 280Zm280-280Zm0 280Z"
          />
        </svg>
      </div>
      <div class="text">Más fotos</div>
      <div class="cross">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 15 15"
          ><path fill="none" stroke="currentColor" d="m4.5 4.5l6 6m-6 0l6-6" /></svg
        >
      </div>
    </button>
  </div>
  <div class="elements">
    <div class="ref">Ref. 01258</div>
    <div class="title">Casa en Santa Coloma de Gramanet</div>
    <div class="price">1.195.000€</div>
    <div class="cards">
      {#each cards as card}
        <div class="card">
          <img class="icon" src="https://iihl.org/wp-content/uploads/2020/02/download-icon-white-png-1.png" alt="" />
          <div class="value">{card.value}</div>
        </div>
      {/each}
    </div>
  </div>
  <div class="rectangle" />
  <div class="background">
    <div class="item">
      <img src="https://fotos15.apinmo.com/747/18562708/3-1.jpg" alt="" />
    </div>
    <div class="item">
      <img src="https://fotos15.apinmo.com/747/18562708/3-1.jpg" alt="" />
    </div>
    <div class="item">
      <img src="https://fotos15.apinmo.com/747/18562708/3-1.jpg" alt="" />
    </div>
    <div class="item">
      <img src="https://fotos15.apinmo.com/747/18562708/3-1.jpg" alt="" />
    </div>
    <div class="item">
      <img src="https://fotos15.apinmo.com/747/18562708/3-1.jpg" alt="" />
    </div>
    <div class="item">
      <img src="https://fotos15.apinmo.com/747/18562708/3-1.jpg" alt="" />
    </div>
  </div>
</div>
