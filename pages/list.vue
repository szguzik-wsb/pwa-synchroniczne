<script setup>
const zwiekszanie = useCounter();
</script>
<template>
    <h3>list</h3>


  <p>Counter: {{ zwiekszanie }}</p>
  <button @click="zwiekszanie++">Increment</button>
  <button @click="zwiekszanie--">Decrement</button>
</template>