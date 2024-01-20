<script lang="ts">
  import AlgoEnergetico from './components/AlgoEnergetico.svelte'
  import GridCarrousel from './components/GridCarrousel/GridCarrousel.svelte'
  import { gridCarrouselItems } from './dataComponents/GridCarrousel'
  import AccordionGallery from './components/AccordionGallery.svelte'
  import { accordionGalleryItems } from './dataComponents/AccordionGallery'
  import BackdropCard from './components/BackdropCard.svelte'
  import AuroraText from './components/AuroraText.svelte'
  import BurgerMenu from './components/BurgerMenu.svelte'
  import HeroBigTitle from './components/HeroBigTitle.svelte'
  import RatingStars from './components/RatingStars.svelte'
  import Faqs from './components/Faqs.svelte'
  import Modal from './components/Modal.svelte'
  //import Footer from './components/Footer.svelte'
  import Slider from './components/Slider.svelte'
  import Menu from './components/Menu.svelte'
  import InputTextToLine from './components/InputTextToLine.svelte'
  import Slider3d from './components/Slider3d.svelte'
  import { Slider3dItems } from './dataComponents/Slider3d'
  import BigMommaText from './components/BigMommaText.svelte'
  import SectionsIndex from './components/SectionsIndex.svelte'
  import RectangleSwipe from './components/RectangleSwipe.svelte'
  import NavBar from './components/NavBar.svelte'
  import Folder from './components/Folder.svelte'
  import Calendar from './components/Calendar.svelte'
  import TextGradient from './components/TextGradient.svelte'
  import Opinions from './components/Opinions.svelte'
</script>

<style lang="scss">
  @import './sass/text-effects.scss';
  @import './sass/buttons.scss';

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
      padding: 20px;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      border-bottom: 2px solid black;
      background-color: rgb(223, 223, 223);
    }

    section {
      position: relative;
      border: 2px solid black;
      margin: 200px 0;
      border-radius: 8px;
      overflow: hidden;
      height: fit-content;

      .content {
        min-height: 50px;
        height: fit-content;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
      }
    }
  }
</style>

<div class="storyboard">
  <h1 class="storyboard-title">Storyboard</h1>

  <section>
    <h2>Opinions.svelte (in progress)</h2>
    <div class="content">
      <Opinions />
    </div>
  </section>

  <!--<section>
    <h2>Calendar.svelte (in progress)</h2>
    <div class="content">
      <Calendar />
    </div>
  </section>-->

  <section>
    <h2>TextGradient.svelte</h2>
    <div class="content">
      <TextGradient />
    </div>
  </section>

  <section>
    <h2>AlgoEnergetico.svelte</h2>
    <div class="content">
      <AlgoEnergetico />
    </div>
  </section>

  <section>
    <h2>Folder.svelte</h2>
    <div class="content" style="background-color: blueviolet;">
      <Folder title="Venta" color="" icon="home" />
      <Folder title="Alquiler" color="" icon="key" />
      <Folder title="Base de datos" color="" icon="home-pin" />
    </div>
  </section>

  <section>
    <h2>NavBar.svelte</h2>
    <div class="content">
      <NavBar />
    </div>
  </section>

  <section>
    <h2>InputTextToLine.svelte</h2>
    <div class="content">
      <InputTextToLine title="Name" />
      <InputTextToLine title="Surname" />
      <InputTextToLine title="Email adress" />
    </div>
  </section>

  <section>
    <h2>BigMommaText.svelte</h2>
    <div class="content">
      <BigMommaText />
    </div>
  </section>

  <section>
    <h2>RectangleSwipe.svelte</h2>
    <div class="content">
      <RectangleSwipe
        color=""
        left
        title="TRAMITA"
        text1="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        text2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, enim nesciunt. Delectus ipsum magni facilis voluptatibus nobis, dolores cum blanditiis praesentium error ipsam in dolor esse odit nemo iure libero."
      />
    </div>
  </section>

  <section>
    <h2>Slider3d.svelte</h2>
    <div class="content">
      <Slider3d slides={Slider3dItems} />
    </div>
  </section>

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
    <h2>BurgerMenu.svelte</h2>
    <div
      class="content"
      style="align-items: flex-start; height: 600px; background-image: url('https://www.elegantthemes.com/blog/wp-content/uploads/2023/02/Best-WordPress-landing-page-plugins.jpg'); background-attachment: fixed;"
    >
      <BurgerMenu />
    </div>
  </section>

  <section class="text-effects">
    <h2>Text Effects</h2>
    <div class="content" style="flex-direction: column; gap: 40px; padding: 20px;">
      <div id="Reveal Effect" style="display: flex;">
        <div class="text-showup">Check this</div>
        <div class="text-reveal">
          <span class="text-slidein">amazing Reveal Effect</span>
        </div>
      </div>
      <div class="text-reveal-up">Reveal Up</div>
    </div>
  </section>

  <section>
    <h2>Buttons</h2>
    <div class="content" style="flex-direction: column; gap: 40px; padding: 20px;">
      <button class="btn-flip" data-back="Back" data-front="Front" />
    </div>
  </section>

  <section>
    <h2>AuroraText.svelte</h2>
    <div class="content">
      <AuroraText title="Hazme un bizum" />
    </div>
  </section>

  <section style="padding: 0px;">
    <h2>HeroBigTitle.svelte (F5)</h2>

    <div class="content">
      <HeroBigTitle />
    </div>
  </section>

  <section>
    <h2>Faqs.svelte (In progress)</h2>
    <div class="content">
      <Faqs />
    </div>
  </section>

  <section>
    <h2>RatingStars.svelte</h2>
    <div class="content" style="flex-direction: column;">
      <RatingStars stars={0} />
      <RatingStars stars={0.5} />
      <RatingStars stars={1} />
      <RatingStars stars={1.5} />
      <RatingStars stars={2} />
      <RatingStars stars={2.5} />
      <RatingStars stars={3} />
      <RatingStars stars={3.5} />
      <RatingStars stars={4} />
      <RatingStars stars={4.5} />
      <RatingStars stars={5} />
    </div>
  </section>

  <section>
    <h2>Modal.svelte (In progress)</h2>
    <div class="content">
      <button>Open modal</button>
    </div>
  </section>

  <!--<section>
    <h2>Footer.svelte (In progress)</h2>
    <div class="content">
      <Footer />
    </div>
  </section>-->

  <section>
    <h2>Slider.svelte (In progress)</h2>
    <div class="content">
      <Slider />
    </div>
  </section>

  <section>
    <h2>Menu.svelte (In progress)</h2>
    <div
      class="content"
      style="align-items: flex-start; height: 600px; background-image: url('https://www.elegantthemes.com/blog/wp-content/uploads/2023/02/Best-WordPress-landing-page-plugins.jpg'); background-attachment: fixed;"
    >
      <Menu />
    </div>
  </section>
</div>

<Modal />
