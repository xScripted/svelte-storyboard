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

  .menu {
    position: sticky;
    top: 0;
    width: 100%;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.95);
    opacity: 0.9;
    -webkit-backdrop-filter: blur(8px);
    -moz-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);

    .menu-container {
      display: flex;
      justify-content: space-between;

      .logo {
        display: flex;
        height: 60px;
        align-items: center;

        img {
          height: 100%;
        }
      }

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
              padding: 20px;
              display: flex;
            }
          }

          .subitems {
            display: none;
            flex-direction: column;
            position: absolute;
            margin-top: 10px;
            top: 60px;
            min-width: 200px;
            width: fit-content;
            height: fit-content;
            border-radius: 8px;
            background-color: rgba(255, 255, 255, 0.95);
            -webkit-backdrop-filter: blur(8px);
            -moz-backdrop-filter: blur(8px);
            backdrop-filter: blur(8px);

            a {
              padding: 10px;
            }
          }
        }
      }

      .right-items {
        padding-top: $paddingTop;
      }
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
                <a href={subitem.url} title={subitem.title}>{subitem.title}</a>
              {/each}
            </div>
          {/if}
        </li>
      {/each}
    </ul>

    <div class="right-items">679 21 60 99</div>
  </div>
</nav>
