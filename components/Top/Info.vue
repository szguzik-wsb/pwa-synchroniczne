<script setup lang="ts">

</script>

<template>
  <div class="info navbar is-black">
    <div class="container is-fullhd center-flex">
      <span>PRODUKTY TWORZONE RĘCZNIE, WYSYŁKA MOŻE WYDŁUŻYĆ SIĘ DO 5 DNI</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info {
  width: 100%;
  height: 50px;
  
  @media (max-width: 565px) {
    height: 100px;
  }
}
.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

span {
  text-align: center;
}
</style>