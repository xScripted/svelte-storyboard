<script lang="ts">
  const weekDays: string[] = ['Mon.', 'Tue.', 'Wen.', 'Thu.', 'Fri.', 'Sat.', 'Sun.']

  const date = new Date()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const days = 20
  let firstDay = date

  date.setDate(date.getDate() + days)

  console.log(date)
</script>

<style lang="scss">
  .container {
    width: 1000px;
    height: 750px;
    display: flex;
    justify-content: center;
    align-items: center;

    .calendar {
      width: 500px;
      height: 500px;
      background-color: rgb(195, 131, 255);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      padding: 25px;
      gap: 30px;
    }
  }
</style>

<div class="container">
  <div class="calendar">
    {#each weekDays as weekDay}
      <div class="week-days">{weekDay}</div>
    {/each}
  </div>
</div>
