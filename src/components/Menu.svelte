<script lang="ts">
  const logo = 'https://empleo.camaravalencia.com/tenancy/assets/images/logo-empresa-default.png'
  const phone = {
    text: '679 21 60 99',
    href: 'tel:+34679216099',
  }
  const items = [
    {
      title: 'Item 1',
      url: '/',
      subitems: [
        {
          title: 'Subitem 1',
          url: '/',
        },
        {
          title: 'Subitem 2',
          url: '/',
        },
      ],
    },
    {
      title: 'Item 2',
      url: '/',
    },
    {
      title: 'Item 3',
      url: '/',
      subitems: [
        {
          title: 'Subitem 1',
          url: '/',
        },
        {
          title: 'Subitem 2',
          url: '/',
        },
      ],
    },
    {
      title: 'Item 4',
      url: '/',
    },
    {
      title: 'Item 5',
      url: '/',
    },
  ]
</script>

<style lang="scss">
  $paddingTop: 20px;

  .global-wrapper {
    max-width: 1170px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  .logo {
    display: flex;
    height: 60px;
    align-items: center;

    img {
      height: 100%;
    }
  }

  .menu {
    position: sticky;
    top: 0;
    width: 100%;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(8px);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);

    .menu-container {
      display: flex;
      justify-content: space-between;

      .main-items {
        display: flex;
        color: rgb(100, 100, 100);

        li {
          cursor: pointer;
          padding-top: $paddingTop;
          padding-right: 40px;
          list-style: none;
          height: 70px;

          &:hover {
            color: black;

            .subitems {
              display: flex;
            }
          }

          .subitems {
            display: none;
            flex-direction: column;
            position: absolute;

            margin-top: 10px;
            padding: 10px;
            top: 60px;
            min-width: 200px;
            width: fit-content;
            height: fit-content;
            border-radius: 4px;

            background-color: rgba(255, 255, 255, 1);
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);

            .subitem {
              transition: 0.3s ease;
              display: flex;
              align-items: center;

              &:hover {
                .subitem__icon {
                  opacity: 1;
                }
              }

              &__icon {
                opacity: 0;
                height: 24px;
              }
            }

            a {
              padding: 10px 5px;
            }
          }
        }
      }

      .right-items {
        padding-top: $paddingTop;
      }
    }
  }

  .menu-mobile {
    display: none;
    width: 100%;
    height: 60px;
    z-index: 10;

    .burger-checkbox {
      cursor: pointer;
      display: block;
      position: absolute;
      width: 70px;
      height: 60px;
      opacity: 0;
      z-index: 2;

      &:checked ~ .navbar span:nth-of-type(1) {
        transform-origin: bottom;
        transform: rotatez(45deg) translate(5px, 0px);
      }

      &:checked ~ .navbar span:nth-of-type(2) {
        transform-origin: top;
        transform: rotatez(-45deg);
      }

      &:checked ~ .navbar span:nth-of-type(3) {
        transform-origin: bottom;
        width: 50%;
        transform: translate(17px, -7px) rotatez(45deg);
      }
    }

    .navbar {
      display: flex;
      background-color: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(8px);
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);

      .logo {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 60px;
      }

      .burger {
        display: flex;
        flex-direction: column;
        width: 70px;
        padding: 10px;
        padding-right: 20px;
        padding-top: 12px;
        cursor: pointer;

        span {
          background: #7c7c7c;
          border-radius: 10px;
          height: 4px;
          margin: 4px 0;
          transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

          &:nth-of-type(1) {
            width: 50%;
          }

          &:nth-of-type(2) {
            width: 100%;
          }

          &:nth-of-type(3) {
            width: 75%;
          }
        }
      }
    }

    .burger-checkbox:checked ~ .items {
      transition: 0.3s ease;
      transform: translateX(0%);
    }

    .items {
      transition: 0.3s ease;
      position: absolute;
      width: 100%;
      height: 100vh;
      padding-top: 20px;
      background-color: rgba(255, 255, 255, 1);
      transform: translateX(-100%);
      z-index: -1;

      .item {
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 15px;

        a {
          font-size: 18px;
        }

        svg {
          width: 20px;
        }
      }

      .subitem {
        padding: 10px 60px;
        font-size: 18px;
        color: rgb(150, 150, 150);
      }

      .telf {
        display: flex;
        justify-content: center;
        padding: 20px;
        font-weight: bold;
      }
    }
  }

  @media only screen and (max-width: 1170px) {
    .menu {
      display: none;
    }

    .menu-mobile {
      display: block;
    }
  }
</style>

<nav class="menu">
  <div class="global-wrapper menu-container">
    <div class="logo">
      <img src={logo} alt="Logo" />
    </div>

    <ul class="main-items">
      {#each items as item}
        <li>
          <a href={item.url} title={item.title}>{item.title}</a>

          {#if item.subitems}
            <div class="subitems">
              {#each item.subitems as subitem}
                <div class="subitem">
                  <svg viewBox="0 0 24 24" class="subitem__icon"
                    ><path
                      fill="#000000"
                      d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"
                    /></svg
                  >
                  <a href={subitem.url} title={subitem.title}>{subitem.title}</a>
                </div>
              {/each}
            </div>
          {/if}
        </li>
      {/each}
    </ul>

    <div class="right-items">{phone.text}</div>
  </div>
</nav>

<nav class="menu-mobile">
  <input type="checkbox" class="burger-checkbox" />

  <div class="navbar">
    <div class="burger">
      <span />
      <span />
      <span />
    </div>

    <div class="logo">
      <img src={logo} alt="Logo" />
    </div>
  </div>

  <div class="items">
    {#each items as item}
      <div class="item">
        <svg viewBox="0 0 24 24" class="subitem__icon"
          ><path
            fill="#000000"
            d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"
          /></svg
        >
        <a href={item.url} title={item.title}>{item.title}</a>
      </div>

      {#if item.subitems}
        <div class="subitems">
          {#each item.subitems as subitem}
            <div class="subitem">
              <a href={subitem.url} title={subitem.title}>{subitem.title}</a>
            </div>
          {/each}
        </div>
      {/if}
    {/each}

    <div class="telf">
      <a href={phone.href} title={phone.href}>{phone.text}</a>
    </div>
  </div>
</nav>
