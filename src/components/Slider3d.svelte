<script lang="ts">
  import Slider3d from './Slider3d.svelte'
  import type { ISlider3dItem } from '../interfaces/Slider3d'

  export let slides: ISlider3dItem[] = []
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

    .bg-title {
      position: absolute;
      top: 0;
      font-weight: bold;
      font-size: 50vh;
      text-transform: uppercase;
      opacity: 0.1;
      white-space: nowrap;
    }

    .slides {
      display: flex;
      width: 200%;

      .slide {
        width: 100%;
        height: 70vh;
        overflow: hidden;

        .content {
          position: relative;
          margin: auto;
          max-width: 1170px;

          &__title {
            padding: 10px 30px;
            margin-top: 20vh;
            font-size: 30px;
            font-weight: bold;
          }

          &__description {
            padding: 10px 30px;
            max-width: 400px;
          }

          &__image {
            position: absolute;
            top: 220px;
            right: 10%;
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
      }
    }
  }
</style>

<div class="slider3d">
  <div class="bullet-index">x x x x</div>
  <div class="slides">
    {#each slides as slide}
      <div class="slide">
        <div class="bg-title">{slide.title}</div>
        <div class="content">
          <div class="content__title">{@html slide.title}</div>
          <div class="content__description">{@html slide.description}</div>
          <a href={slide.url} class="content__cta">
            <button>Me interesa {'>'}</button>
          </a>
          <img src={slide.image} class="content__image" alt="example" />
        </div>
      </div>
    {/each}
  </div>
</div>
