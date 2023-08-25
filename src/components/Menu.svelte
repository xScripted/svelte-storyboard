<script lang="ts">
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
    width: 100%;
    height: 60px;
    background-color: white;

    .navbar {
      display: flex;

      .logo {
        height: 60px;
      }

      .burger {
        width: 60px;
        height: 60px;
        transition-duration: 0.5s;

        .icon-left,
        .icon-right {
          transition-duration: 0.5s;
          position: absolute;
          height: 8px;
          width: 30px;
          top: 30px;
          background-color: black;

          left: 0px;

          &:before,
          &:after {
            transition-duration: 0.5s;
            position: absolute;
            width: 30px;
            height: 8px;
            background-color: black;
            content: '';
            top: -20px;
          }

          &:after {
            top: 20px !important;
          }

          &:hover {
            cursor: pointer;
          }
        }

        .icon-right {
          left: 30px !important;
        }

        &.open {
          .icon-left {
            transition-duration: 0.5s;
            background: transparent;

            &:before {
              transform: rotateZ(45deg) scaleX(1.4) translate(4px, 4px);
            }

            &:after {
              transform: rotateZ(-45deg) scaleX(1.4) translate(4px, -4px);
            }
          }

          .icon-right {
            transition-duration: 0.5s;
            background: transparent;

            &:before {
              transform: rotateZ(-45deg) scaleX(1.4) translate(-4px, 4px);
            }

            &:after {
              transform: rotateZ(45deg) scaleX(1.4) translate(-4px, -4px);
            }
          }
        }
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
      <img src="https://empleo.camaravalencia.com/tenancy/assets/images/logo-empresa-default.png" alt="Logo" />
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

    <div class="right-items">679 21 60 99</div>
  </div>
</nav>

<nav class="menu-mobile">
  <div class="navbar">
    <div class="burger">
      <div class="icon-left" />
      <div class="icon-right" />
    </div>

    <div class="logo">
      <img src="https://empleo.camaravalencia.com/tenancy/assets/images/logo-empresa-default.png" alt="Logo" />
    </div>
    <div />
  </div>

  <div class="items">as</div>
</nav>
