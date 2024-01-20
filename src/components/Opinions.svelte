<script lang="ts">
  let opinions = [
    {
      name: 'Miquel Toran',
      text: 'Muy profesionales y serios. El Sr Carmelo una guía en todo momento. Muy contenta con la gestión y lo recomiendo 100%',
      stars: 3,
    },
    {
      name: 'Miquel Toran',
      text: 'Muy contento con Tramita. Me han conseguido una vivienda casi al instante. El trato y el asesoramiento en todo momento ha sido fantástico. Volveré a acudir a ellos cuando lo necesite y sin duda lo recomendaré a mi entorno. Un diez.',
      stars: 5,
    },
    {
      name: 'Miquel Toran',
      text: 'Empresa muy profesional. Ponen todos los medios para dar a conocer el inmueble de acuerdo con los propietarios. Seguimiento exhaustivo. Respuesta inmediata del gerente ante cualquier consulta lo que da tranquilidad y seguridad.',
      stars: 2,
    },
    {
      name: 'Miquel Toran',
      text: 'Empresa muy profesional.',
      stars: 4,
    },
  ]

  let currentOpinion: number = 0

  const next = () => {
    if (currentOpinion < opinions.length - 1) currentOpinion++
  }

  const back = () => {
    if (currentOpinion > 0) currentOpinion--
  }
</script>

<style lang="scss">
  .container {
    height: 50vh;
    width: 100%;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .opinions {
      height: 275px;
      width: 50%;
      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;

      .opinion {
        width: 100%;
        height: fit-content;
        position: absolute;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        opacity: 0;
        gap: 15px;

        &.active {
          opacity: 1;
        }

        .stars {
          width: 200px;
          height: 30px;

          display: flex;
          justify-content: space-evenly;
          align-items: center;
          position: relative;
          align-self: end;

          z-index: 2;
          margin-right: 35px;

          .rating {
            width: 100%;
            height: 100%;
            position: relative;

            svg {
              height: 100%;
            }

            .star {
              height: 100%;
              width: 50px;
              position: absolute;
              z-index: 1;

              left: 0;
              right: 0;
              margin: auto;
            }

            .blob {
              position: absolute;
              height: 100%;

              left: 9px;
            }
          }
        }

        .L-quote,
        .R-quote {
          height: 50%;
          opacity: 0.1;
          position: absolute;
        }

        .L-quote {
          top: -20px;
          left: -40px;
        }

        .R-quote {
          transform: scale(-1);
          bottom: -20px;
          right: -40px;
        }

        .text {
          font-size: 30px;
          text-wrap: balance;
          text-align: center;
        }
      }
    }

    .buttons {
      width: fit-content;
      height: fit-content;

      position: relative;

      display: flex;
      gap: 10px;

      button {
        height: 45px;
        width: 40px;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        transition: 0.3s ease;

        border: 1px solid rgba(211, 211, 211, 1);
        border-radius: 18px;
        background-color: white;

        svg {
          transition: 0.3s ease;
          fill: rgba(211, 211, 211, 1);
        }

        &:hover {
          background-color: rgb(39, 243, 206);
          border: rgb(39, 243, 206);
          transition: 0.3s ease;

          svg {
            transition: 0.3s ease;
            fill: black;
          }
        }
      }
    }
  }
</style>

<div class="container">
  <div class="opinions">
    {#each opinions as opinion, index}
      <div class="opinion" class:active={currentOpinion === index}>
        <div class="L-quote">
          <svg xmlns="http://www.w3.org/2000/svg" width="151.28" height="128" viewBox="0 0 1664 1408"
            ><path
              fill="#000000"
              d="M768 832v384q0 80-56 136t-136 56H192q-80 0-136-56T0 1216V512q0-104 40.5-198.5T150 150T313.5 40.5T512 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136m896 0v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136V512q0-104 40.5-198.5T1046 150t163.5-109.5T1408 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136"
            /></svg
          >
        </div>
        <div class="name">{opinion.name}</div>
        <div class="text">{opinion.text}</div>
        <div class="stars">
          {#each Array(5) as _, i}
            <div class="rating">
              <svg class="star" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"
                ><path
                  fill="none"
                  stroke="#1e1e1e"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.3"
                  d="m12 17.75l-6.172 3.245l1.179-6.873l-5-4.867l6.9-1l3.086-6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
                /></svg
              >
              {#if i < opinion.stars}
                <svg class="blob" viewBox="0 0 102 95" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#3fe2cc"
                    d="M55.2,-18.3C60.4,-1.9,45.9,20.6,26.6,34C7.3,47.4,-16.8,51.8,-30.2,42C-43.6,32.1,-46.3,8.1,-39.5,-10.5C-32.7,-29,-16.4,-42.1,4.3,-43.5C25,-45,50,-34.7,55.2,-18.3Z"
                    transform="translate(45 45)"
                  />
                </svg>
              {/if}
            </div>
          {/each}
        </div>
        <div class="R-quote">
          <svg xmlns="http://www.w3.org/2000/svg" width="151.28" height="128" viewBox="0 0 1664 1408"
            ><path
              fill="#000000"
              d="M768 832v384q0 80-56 136t-136 56H192q-80 0-136-56T0 1216V512q0-104 40.5-198.5T150 150T313.5 40.5T512 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136m896 0v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136V512q0-104 40.5-198.5T1046 150t163.5-109.5T1408 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136"
            /></svg
          >
        </div>
      </div>
    {/each}
  </div>

  <div class="buttons">
    <button class="back" style="transform: scaleX(-1);" on:click={back}>
      <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"
        ><path
          d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887z"
        /></svg
      >
    </button>
    <button class="next" on:click={next}>
      <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"
        ><path
          d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887z"
        /></svg
      >
    </button>
  </div>
</div>
