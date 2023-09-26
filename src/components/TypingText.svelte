<script lang="ts">
  const texts: string[] = ['madre', 'estampa', 'raza']
  const letters = Array.from(texts[0])
  let content = ''

  for (let i = 0; i < letters.length; i++) {
    setTimeout(() => {
      content += letters[i]
    }, 1000 * i)
  }
</script>

<style lang="scss">
  .text {
    .word {
      border: 1px solid;
      width: 120px;
      white-space: nowrap;
      overflow: hidden;
    }
  }
</style>

<div class="text">
  <div class="puta">Tu puta</div>
  <div class="word">{content}</div>
</div>
