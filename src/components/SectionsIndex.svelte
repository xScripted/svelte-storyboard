<script lang="ts">
  import { onMount } from 'svelte'

  let HTMLsections = []
  let HTMLdots

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const activeName = entry.target.textContent

        for (let item of HTMLdots.children[0].children) {
          const itemName = item.getAttribute('section-id')

          if (activeName === itemName) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        }
      }
    })
  }

  const options = {
    root: null,
    rootMargin: '-100px',
    threshold: 0.5,
  }

  const observer = new IntersectionObserver(callback, options)

  onMount(() => {
    setTimeout(() => {
      HTMLsections = [...document.querySelectorAll('h2')]

      HTMLsections.map((item: Element, i: number) => {
        observer.observe(item)
      })
    }, 0)
  })
</script>

<style lang="scss">
  .sections-index {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    height: fit-content;
    margin: auto;
    overflow: hidden;
    z-index: 3;

    .container {
      display: flex;
      flex-direction: column;
      flex: 1;
      width: 50px;

      &:hover {
        width: fit-content;
      }
    }

    .item {
      display: flex;
      align-items: center;
      justify-content: right;
      flex-wrap: nowrap;
      gap: 13px;
      padding: 5px 25px;

      cursor: pointer;

      &.active {
        .dot,
        .name {
          opacity: 0.9;
        }
      }

      .name {
        font-size: 18px;
        white-space: nowrap;
        opacity: 0.3;
      }

      .dot {
        flex-shrink: 0;
        opacity: 0.3;
        background-color: rgb(51, 51, 51);
        width: 12px;
        height: 12px;
        border-radius: 100%;
      }
    }
  }
</style>

<div class="sections-index" bind:this={HTMLdots}>
  <div class="container">
    {#each HTMLsections as HTMLsection}
      <div class="item" section-id={HTMLsection.textContent} on:click={() => HTMLsection.scrollIntoView()}>
        <div class="name">{HTMLsection.textContent}</div>
        <div class="dot" />
      </div>
    {/each}
  </div>
</div>
