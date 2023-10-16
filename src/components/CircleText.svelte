<script lang="ts"></script>

<style lang="scss">
  .circles {
    display: flex;
    align-items: center;
    position: relative;
    height: 500px;
    width: 100%;

    .circle-left,
    .circle-right {
      position: absolute;
      border-radius: 50%;
      width: 250px;
      height: 250px;

      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      background-color: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(5px);
    }

    .circle-left {
      right: 47%;
    }

    .circle-right {
      left: 47%;
    }
  }
</style>

<div class="circles">
  <div class="circle-left" />
  <div class="circle-right" />
</div>
