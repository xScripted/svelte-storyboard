<script lang="ts"></script>

<style lang="scss">

  .background {
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 100vh;
    
	  background: linear-gradient(-45deg, #ff9c7e, #ff84b3, #8ee1ff, #88ffe3);
	  background-size: 400% 400%;
	  animation: gradient 15s ease infinite;

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

    .page {
      background-color: rgba(255, 255, 255);
      height: 95%;
      width: 100%;
      margin: 25px 25px 25px 200px;
      border-radius: 20px;
    }

    .menu {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      height: 100%;
      width: 200px;
      left: 0;

      .logo {
        position: absolute;
        width: 75px;
        height: 75px;
        top: 50px;
      }
      
      .elements {
        cursor: pointer;

        padding: 10px;
        margin-left: 50px;
        font-weight: 700;
        border-radius: 20px;
        width: 200px;

        &:hover {
          background-color: rgba(255, 255, 255);
        }
      }
    }
  }
</style>

<div class="background">
  <div class="menu">
    <img src="https://cdn1.iconfinder.com/data/icons/sin-city-memories/128/toasting-2-512.png" alt="" class="logo"/>
    <div class="elements" id="01">Schedule</div>
    <div class="elements" id="02">Progress</div>
    <div class="elements" id="03">Messages</div>
    <div class="elements" id="04">About us</div>
    <div class="contac"></div>
  </div>
  <div class="page"></div>
</div>
