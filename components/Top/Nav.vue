<script setup>
const counter = useCounter();
const mobileMenu = ref(false)
const showMobileMenu = () => {
    mobileMenu.value = !mobileMenu.value
}
</script>
<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <NuxtLink class="navbar-item logo" to="/">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
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
            <a class="navbar-item" href="/list">
                Lista produktów (nie spa)
            </a>
            <NuxtLink class="navbar-item" to="/list">
                Lista produktów
            </NuxtLink>
 
            <a class="navbar-item">
            Documentation
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

        <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
            <a class="button is-primary">
                <strong>{{ counter }}</strong>
            </a>
            <a class="button is-light">
                Log in
            </a>
            </div>
        </div>
        </div>
    </div>
    </nav>
</template>
<style scoped>
.navbar {
    background-color: #058549;
}
.navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
}
.navbar-menu.is-active {    background-color: #00d1b2;}
.navbar-menu a {
    color: #fff;
    
}

.logo {
    @media screen and (max-width: 1023px) {
        display: none;
    } 
}
</style>