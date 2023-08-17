<script lang="ts">
  import type { IGridCarrouselItem } from '../../interfaces/GridCarrousel'
  import { onMount } from 'svelte'
  import GridCarrouselItem from './GridCarrouselItem.svelte'

  export let items: IGridCarrouselItem[] = []
  export let infinite: boolean = true

  onMount(() => {})
</script>

<style lang="scss">
  $gap: 20px;

  .grid-carrousel {
    display: grid;
    height: 400px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(12, calc(20% - $gap));
    grid-auto-flow: column;
    gap: $gap;
    padding-left: 20px;

    a {
      display: contents;
    }
  }
</style>

<div class="grid-carrousel">
  {#each items as item}
    {#if item.link}
      <a href={item.link} title={item.hover.title} target={item.target ? '_blank' : ''}>
        <GridCarrouselItem {item} />
      </a>
    {:else}
      <GridCarrouselItem {item} />
    {/if}
  {/each}
</div>
