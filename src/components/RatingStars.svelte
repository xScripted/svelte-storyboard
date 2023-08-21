<script lang="ts">
  export let stars = 5

  const ratingStars = {
    stars,
    filledStars: Math.floor(stars),
    halfFilledStar: stars % 1 >= 0.5 ? 1 : 0,
  }
</script>

<style lang="scss">
  .rating-stars {
    display: flex;
    user-select: none;
    gap: 5px;
    margin: auto;
    width: fit-content;
    padding: 10px;

    img {
      height: 20px;
    }
  }
</style>

<div class="rating-stars">
  {#each Array(ratingStars.filledStars) as _}
    <img src="/assets/svgs/star.svg" alt="star" />
  {/each}

  {#if ratingStars.halfFilledStar}
    <img src="/assets/svgs/star-half.svg" alt="star" />
  {/if}

  {#each Array(5 - ratingStars.filledStars - ratingStars.halfFilledStar) as _}
    <img src="/assets/svgs/star-empty.svg" alt="star" />
  {/each}
</div>
