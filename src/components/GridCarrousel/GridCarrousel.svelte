<script lang="ts">
  import type { IGridCarrouselItem } from '../../interfaces/GridCarrousel'
  import GridCarrouselItem from './GridCarrouselItem.svelte'

  export let items: IGridCarrouselItem[] = []
  export let infinite: boolean = true

  const totalWidth = `-${items.length * 200}px`
</script>

<style lang="scss">
  $gap: 20px;

  .grid-carrousel {
    display: grid;
    height: 400px;
    min-width: 1170px;
    grid-template-rows: 50% 50%;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-auto-flow: column;
    gap: $gap;
    animation: scroll 5s linear infinite;

    &:hover {
      animation-play-state: paused;
    }

    a,
    div {
      min-width: 200px;
    }

    .big {
      grid-column: span 2;
      grid-row: span 2;
    }

    .broad {
      grid-column: span 2;
    }

    .long {
      grid-row: span 2;
    }
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(--total-width);
    }
  }
</style>

<div class="grid-carrousel" style="--total-width: {totalWidth}">
  {#each infinite ? Array(2) : Array(1) as _}
    {#each items as item}
      {#if item.link}
        <a class={`${item.size ? item.size : ''}`} href={item.link} title={item.hover.title} target={item.target ? '_blank' : ''}>
          <GridCarrouselItem {item} />
        </a>
      {:else}
        <div class={`${item.size ? item.size : ''}`}>
          <GridCarrouselItem {item} />
        </div>
      {/if}
    {/each}
  {/each}
</div>
