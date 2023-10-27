<script lang="ts">
  const ref = '01268'
  const name = 'Local comercial Santa Coloma de Gramenet'
  const price = '120.000'
  const resumen = ''
</script>

<style lang="scss">
  .page {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;

    .header {
      position: absolute;
      width: 100%;
      height: 100px;
      border: 1px solid black;
    }

    .body {
      margin-top: 150px;
      height: 100%;
      width: fit-content;

      .photos {
        border: 5px solid black;
        position: relative;
        margin: 10px 0 10px 0;
        height: 500px;
        width: 1250px;
        border-radius: 20px;

        .more {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          color: black;
          font-size: 50px;
          font-weight: 1000;
          right: 0;
          margin: 15px;
          height: 60px;
          width: 60px;
          border-radius: 37.5px;
          border: 4px solid black;
        }
      }

      .ref {
        font-size: 18px;
        font-weight: lighter;
      }

      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .name {
          font-size: 35px;
        }

        .price {
          font-size: 50px;
          font-weight: bold;
          font-display: end;
        }
      }
    }
  }
</style>

<div class="page">
  <div class="header" />
  <div class="body">
    <div class="ref">REF. {ref}</div>
    <div class="photos">
      <div class="more">+</div>
    </div>
    <div class="title">
      <div class="name">{name}</div>
      <div class="price">{price}€</div>
    </div>
    <div class="details">
      <div class="caracteristicas">.</div>
      <div class="energy" />
      <div class="resumen">{resumen}</div>
    </div>
    <div class="map">Mapa</div>
  </div>
</div>
