<script setup>
const mobileMenu = ref(false)
const showMobileMenu = () => {
  mobileMenu.value = !mobileMenu.value
}
</script>
<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container is-fullhd">
      <div class="navbar-brand">
        <NuxtLink class="navbar-item" to="/">
          <img src="assets/logo/logo.png">
        </NuxtLink>

        <a role="button"
           class="navbar-burger"
           aria-label="menu"
           aria-expanded="false"
           data-target="navbarBasicExample"
           @click="showMobileMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" :class="{'navbar-menu': !mobileMenu}">
        <div class="navbar-start">
          <NuxtLink class="navbar-item" to="/list">
            Dla meżczyzn
          </NuxtLink>

          <a class="navbar-item">
            Dla kobiet
          </a>
          <a class="navbar-item">
            Dla dzieci
          </a>
          <a class="navbar-item">
            Promocje
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </nav>
</template>
<style scoped lang="scss">
div {
  .navbar-item {
    text-transform: uppercase;
  }

}
</style>