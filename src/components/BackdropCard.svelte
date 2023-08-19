<script lang="ts">

</script>



<style lang="scss">
.backdrop-card {
    position: relative;
    width: 200px;
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.2);
    
    
    &__background {
        border-radius: 8px;
        position: relative;
        .bubble {
            position: absolute;
            width: 100px;
            height: 100px;
            margin: 30px;
            border-radius: 100%;
            filter: blur(20px);
            
            &.red {
                background-color: rgb(237, 122, 252);
                top: 100px;
                right: 0px;
            }

            &.blue {
                background-color: cyan;
                top: -20px;
                left: -40px;
            }

            &.yellow {
                background-color: rgb(255, 0, 170);
                top: -40px;
                right: -50px;
            }
        }
    }

    &__foreground {
        border-radius: 8px;
        height: 100%;
        backdrop-filter: blur(10px);
        background-color: rgba(255, 255, 255, 0.5);
    }
}
</style>


<div class="backdrop-card">
    <div class="backdrop-card__background">
        <div class="bubble red"></div>
        <div class="bubble blue"></div>
        <div class="bubble yellow"></div>

    </div>

    <div class="backdrop-card__foreground">
aa
    </div>

</div>