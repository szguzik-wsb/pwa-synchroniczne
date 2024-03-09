<script setup>
const fdataexternal = ref(await useFetch('https://jsonplaceholder.typicode.com/todos'))
const fdatainternal = ref(await useFetch('http://localhost:3001/posts'))

console.log(fdataexternal.value.data)
console.log(fdatainternal.value.data)
</script>

<template>
<div class="wrapper">
    <div v-for="(value, index) in fdataexternal.data" :key="index">

        <h1>{{value.title}}</h1>
        <h1>{{value.completed}}</h1>
        <h1>{{value.id}}</h1>
        <h1>{{value.userId}}</h1>

    </div>
</div>
<h1>Wewnętrzne</h1>
<div class="wrapper">
    <div v-for="(value, index) in fdatainternal.data" :key="index">

        <h1>{{value.title}}</h1>
        <h1>{{value.views}}</h1>

    </div>
</div>
</template>

<style scoped>
.wrapper{
    display: flex;
    flex-direction: column;
    margin: 5px;
}
</style>