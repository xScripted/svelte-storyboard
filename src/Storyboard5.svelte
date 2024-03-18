<script lang="ts">
  let balance: number = 8500
</script>

<style lang="scss">
  .background {
    height: 100vh;
    width: 100%;
    background-color: white;
    display: grid;
    align-items: center;

    grid-template-columns: 1fr 1fr 1.5fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    padding: 20px;

    .balance {
      width: 100%;
      height: 100%;
      background-color: #6f2fb2;
      border-radius: 20px;
      display: flex;
      align-items: center;
      position: relative;

      grid-column-start: 1;
      grid-column-end: 4;

      .saldo {
        font-size: 75px;
        font-weight: bold;
      }
    }

    .month {
      width: 100%;
      height: 100%;
      background-color: #6f2fb2;
      border-radius: 20px;
      position: relative;

      button {
        position: absolute;
        width: fit-content;
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: inherit;
        border: none;
        cursor: pointer;
      }
    }

    .add-spent {
      width: 100%;
      height: 100%;
      background-color: #6f2fb2;
      border-radius: 20px;
    }

    .spent-history {
      width: 100%;
      height: 100%;
      background-color: #6f2fb2;
      border-radius: 20px;
    }
  }
</style>

<div class="background">
  <div class="balance">
    <span>Saldo actual:</span>
    <div class="saldo">{balance}€</div>
    <div class="grafico" />
  </div>
  <div class="add-spent">Añadir gasto</div>
  <div class="spent-history">Historial de gastos</div>
  <div class="month">
    <div class="calendar" />
    <button class="previous" style="left:25px;">
      <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
        ><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg
      >
    </button>
    <button class="next" style="right:25px;">
      <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
        ><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg
      >
    </button>
  </div>
</div>
