<template>
    <div class="presentation">
        <img src="../assets/sunset love.jpg" alt="img principal" class="img-principal">
        <div class="presentation__aside">
            <p>Vive Jeri al máximo: disfruta, explora y relájate en nuestra casa de huéspedes. ¡Reserva ya!</p>
            <div>
                <img src="../assets/logo 2.jpeg" alt="img 1">
                <img src="../assets/jericoacoara.jpg" alt="img 2">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CxPresentation'
}
</script>

<style>
.presentation, .presentation__aside {
    margin: 20px 0;
}

.img-principal {
    width: 100vw;
}

p {
    text-align: center;
    font-size: 30px;
    padding: 10px;
    margin-bottom: 25px;
}

.presentation__aside img {
    width: 100vw;
    margin-top: 10px;
}
</style>