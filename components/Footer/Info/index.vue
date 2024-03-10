<script setup>
defineProps(
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

</script>
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
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