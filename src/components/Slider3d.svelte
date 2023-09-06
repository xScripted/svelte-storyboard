<script lang="ts">
  import type { ISlider3dItem } from '../interfaces/Slider3d'

  export let slides: ISlider3dItem[] = []

  let animations = true
  let index = slides.length - 1
  let paused = false

  let title = slides[0].title
  let description = slides[0].description
  let image = slides[0].image
  let url = slides[0].url

  const delay = 10000

  const swipeSlide = () => {
    if (!paused) {
      animations = false

      setTimeout(() => {
        index = slides.length - 1 === index ? 0 : index + 1

        title = slides[index].title
        description = slides[index].description
        image = slides[index].image
        url = slides[index].url

        setTimeout(() => (animations = true), 300)
      }, 100)
    }
  }

  let interval = setInterval(() => swipeSlide(), delay)

  const goToSlide = (i: number) => {
    index = i - 1
    swipeSlide()
    clearInterval(interval)
  }

  swipeSlide()
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

    .bullet-index {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      padding-top: 30px;

      &__item {
        cursor: pointer;
        padding: 10px;

        background-color: transparent;
        border: none;

        img {
          transition: 0.3s ease;
          height: 25px;
          opacity: 0.4;
        }

        &.active {
          img {
            transition: 0.3s ease;
            height: 35px;
            opacity: 0.8;
          }
        }
      }
    }

    .slide {
      transition: opacity 0.1s ease;
      position: relative;
      width: 100%;
      height: 70vh;
      overflow: hidden;
      opacity: 0;

      &.animations {
        transition: opacity 0.3s ease;
        opacity: 1;

        .bg-title {
          transition: 10s;
          left: -30px;
        }

        .content {
          &__image {
            transition: 3s ease;
            right: 100px;
            opacity: 1;
          }

          &__description {
            transition: 2s ease;
            transition-delay: 0.3s;
            margin-left: 20px;
            opacity: 1;
          }

          &__cta button {
            transition: opacity 2s ease, background-color 0.3s ease;
            opacity: 1;
          }
        }
      }

      .bg-title {
        transition: 1s ease;
        position: absolute;
        top: 0;
        left: -200px;
        font-weight: bold;
        font-size: 50vh;
        text-transform: uppercase;
        opacity: 0.1;
        color: rgba(54, 54, 54, 0.5);
        white-space: nowrap;
        line-height: 1;
      }

      .content {
        position: relative;
        margin: auto;
        max-width: 1170px;

        &__title {
          transition: 1s ease;
          padding: 10px 30px;
          margin-left: 10px;
          margin-top: 130px;
          font-size: 30px;
          font-weight: bold;
        }

        &__description {
          padding: 10px 30px;
          max-width: 400px;
          font-size: 18px;
          color: rgb(73, 73, 73);
          opacity: 0;
        }

        &__image {
          transition: 3s ease-out;
          position: absolute;
          top: 200px;
          right: -500px;
          opacity: 0;
          width: 30%;
          min-width: 300px;
          max-width: 400px;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0px 0px 15px 0px rgba(121, 121, 121, 0.2);

          @include notDesktop {
            display: none;
          }
        }

        &__cta button {
          cursor: pointer;
          transition: 0.3s ease;
          margin-top: 30px;
          margin-left: 50px;
          padding: 15px 30px;
          padding-right: 15px;
          background-color: rgb(37, 37, 37);
          border-radius: 8px;
          font-weight: bold;
          box-shadow: -2px 2px 5px 1px rgba(0, 0, 0, 0.17);
          color: white;
          opacity: 0;

          display: flex;
          align-items: center;
          gap: 5px;

          img {
            transform: translateY(1px);
            height: 30px;
          }

          &:hover {
            transition: 0.3s ease;
            background-color: rgb(0, 133, 88);
          }
        }
      }
    }
  }
</style>

<div class="slider3d">
  <div class="bullet-index">
    {#each slides as slide, i}
      <button class="bullet-index__item" class:active={i === index} on:click={() => goToSlide(i)}>
        <img src={slide.icon} alt="icon" />
      </button>
    {/each}
  </div>

  <div class="slide" class:animations>
    <div class="bg-title">{title}</div>
    <div class="content">
      <div class="content__title">{@html title}</div>
      <div class="content__description">{@html description}</div>
      <a href={url} class="content__cta">
        <button on:mouseenter={() => (paused = true)} on:mouseleave={() => (paused = false)}
          >Me interesa <img src="/assets/svgs/angle-right.svg" alt="icon" />
        </button>
      </a>
      <img src={image} class="content__image" alt="example" />
    </div>
  </div>
</div>
