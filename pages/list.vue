<script setup>
const counter = useState("counter", () => Math.round(Math.random() * 1000));
</script>
<template>
    <h3>list</h3>
    <p>Counter: {{ counter }}</p>
  <button @click="counter++">Increment</button>
  <button @click="counter--">Decrement</button>
</template>