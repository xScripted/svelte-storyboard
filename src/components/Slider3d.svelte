<script lang="ts">
  import type { ISlider3dItem } from '../interfaces/Slider3d'

  export let slides: ISlider3dItem[] = []

  let animation = false
  let index = 0

  let title = ''
  let description = ''
  let url = ''
  let image = ''

  const swipeSlide = () => {
    index = slides.length - 1 === index ? 0 : index + 1

    title = slides[index].title
    description = slides[index].description
    url = slides[index].url
    image = slides[index].image
  }

  setInterval(() => {
    animation = false
    swipeSlide()

    setTimeout(() => {
      animation = true
    }, 0)
    console.log(index)
  }, 4000)
</script>

<style lang="scss">
  @mixin desktop {
    @media (min-width: 1170px) {
      @content;
    }
  }

  @mixin notDesktop {
    @media (max-width: 1170px) {
      @content;
    }
  }

  .slider3d {
    width: 200%;
    * {
      border: 1px solid rgba(255, 0, 0, 0);
    }

    .slide {
      position: relative;
      width: 100%;
      height: 70vh;
      overflow: hidden;

      &.animation {
        .bg-title {
          animation-name: animation;
          animation-duration: 1s;
        }
      }

      .bg-title {
        transition: 1s ease;
        position: absolute;
        top: 0;
        left: -10px;
        font-weight: bold;
        font-size: 50vh;
        text-transform: uppercase;
        opacity: 0.1;
        color: rgb(54, 54, 54);
        white-space: nowrap;
      }

      .content {
        position: relative;
        margin: auto;
        max-width: 1170px;

        &__title {
          transition: 1s ease;
          padding: 10px 30px;
          margin-top: 20vh;
          font-size: 30px;
          font-weight: bold;
        }

        &__description {
          padding: 10px 30px;
          max-width: 400px;
          font-size: 18px;
          color: rgb(73, 73, 73);
        }

        &__image {
          transition: 0.3s ease;
          position: absolute;
          top: 220px;
          right: 0%;
          width: 30%;
          min-width: 300px;
          max-width: 400px;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0px 0px 15px 0px rgba(121, 121, 121, 0.2);

          @include notDesktop {
            left: 0;
            right: 0;
            margin: auto;
          }
        }

        &__cta button {
          cursor: pointer;
          transition: 0.3s ease;
          margin: 30px;
          padding: 10px 30px;
          background-color: rgb(186, 255, 232);
          border-radius: 8px;
          box-shadow: 0px 0px 15px 0px rgba(121, 121, 121, 0.2);

          &:hover {
            transition: 0.3s ease;
            background-color: rgb(0, 199, 133);
          }
        }
      }

      @keyframes animation {
        from {
          left: -30px;
        }
        to {
          left: 30px;
        }
      }
    }
  }
</style>

<div class="slider3d">
  <div class="bullet-index">x x x x</div>

  <div class="slide" class:animation>
    <div class="bg-title">{title}</div>
    <div class="content">
      <div class="content__title">{@html title}</div>
      <div class="content__description">{@html description}</div>
      <a href={url} class="content__cta">
        <button>Me interesa {'>'}</button>
      </a>
      <img src={image} class="content__image" alt="example" />
    </div>
  </div>
</div>
