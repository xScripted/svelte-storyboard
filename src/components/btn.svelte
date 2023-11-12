<script lang="ts"></script>

<style lang="scss">
  button {
    height: 50px;
    width: 140px;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    cursor: pointer;

    .text {
      transition: 0.3s ease;
      opacity: 1;
      margin-left: 35px;
    }

    .icon {
      transition: 0.5s ease;
      position: absolute;
      left: 15px;
      display: flex;
      align-items: center;
      height: 100%;
    }

    &:hover {
      transition: 0.5s ease;

      .text {
        opacity: 0;
      }

      .icon {
        left: calc(50% - 12.5px);
      }
    }
  }
</style>

<button>
  <div class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 -960 960 960" width="25">
      <path
        d="M120-540v-300h300v300H120Zm80-80h140v-140H200v140Zm-80 500v-300h300v300H120Zm80-80h140v-140H200v140Zm340-340v-300h300v300H540Zm80-80h140v-140H620v140Zm-80 500v-300h300v300H540Zm80-80h140v-140H620v140ZM340-620Zm0 280Zm280-280Zm0 280Z"
      />
    </svg>
  </div>
  <div class="text">Más fotos</div>
</button>
