<script lang="ts">
  import GridCarrousel from './components/GridCarrousel/GridCarrousel.svelte'
  import { gridCarrouselItems } from './dataComponents/GridCarrousel'
</script>

<style lang="scss">
  .storyboard-title {
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    padding: 50px 0;
    color: rgb(206, 180, 216);
  }
</style>

<h1 class="storyboard-title">Storyboard</h1>

<GridCarrousel items={gridCarrouselItems} />
