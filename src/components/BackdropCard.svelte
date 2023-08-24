<script lang="ts">
</script>

<style lang="scss">
  .backdrop-card {
    transition: 0.3s ease;
    position: relative;
    width: 200px;
    height: 300px;
    margin: 30px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 0px 15px 0px rgba(121, 121, 121, 0.2);

    &:hover {
      transition: 2s ease, transform 0.3s ease;
      transform: translateY(-20px);

      .a {
        background-color: rgba(3, 255, 116, 0.6) !important;
        top: 180px !important;
        right: 10px !important;
      }

      .b {
        background-color: rgba(0, 255, 157, 0.61) !important;
        top: 20px !important;
        left: -40px !important;
        width: 200px;
        height: 200px;
      }

      .c {
        background-color: rgba(0, 255, 64, 0.37) !important;
        top: -40px !important;
        right: -60px !important;
      }
    }

    &__background {
      border-radius: 8px;
      position: relative;

      .bubble {
        transition: 1s ease;
        position: absolute;
        width: 100px;
        height: 100px;
        margin: 30px;
        border-radius: 100%;
        filter: blur(20px);

        &.a {
          background-color: rgba(62, 210, 255, 0.6);
          top: 200px;
          right: 0px;
        }

        &.b {
          background-color: rgba(0, 255, 255, 0.61);
          top: -20px;
          left: -40px;
        }

        &.c {
          background-color: rgba(255, 251, 0, 0.37);
          top: 0px;
          right: -50px;
        }
      }
    }

    &__foreground {
      border-radius: 8px;
      padding: 20px;

      height: 100%;
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.5);

      .title {
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        padding: 10px 0;
      }

      .description {
        padding: 20px 0;
        font-size: 17px;
      }
    }
  }
</style>

<div class="backdrop-card">
  <div class="backdrop-card__background">
    <div class="bubble a" />
    <div class="bubble b" />
    <div class="bubble c" />
  </div>

  <div class="backdrop-card__foreground">
    <div class="title">Title Example</div>

    <div class="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reiciendis nulla dolor, dolores iste doloremque voluptates illum
    </div>
  </div>
</div>
