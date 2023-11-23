<script lang="ts"></script>

<style lang="scss">
  $color: rgb(177, 184, 248);

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;

    .title {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 100px;
      font-weight: bold;

      background: linear-gradient(0deg, $color 40%, rgba(0, 212, 255, 0) 100%);
    }

    .content {
      height: 100px;
      width: 100%;
      background-color: $color;
    }
  }
</style>

<div class="container">
  <div class="title">Contacto</div>
  <div class="content" />
</div>
