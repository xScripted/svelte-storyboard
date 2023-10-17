<script lang="ts">
  export let details: string
</script>

<style lang="scss">
  $color: rgb(181, 232, 255);

  .contenedor {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: fit-content;
    padding: 50px;

    .card {
      background-image: url(https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg);
      position: relative;
      overflow: hidden;
      height: 300px;
      width: 250px;
      border-radius: 35px;

      .content {
        .info {
          background-color: $color;
          position: absolute;
          bottom: 0%;
          width: 100%;
          height: 100px;
          border-radius: 35px 0px 0px 0px;
          transition: 0.3s ease;
          padding: 20px;

          display: flex;
          justify-content: center;
        }

        .arc {
          position: absolute;
          bottom: 100px;
          right: 0%;
          background-color: rgba(255, 255, 255, 0);
          height: 70px;
          width: 70px;
          border-radius: 35px;
          box-shadow: 30px 30px 0 0 $color;
          transition: 0.3s ease;
        }
      }

      &:hover {
        .info,
        .arc {
          transform: translateY(100px);
          transition: 0.3s ease;
        }
      }
    }
  }
</style>

<div class="contenedor">
  <div class="card">
    <div class="content">
      <div class="info">
        <div class="details">{details}</div>
      </div>
      <div class="arc" />
    </div>
  </div>
</div>
