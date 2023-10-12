<script lang="ts">
  export let color: string = '#ae7bdf'
  export let title: string
  let HTMLfolder

  //HTMLfolder.style.backgroundColor = color
</script>

<style lang="scss">
  $color: #d8d5d8;

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
      border-radius: 15px 15px 50px 50px;
      background-color: $color;
    }

    .up {
      position: absolute;
      height: 50px;
      width: 75px;
      border-radius: 15px;
      right: 95px;
      top: -10px;
      background-color: $color;
    }

    .front {
      position: absolute;
      z-index: 1;
      border: 1px solid rgba(163, 163, 163, 0.5);
      width: 170px;
      height: 100px;
      border-radius: 15px;
      top: 25px;
      background-color: $color;
      transition: 0.5s ease;
      box-shadow: 0px -10px 10px 0px rgba(107, 107, 107, 0.5);
    }

    &:hover {
      .front {
        transform: perspective(900px) translateY(5px) rotateX(-35deg) translateZ(0);
        box-shadow: 0px -20px 15px 0px rgba(107, 107, 107, 0.5);
        transition: 0.3s ease;
      }
    }
  }
</style>

<a href="" class="folder" bind:this={HTMLfolder}>
  <div class="back" />
  <div class="front">{title}</div>
  <div class="up" />
</a>
