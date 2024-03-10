<script setup>

const counter2 = useCounter();
</script>
<template>
    <h3>list</h3>


  <p>Counter: {{ counter2 }}</p>
  <button @click="counter2++">Increment</button>
  <button @click="counter2--">Decrement</button>
</template>