<script setup>
const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
}
</script>
<template>
  <div class="footer">
    <p class="footer-section">
      © 2023 CLICK FASHION. Wszelkie prawa zastrzeżone.
    </p>
    <div class="footer-section">
      <div class="footer-scroll-container" @click="scrollToTop">
        <i-arrowup class="icon" />
      </div>
    </div>
    <p class="footer-section">
      Proudly made by grupa 2 PWA Synchroniczne
    </p>
  </div>
</template>
<style scoped>
.footer {
  background-color: #111;
  padding: 2rem 8rem;
  color: white;
  display: flex;
  justify-content: space-between;
}
.footer-section {
  flex: 1;
}
.footer-scroll-container {
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #fff;
  width: 44px;
  height: 32px;
  font-size: 14px;
  cursor: pointer;
}
.icon {
  color: #fff;
}
</style>
