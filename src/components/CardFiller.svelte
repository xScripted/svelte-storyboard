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
      background-image: url(https://i.pinimg.com/originals/83/de/4b/83de4b3706360674108710d4339133f8.jpg);
      background-size: cover;
      background-position: center;

      .card-info {
        width: 100%;
        height: 100%;
        position: relative;

        .front,
        .back {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          padding: 20px 30px;
          border-radius: 15px;
          overflow: hidden;
          z-index: 1;
          backface-visibility: hidden;
        }
      }
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

        /*button {
          grid-column: 1/3;
          margin: 12px;
          margin-top: 20px;
          height: 35px;
          cursor: pointer;
          background-color: #e2958c;

          border-radius: 8px;
          border: 0;
        }*/
        button {
          grid-column: 1/3;
          margin: 12px;
          margin-top: 20px;
          height: 35px;

          border-radius: 20px;
          background-color: #e2958c;
          color: white;
          font-size: 1em;
          border: none;
          outline: none;
          cursor: pointer;
          transition: 0.5s;
          box-shadow: 0 6px 0 #bb1542;
        }

        .button:active {
          box-shadow: none;
          transform: translateY(6px);
        }
      }
    }
  }
</style>

<div class="card-filler">
  <div class="card">
    <div class="card-info">
      <div class="front" />
      <div class="back" />
    </div>
  </div>
  <div class="info">
    <div class="info-inputs">
      <input type="password" class="card-number" />
      <input type="text" class="name" />
      <input type="month" />
      <input type="text" class="cvv" />
      <button class="button">Te quierooo {'<3'}</button>
    </div>
  </div>
</div>
