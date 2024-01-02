<script lang="ts">
  import Storyboard from './Storyboard.svelte'
  import type { IInfo } from './interfaces/IInfo.ts'
  const contactInfos: IInfo[] = [
    {
      title: 'Github',
      name: 'ViperBite03',
      img: 'Github.svg',
      href: 'https://github.com/ViperBite03',
    },
    {
      title: 'Linkedin',
      name: 'Laia Martin',
      img: 'Linkedin.svg',
      href: 'https://www.linkedin.com/in/laia-martin-de-la-660031280/',
    },
    {
      title: 'Email',
      name: 'lamadelafu03@gmail.com',
      img: 'Carta.svg',
      href: 'mailto:lamadelafu03@gmail.com',
    },
    {
      title: 'tlf',
      name: '671 707 263',
      img: 'Phone.svg',
      href: '',
    },
  ]
</script>

<style lang="scss">
  $color: rgb(225 207 255);
  $breakpoint: 1170px;

  * {
    border: 1px solid yellow;
  }

  .footer {
    position: relative;
    height: 85vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
    font-family: 'Poppins', sans-serif;

    background-color: black;

    .title {
      font-family: 'against', sans-serif;
      margin-top: 50px;
      font-size: 75px;
      color: rgb(190 150 255);
    }

    .content {
      height: fit-content;
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 50px;
      position: relative;

      .picture {
        max-width: 300px;
        z-index: 1;
      }

      .rectangle {
        position: absolute;
        height: 75%;
        width: 60%;
        border-radius: 20px;

        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      .contact-info {
        z-index: 1;

        .social {
          display: flex;
          flex-direction: column;
          text-align: center;
          font-size: 20px;
          gap: 10px;

          a {
            height: fit-content;
            width: fit-content;
            display: flex;
            align-items: center;
            transition: 0.2s ease;

            &:hover {
              color: #2fe7c0;

              .icono {
                transform: scale(1.2);
                transition: 0.2s ease;
              }
            }

            .name {
              margin-left: 15px;
            }

            .icono {
              height: 35px;
              filter: invert(1);
            }
          }
        }
      }
    }
  }

  @media (max-width: $breakpoint) {
    .content {
      height: 100% !important;
      align-items: start !important;
      justify-content: start !important;

      .picture {
        position: absolute;
      }

      .rectangle {
        width: 90% !important;
        height: 65% !important;
        margin: auto;
        left: 0;
        right: 0;
      }

      .contact-info {
        margin-left: 50px;
        margin-top: 30px;
      }
    }
  }
</style>

<div class="footer" id="contacto">
  <div class="title">Contacto</div>
  <div class="subtitle">¡Ponte en contacto conmigo!</div>
  <div class="content">
    <img class="picture" src="chibi-me.png" alt="" />
    <div class="contact-info">
      <div class="social">
        {#each contactInfos as contactInfo}
          <a href={contactInfo.href} target="_blank">
            <img class="icono" src={contactInfo.img} alt="" />
            <div class="name">{contactInfo.name}</div>
          </a>
        {/each}
      </div>
    </div>
    <div class="rectangle" />
  </div>
</div>
