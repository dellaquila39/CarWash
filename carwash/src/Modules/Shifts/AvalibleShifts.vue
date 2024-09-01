<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="3" v-for="(mes, index) in meses" :key="index">
                <v-btn class="ov-btn-slide-bottom" style="width: 6cm; height: 6cm">{{ mes }}</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default{
    name: 'AvalibleShifts',
    data() {
        return {
            meses: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
        }
    }
}
</script>

<style scoped>
.ov-btn-slide-bottom {
    display: block; /* hacer que el botón sea un elemento de bloque */
    width: 6cm; /* ancho del botón */
    height: 6cm; /* alto del botón */
    font-family: fantasy; /* tipo de fuente */
    font-size: 64px; /* tamaño de la fuente */
    background: #000000 !important; /* color de fondo */
    color: #314c7d; /* color de fuente */
    border: 5px solid rgb(22, 120, 185); /* tamaño y color de borde */
    padding: 16px 20px;
    border-radius: 20px; /* redondear bordes */
    position: relative;
    z-index: 1;
    overflow: hidden;
}

.ov-btn-slide-bottom:hover {
    background: #000000 !important; /* color de fuente hover */
    box-shadow: 0px 0px 50px rgba(0, 0, 0); /* agregar sombra */
}

.ov-btn-slide-bottom::after {
    content: "";
    background: linear-gradient(to right, rgba(13, 27, 87, 0.5), rgba(22, 120, 185, 0.5)); /* color de fondo hover */
    position: absolute;
    z-index: -1;
    padding: 16px 20px;
    display: block;
    left: 0;
    right: 0;
    top: 100%;
    bottom: -100%;
    -webkit-transition: all 1s;
    transition: all 1s;
}

.ov-btn-slide-bottom:hover::after {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    -webkit-transition: all 1s;
    transition: all 1s;
}
</style>