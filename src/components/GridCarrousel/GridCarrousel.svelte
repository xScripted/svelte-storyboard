<script lang="ts">
  import type { IGridCarrouselItem } from '../../interfaces/GridCarrousel'
  import GridCarrouselItem from './GridCarrouselItem.svelte'

  export let items: IGridCarrouselItem[] = []
  export let infinite: boolean = true
</script>

<style lang="scss">
  $gap: 0px;

  .grid-carrousel {
    display: grid;
    height: 400px;
    min-width: 1170px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: minmax(200px, 1fr);
    grid-auto-flow: column;
    gap: $gap;
    padding: 20px;  
    //animation: scroll 15s linear infinite;


    &:hover {
      animation-play-state: paused;
    }

    a {
      display: contents;
    }
  }


  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100vw)}
  }
</style>

<div class="grid-carrousel">
  {#each infinite ? Array(2) : Array(1) as _}
    {#each items as item}
      {#if item.link}
        <a href={item.link} title={item.hover.title} target={item.target ? '_blank' : ''}>
          <GridCarrouselItem {item} />
        </a>
      {:else}
        <GridCarrouselItem {item} />
      {/if}
    {/each}
  {/each}
</div>
