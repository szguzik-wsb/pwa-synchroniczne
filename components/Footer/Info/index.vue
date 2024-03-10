<script setup>
const props = defineProps(
    {
      title: {
        type: String,
        default: () => 'Domyślna wartość'
      },
      content: {
        type: String,
        default: () => 'Domyślna wartość'
      }
    }
)

const description = ref(props.title)

const clickbutton = () => description.value = 'Opis'
const clickbutton2 = () => props.title = 'Opis' // ta operacja sie nie wykona bo props jest na modyfikatorze readonly

</script>
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    <p>{{ description }}</p>
  </div>

  <button @click="clickbutton">Klik</button>
  <button @click="clickbutton2">Klik2</button>

</template>
<style scoped lang="scss">
div {
  background-color: #f4f4f4;
  color: #333;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  h1 {
    font-size: 1.5em;
    margin-bottom: 5px;
  }

  p {
    font-size: 1.2em;
  }
}
</style>