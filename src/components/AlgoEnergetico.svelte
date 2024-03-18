<script>
  export let energialetra = 'E'
  export let energiavalor = 253
  export let emisionesletra = 'E'
  export let emisionesvalor = 64

  let casillas = []
  const etiquetas = [
    { letra: 'A', color: '#249650' },
    { letra: 'B', color: '#30B34D' },
    { letra: 'C', color: '#96CA42' },
    { letra: 'D', color: '#E9E933' },
    { letra: 'E', color: '#EEB22E' },
    { letra: 'F', color: '#DB742D' },
    { letra: 'G', color: '#DC2E2F' },
  ]

  etiquetas.map((value, index) => {
    casillas = [
      ...casillas,
      value,
      { number: energialetra === value.letra ? energiavalor : '' },
      { number: emisionesletra === value.letra ? emisionesvalor : '' },
    ]
  })
</script>

<style lang="scss">
  .miquel-es-una-puta {
    height: fit-content;
    background-color: rgb(236, 236, 236);
    margin: 25px;
    padding: 15px;
    border-radius: 10px;

    .head {
      display: grid;
      grid-template-columns: 150px 95px 95px;
      gap: 5px;
      margin-bottom: 10px;

      * {
        font-size: 9px;
        text-align: center;
      }

      .escala {
        font-weight: bold;
        font-size: 11px;
        text-align: left;
      }
    }

    .tabla {
      display: grid;
      grid-template-columns: 150px 95px 95px;
      gap: 5px;

      .casilla {
        border-radius: 5px;
        background-color: white;
        height: 30px;
        overflow: hidden;

        .numero {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }

        .flecha {
          height: 100%;
          position: relative;
          color: white;
          font-weight: bold;
          display: flex;
          padding-left: 10px;
          align-items: center;

          border-radius: 2.5px;

          &::after {
            content: '';

            position: absolute;
            height: 100%;
            width: 20px;
            right: -19px;
            clip-path: polygon(0 0, 100% 50%, 0 100%);
            background-color: inherit;
          }
        }
      }
    }
  }
</style>

<div class="miquel-es-una-puta">
  <div class="head">
    <div class="escala">Escala de la cualificación energética</div>
    <div class="consumo-energia">Consumo de energia kWh/m² año</div>
    <div class="emisiones">Emisiones kgCO₂/m² año</div>
  </div>

  <div class="tabla">
    {#each casillas as valor, index}
      <div class="casilla">
        {#if valor.letra}
          <div class="flecha" style="width: calc({index * 2.5}% + 50px); background-color: {valor.color};">{valor.letra}</div>
        {/if}
        {#if valor?.number}
          <div class="numero">{valor.number}</div>
        {/if}
      </div>
    {/each}
  </div>
</div>
