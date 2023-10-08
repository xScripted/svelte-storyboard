<script lang="ts"></script>

<style lang="scss">
  $color1: rgb(174, 123, 223);
  $color2: rgb(118, 64, 168);

  .folders {
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    margin: 100px;

    .folderBehind {
      background-color: $color1;
      width: 170px;
      height: 100px;
      border-radius: 15px;
    }

    .folderUp {
      background-color: $color1;
      position: absolute;
      height: 50px;
      width: 75px;
      border-radius: 15px;
      right: 642px;
      top: 90px;
    }

    .folderFront {
      background-color: $color2;
      position: absolute;
      z-index: 1;
      width: 170px;
      height: 85px;
      border-radius: 15px;
      top: 120px;
      box-shadow: 0px -10px 15px 0px rgba(91, 51, 129, 0.75);
    }
  }
</style>

<div class="folders">
  <div class="folderBehind" />
  <div class="folderFront" />
  <div class="folderUp" />
</div>
