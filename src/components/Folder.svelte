<script lang="ts">
  export let title: string
  export let icon: string = '/assets/svgs/home.svg'
  export let color: string = 'rgb(217, 217, 217)'
</script>

<style lang="scss">
  $color: rgb(217, 217, 217);

  .folder {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    height: fit-content;

    margin: 100px 50px;

    .back {
      width: 170px;
      height: 110px;
      border-radius: 12px 12px 50px 50px;
      background-color: $color;
    }

    .up {
      position: absolute;
      height: 50px;
      width: 75px;
      border-radius: 12px;
      right: 95px;
      top: -10px;
      background-color: $color;
    }

    .front {
      position: absolute;
      z-index: 2;
      border: 1px solid rgba(163, 163, 163, 0.1);
      width: 170px;
      height: 100px;
      border-radius: 12px;
      top: 15px;
      background-color: $color;
      transition: 0.5s ease;
      box-shadow: 0px -10px 10px 0px rgba(0, 0, 0, 0.2);

      .title {
        color: rgb(44, 44, 44);
        font-size: 22.5px;
        font-weight: 600;
        padding: 5px 10px;
      }
    }

    img {
      position: absolute;
      z-index: 1;
      top: 20px;
      width: 50px;
      filter: invert(0.85);
      transition: 0.3s ease;
    }

    &:hover {
      .front {
        transform: perspective(900px) translateY(5px) rotateX(-35deg) translateZ(0);
        box-shadow: 0px -20px 15px 0px rgba(0, 0, 0, 0.3);
        transition: 0.3s ease;
      }

      img {
        transition: 0.3s cubic-bezier(0.22, 0.68, 0, 1.71);
        transform: translateY(-85px);
      }
    }
  }
</style>

<a href="" class="folder">
  <div class="back" style="background-color: {color};" />
  <div class="front" style="background-color: {color};">
    <div class="title">{title}</div>
  </div>
  <img src="/assets/svgs/{icon}.svg" alt="" />
  <div class="up" style="background-color: {color};" />
</a>
