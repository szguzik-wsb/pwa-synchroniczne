
<script setup lang="ts">
import { ref } from 'vue'
const itemsList = ref([
  {
  label: "PORADNIK ZAKUPOWY",
  items: 
  [
    "Metody płatności",
    "Formy dostawy",
    "Reklamacje",
    "Zwroty, wymiana",
    "Kontakt",
    "Testowy link"],
  },
{label: "ZASADY I REGULAMINY", items: ["Regulamin sklepu",
"Regulamin karty stałego klienta",
"Regulamin karty podarunkowej",
"Saldo karty podarunkowej"],},
{
  label: "O NAS",
  items:
  ["Regulamin sklepu",
  "Regulamin karty stałego klienta",
  "Regulamin karty podarunkowej",
  "Saldo karty podarunkowej"]
}
])

</script>
<template>
  <div class="container">
    <div class="columns">      
      <div v-for="section in itemsList" class="column">  
        <div v-for="(value,b) in section">
          <p v-if="!Array.isArray(value)" class="menu-label">{{value}}</p>
					<div v-else v-for="listitem in value" class="menu-list">
            <a href="#">
              {{ listitem }}
            </a>
					</div>
        </div>
      </div>
      <div class="column">  
        <div class="icon-container">
          <i-facebook class="icon" />
          <i-x class="icon" />
          <i-instagram class="icon" />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  padding: 1rem;
}
.menu-label {
  color: #363636;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  text-align: start;
}
.menu-list {
  text-align: start;
  margin: 0;
  padding: 0.5rem 0 0 0;
}
.menu-list a {
  font-size: 0.85rem;
  color: #4a4a4a;
  padding: 0;
  margin: 5 0;
  line-height: 1.5;
  background-color: transparent;
  text-decoration: none;
  
}
.menu-list a:hover {
  text-decoration: underline;
}

.column-container {
  align-items: flex-start;
}
.icon-container {
  margin-top: 24px;
  display: flex;
  column-gap: 24px;
}
.icon {
  color: #363636;
  font-size: 36px;
}
</style>
