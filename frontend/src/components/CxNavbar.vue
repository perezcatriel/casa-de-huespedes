<template>
    <div class="navbar">
        <img src="../assets/logo 2.jpeg" alt="logo">
        <ul v-show="isMenuOpen" class="navbar__link" >
            <a href=""><li>Home</li></a>
            <a href=""><li>Description</li></a>
            <a href=""><li>Carusel</li></a>
            <a href=""><li>Contact</li></a>
        </ul>
        <img src="../assets/menu.svg" alt="toggle menu" @click="toggleMenu">
    </div>
</template>

<script>
export default {
    name: 'CxNavbar',
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        }
    }
}
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-around;
}

img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
</style>