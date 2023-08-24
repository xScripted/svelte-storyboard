<script lang="ts">

const faqs = [
  {
    question: 'Question 1',
    answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, sed ea quod accusantium vel, architecto reprehenderit velit officiis vitae commodi hic incidunt repellendus, aliquam assumenda! Quo maiores voluptatem minima laboriosam.'
  },
  {
    question: 'Question 2',
    answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, sed ea quod accusantium vel, architecto reprehenderit velit officiis vitae commodi hic incidunt repellendus, aliquam assumenda! Quo maiores voluptatem minima laboriosam.'
  },
  {
    question: 'Question 3',
    answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, sed ea quod accusantium vel, architecto reprehenderit velit officiis vitae commodi hic incidunt repellendus, aliquam assumenda! Quo maiores voluptatem minima laboriosam.'
  }
]

</script>


<style lang="scss">
.faqs {
  width: 100%;
  
  .checkbox {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 50px;
    opacity: 0;
  }

  .question {
    height: 50px;
    background-color: rgb(255, 255, 255);
    font-size: 20px;
    display: flex;
    align-items: center;
    padding: 10px;
    color: rgb(22, 22, 22);
  }

  .checkbox:checked ~ .answer{
    opacity: 1;
    height: fit-content;
  }
  
  .answer {
    transition: .5s ease;
    overflow: hidden;
    height: 0;
    opacity: 0;
    
    &__text {
      padding: 10px;
      color: gray;
    }
  }
}
</style>

<div class="faqs">
  {#each faqs as faq}
    <div class="faq">

      <input type="checkbox" class="checkbox">
      
      <div class="question">
        
        {faq.question}
      </div>
      
      <div class="answer">
        <div class="answer__text">

          {faq.answer}
        </div>
      </div>
    </div>
  {/each}
</div>