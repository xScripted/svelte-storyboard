<script lang="ts">
  let month
  let year

  /*for(var m = 0; m < 12; m++){
        console.log(m)
    }
    for(var i = 23; i < 30; i++){
        console.log(i)
    }*/
</script>

<style lang="scss">
  * {
    //border: 1px solid red;
  }

  .card-filler {
    position: relative;
    display: flex;
    justify-content: center;
    height: 730px;

    .card {
      position: absolute;
      z-index: 1;
      margin-top: 50px;

      width: 323px;
      height: 204px;
      border-radius: 13px;
      background-color: #89ccc5;
      box-shadow: 0px 10px 45px -27px rgba(0, 0, 0, 1);
    }

    .info {
      position: relative;
      justify-content: center;
      display: flex;
      align-items: center;
      top: 152px;

      height: 500px;
      width: 500px;
      border-radius: 10px;

      background-color: #d7ebe9;

      .info-inputs {
        height: fit-content;
        display: grid;
        margin-top: 100px;

        justify-content: center;
        grid-template-columns: 1fr 1fr;
        padding: 20px;

        input {
          top: 50%;
          height: 40px;
          border-radius: 8px;
          border: 1px;
          margin: 12px;
          padding: 20px;
        }

        .card-number,
        .name {
          grid-column: 1/3;
        }

        button {
          grid-column: 1/3;
          margin: 12px;
          margin-top: 20px;
          height: 35px;
          cursor: pointer;
          background-color: #e2958c;

          border-radius: 8px;
          border: 0;
        }
      }
    }
  }
</style>

<div class="card-filler">
  <div class="card" />
  <div class="info">
    <div class="info-inputs">
      <input type="password" class="card-number" />
      <input type="text" class="name" />
      <input type="month" />
      <input type="text" class="cvv" />
      <button>Submit</button>
    </div>
  </div>
</div>
