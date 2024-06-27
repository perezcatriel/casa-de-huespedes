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
    justify-content: space-between;
    margin: 10px;
}

img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

ul {
    list-style: none;
    margin-top: 60px;
}

a {
    text-decoration: none;
    cursor: pointer;
}

li {
    font-size: 40px;
    padding: 10px;
    text-align: center;
}

li:hover {
    color: chartreuse;
}
</style>