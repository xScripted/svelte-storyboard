<script lang="ts"></script>

<style lang="scss">
  .outside {
    height: fit-content;
    width: fit-content;
    background-color: rgb(223, 223, 223);
    padding: 10px;
    border-radius: 20px;

    display: grid;
    justify-content: space-around;

    grid-template-columns:
      [left] auto
      [center] auto
      [right] auto;
    grid-template-rows:
      [row1] auto
      [row2] auto
      [row3] auto
      [row4] auto
      [row5] auto
      [row6] auto
      [row7] auto;

    .escala {
      display: grid;
      grid-row-gap: 5px;
      width: 15%;

      .flecha {
        clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%);
        background-color: red;
      }
    }
  }
</style>

<div class="outside">
  <div class="escala">
    Escala de la cualificación energética
    <div class="flecha">A</div>
    <div class="flecha">B</div>
    <div class="flecha">C</div>
    <div class="flecha">D</div>
    <div class="flecha">E</div>
    <div class="flecha">F</div>
    <div class="flecha">G</div>
  </div>
  <div class="consumo-energia">Consumo de energia kWh/m2 año</div>
  <div class="emisiones">Emisiones kgCO2/m2 año</div>
</div>
