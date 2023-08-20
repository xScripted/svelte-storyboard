<style lang="scss">
  nav {
    position: absolute;
    width: 100%;
    height: 60px;
    top: 0;

    .navbar {
      position: relative;
      width: 100%;
      height: 60px;
      background-color: white;

      .checkbox {
        position: absolute;
        display: block;
        height: 40px;
        width: 40px;
        top: 10px;
        left: 10px;
        z-index: 5;
        opacity: 0;
        cursor: pointer;
      }

      .checkbox:checked ~ .menu-items {
        transform: translateX(0);
      }

      .checkbox:checked ~ .hamburger-lines .line1 {
        transform: rotate(45deg);
      }

      .checkbox:checked ~ .hamburger-lines .line2 {
        transform: scaleY(0);
      }

      .checkbox:checked ~ .hamburger-lines .line3 {
        transform: rotate(-45deg);
      }

      .hamburger-lines {
        display: block;
        height: 26px;
        width: 32px;
        position: absolute;
        top: 17px;
        left: 20px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .line {
          display: block;
          height: 4px;
          width: 100%;
          border-radius: 10px;
          background: #0e2431;
        }

        .line1 {
          transform-origin: 0% 0%;
          transition: transform 0.4s ease-in-out;
        }

        .line2 {
          transition: transform 0.2s ease-in-out;
        }

        .line3 {
          transform-origin: 0% 100%;
          transition: transform 0.4s ease-in-out;
        }
      }

      .checkbox:checked ~ .menu-items {
        transform: translateX(0);
        animation-name: backdrop;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        animation-delay: 0.3s;
      }

      .logo {
        position: absolute;
        top: 10px;
        right: 30px;
        font-size: 1.2rem;
        color: #0e2431;
        font-weight: bold;
        font-size: 30px;
      }

      .menu-items {
        position: absolute;
        transition: 0.3s ease;

        padding-top: 100px;
        margin-top: 60px;
        height: 100vh;
        width: 100%;
        max-width: 350px;

        //backdrop-filter: blur(5px); // Porque esta basura se bugea?
        background-color: rgba(255, 255, 255, 0.6);
        transform: translateX(-100%);

        display: flex;
        flex-direction: column;
        text-align: center;

        a {
          text-decoration: none;
          color: #0e2431;
          font-weight: 500;
          font-size: 1.2rem;
          padding: 0.7rem;
        }

        li {
          padding: 20px 0;
          list-style: none;
        }
      }
    }
  }

  @keyframes backdrop {
    0% {
      backdrop-filter: blur(0px);
    }

    100% {
      backdrop-filter: blur(10px);
    }
  }
</style>

<nav>
  <div class="navbar">
    <input class="checkbox" type="checkbox" name="" id="" />
    <div class="hamburger-lines">
      <span class="line line1" />
      <span class="line line2" />
      <span class="line line3" />
    </div>
    <div class="logo">BurgerMenu.svelte</div>
    <div class="menu-items">
      <li><a href="#">Home</a></li>
      <li><a href="#">about</a></li>
      <li><a href="#">blogs</a></li>
      <li><a href="#">portfolio</a></li>
      <li><a href="#">contact</a></li>
    </div>
  </div>
</nav>
