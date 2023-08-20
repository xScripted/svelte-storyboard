<script lang="ts">
  import type { IGridCarrouselItem } from '../../interfaces/GridCarrousel'

  export let item: IGridCarrouselItem
</script>

<style lang="scss">
  .grid-carrousel-item {
    position: relative;
    background-color: rgb(241, 241, 241);
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    img {
      object-fit: cover;
      position: absolute;
      width: 100%;
      height: 100%;
    }

    span {
      font-weight: bold;
      font-size: 28px;
      text-align: center;
    }

    p {
      text-align: center;
      margin: 10px;
    }

    .hover {
      transition: 0.3s ease;
      position: relative;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      opacity: 0;
      color: white;
      padding: 20px;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 20px;

      &__title {
        font-weight: bold;
        font-size: 20px;
      }

      &:hover {
        transition: 0.3s ease;
        opacity: 1;
      }
    }
  }
</style>

<div class="grid-carrousel-item">
  {#if item.title}
    <span>{@html item.title}</span>
  {/if}

  {#if item.text}
    <p>{item.text}</p>
  {/if}

  {#if item.image}
    <img src={item.image} alt={item.alt} />
  {/if}

  {#if item.hover}
    <div class="hover">
      <div class="hover__title">
        {item.hover.title}
      </div>

      <div class="hover__text">
        {item.hover.text}
      </div>
    </div>
  {/if}
</div>
