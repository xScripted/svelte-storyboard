<script lang="ts">
  import GridCarrousel from './components/GridCarrousel/GridCarrousel.svelte'
  import { gridCarrouselItems } from './dataComponents/GridCarrousel'
  import AccordionGallery from './components/AccordionGallery.svelte'
  import { accordionGalleryItems } from './dataComponents/AccordionGallery'
  import BackdropCard from './components/BackdropCard.svelte'
  import AuroraText from './components/AuroraText.svelte'
  import BurgerMenu from './components/BurgerMenu.svelte'
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
      position: relative;
      border: 2px solid black;
      padding: 20px;
      margin: 50px 0;
      border-radius: 8px;
      overflow: hidden;
      height: fit-content;

      .content {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>

<div class="storyboard">
  <h1 class="storyboard-title">Storyboard</h1>

  <section>
    <h2>GridCarrousel.svelte (In progress)</h2>
    <div class="content">
      <GridCarrousel items={gridCarrouselItems} />
    </div>
  </section>

  <section>
    <h2>AccordionGallery.svelte</h2>
    <div class="content">
      <AccordionGallery items={accordionGalleryItems} />
    </div>
  </section>

  <section>
    <h2>BackdropCard.svelte</h2>
    <div class="content">
      <BackdropCard />
      <BackdropCard />
      <BackdropCard />
      <BackdropCard />
    </div>
  </section>

  <section>
    <h2>AuroraText.svelte</h2>
    <div class="content">
      <AuroraText title="Hazme un bizum" />
    </div>
  </section>

  <section
    style="background-image: url('https://www.elegantthemes.com/blog/wp-content/uploads/2023/02/Best-WordPress-landing-page-plugins.jpg')"
  >
    <h2>BurgerMenu.svelte</h2>
    <div class="content" style="align-items: flex-start; height: 600px; ">
      <BurgerMenu />
    </div>
  </section>
</div>
