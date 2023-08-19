<script lang="ts">
  import GridCarrousel from './components/GridCarrousel/GridCarrousel.svelte'
  import { gridCarrouselItems } from './dataComponents/GridCarrousel'

  import AccordionGallery from './components/AccordionGallery.svelte'
  import { accordionGalleryItems } from './dataComponents/AccordionGallery'
</script>

<style lang="scss">
  .storyboard {
    padding: 20px;
    .storyboard-title {
      font-size: 60px;
      font-weight: bold;
      text-align: center;
      padding: 40px 0;
      color: rgb(53, 53, 53);
    }

    h2 {
      padding: 20px 0;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
    }

    section {
      border: 2px solid black;
      padding: 20px;
      margin: 50px 0;
      border-radius: 8px;
      overflow: hidden;
      height: fit-content;
    }
  }
</style>

<div class="storyboard">
  <h1 class="storyboard-title">Storyboard</h1>

  <section>
    <h2>GridCarrousel.svelte (In progress)</h2>
    <GridCarrousel items={gridCarrouselItems} />
  </section>

  <section>
    <h2>AccordionGallery.svelte</h2>
    <AccordionGallery items={accordionGalleryItems} />
  </section>
</div>
