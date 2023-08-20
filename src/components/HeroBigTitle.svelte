<style lang="scss">
  .hero-big-title {
    height: 100vh;
    width: 100%;
    border: 2px solid rgb(255, 255, 255);

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      object-fit: cover;
      opacity: 0.5;
    }

    h1 {
      padding-left: 50px;
      margin-top: 20vh;
      font-weight: bold;
      font-size: 80px;
      opacity: 0;
      animation-name: revealUp;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-delay: 1s;
      //text-shadow: -5px 5px 5px rgba(0, 0, 0, 0.26);

      span {
        font-weight: bold;
        font-size: 80px;
        color: rgb(117, 39, 65);
      }
    }

    .second-h1 {
      display: block;
      font-size: 65px;
      padding-left: 50px;
      font-weight: bold;
      opacity: 0;
      animation-name: revealUp;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-delay: 2s;
    }

    p {
      padding-left: 50px;
      font-size: 30px;
      color: rgb(32, 32, 32);
      opacity: 0;
      animation-name: revealUp;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-delay: 4s;
    }
  }

  @keyframes revealUp {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>

<div class="hero-big-title">
  <img src="https://wallpaperaccess.com/full/2923100.jpg" alt="" />
  <h1>All our dreams <span>can come true</span></h1>
  <span class="second-h1"> If we have the courage to pursue them.</span>

  <p>
    “Don’t limit yourself. Many people limit themselves to what they think they can do. <br /> You can go as far as your mind lets you. What
    you believe, remember, you can achieve.”
  </p>
</div>
