<script lang="ts">
  import Input from './InputTextToLine.svelte'
</script>

<style lang="scss">
  .page {
    height: fit-content;
    width: 100%;
    padding: 50px;

    display: flex;

    .pop-up {
      background-color: blueviolet;
      position: relative;
      margin: auto;
      height: 500px;
      width: 400px;
      border-radius: 20px;

      .title {
        position: absolute;
        top: 25px;
        color: white;
        font-size: 25px;
        font-weight: 700;
      }

      .inputs {
        position: absolute;
        height: fit-content;
      }
    }
  }
</style>

<div class="page">
  <div class="pop-up">
    <div class="title">Contact us</div>
    <!--nombre, apellidos, correo, tlf-->
    <div class="inputs">
      <Input title="Nombre" />
      <Input title="Apellidos" />
      <Input title="Correo electrónico" />
      <Input title="Número de teléfono" />
    </div>
  </div>
</div>
