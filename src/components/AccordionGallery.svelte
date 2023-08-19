<script lang="ts">
  import type { IAccordionGalleryItem } from '../interfaces/AccordionGallery'
  export let items: IAccordionGalleryItem[] = []
</script>

<style lang="scss">
  .accordion-gallery {
    display: flex;
    width: 100%;
    height: 430px;
    background-color: black;

    &__item {
      transition: 0.5s ease;
      width: 0;
      flex-grow: 1;
      opacity: 0.8;

      .hover-text {
        transition: 0.5s ease;
        position: absolute;
        opacity: 0;
        color: white;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        span {
          font-weight: bold;
          font-size: 28px;
          padding: 0 30px;
        }

        p {
          margin: 10px;
          padding: 30px;
          margin: 0;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:hover {
        width: 30%;
        opacity: 1;
        filter: contrast(120%);

        .hover-text {
          animation-name: fadeIn;
          animation-duration: 0.5s;
          animation-fill-mode: forwards;
          animation-delay: 0.8s;
        }
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>

<div class="accordion-gallery">
  {#each items as item}
    {#if item.link}
      <div class="accordion-gallery__item">
        <a href={item.link}>
          <div class="hover-text">
            <span>{item.title}</span>
            <p>{item.text}</p>
          </div>
          <img src={item.src} alt={item.alt} />
        </a>
      </div>
    {:else}
      <div class="accordion-gallery__item">
        <div class="hover-text">
          <span>{item.title}</span>
          <p>{item.text}</p>
        </div>
        <img src={item.src} alt={item.alt} />
      </div>
    {/if}
  {/each}
</div>
