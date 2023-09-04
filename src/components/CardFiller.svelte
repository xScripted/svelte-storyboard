<script lang="ts">
    let month
    let year

    /*for(var m = 0; m < 12; m++){
        console.log(m)
    }
    for(var i = 23; i < 30; i++){
        console.log(i)
    }*/

</script>

<style lang="scss">
    .card-filler{
        position: relative;
        display: flex;
        justify-content: center;
        height: 754px;

        .card{
            position: absolute;
            z-index: 1;
            margin-top: 50px;
            
            width: 323px;
            height: 204px;
            border-radius: 13px;
            background-color: #89CCC5;
            box-shadow: 0px 10px 45px -27px rgba(0,0,0,1);
        }
        
        .info{
            position: relative;
            top: 152px;

            height: 500px;
            width: 500px;
            border-radius: 10px;

            background-color: #D7EBE9;
            //box-shadow: 0px -14px 40px -20px rgba(0,0,0,0.75);
        }
    }
</style>

<dev class="card-filler">
    <dev class="card"></dev>
    <dev class="info">
        <!--CENTRAR ESTA PUTA MIERDA-->
        <input type="password" class="card-number"> 
        <input type="text" class="name">
        <input type="text" class="cvv">
        <input type="month"/>
    </dev>
</dev>
