<script lang="ts"></script>

<style lang="scss">
  .component {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 100%;

    .background {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: fit-content;
      height: fit-content;
      border-radius: 50px;

      background-color: rgba(255, 255, 255, 0.1);
      box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15), -7px -7px 20px rgba(255, 255, 255, 1), inset 0px 0px 4px rgba(255, 255, 255, 0.2),
        inset 7px 7px 15px rgba(55, 84, 170, 0), inset -7px -7px 20px rgba(255, 255, 255, 0), 0px 0px 4px rgba(255, 255, 255, 0);
      backdrop-filter: blur(5px);

      button {
        height: fit-content;
        margin: 8px 10px;
        padding: 8px 12px;
        font-weight: 600;
        cursor: pointer;

        background-color: inherit;
        border: none;
        border-radius: 25px;

        backdrop-filter: blur(5px);

        &:hover {
          background-color: buttonface;
        }
      }
    }
  }
</style>

<div class="component">
  <div class="background">
    <button id="vender">Vender</button>
    <button id="comprar">Comprar</button>
    <button id="base de datos">Base de datos</button>
    <button id="hipotecas">Hipotecas</button>
    <button id="servicios">Servicios</button>
  </div>
</div>
