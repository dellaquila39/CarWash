<template>
    <v-app class="app-card">
        <v-container>
            <v-row>
                <v-col>
                    <h1>¿Quiénes Somos?</h1>
                    <p class="mb-4">En CarWash, somos apasionados por la excelencia en el cuidado y la limpieza de vehículos. Nos especializamos en el lavado de autos al detalle, ofreciendo un servicio personalizado que va más allá de lo convencional. Entendemos que tu vehículo es una inversión valiosa y nuestro objetivo es mantenerlo en las mejores condiciones, resaltando su brillo natural y protegiendo su acabado.</p>
                </v-col>
            </v-row>
            <v-row justify="center" class="images-row">
                <v-col cols="4" v-for="(image, index) in images" :key="index">
                    <v-card class="mx-auto" max-width="300">
                        <v-sheet class="image-container">
                            <v-img :src="image.src" alt="imagen" class="image"/>
                        </v-sheet>
                        <v-sheet class="description-container">
                            {{ image.description }}
                        </v-sheet>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import imgbasico from '../assets/imgbasico.jpg';
import imgintermedio from '../assets/imgintermedio.jpg';
import imgpremiun from '../assets/imgpremiun.jpg';

export default {
    name: 'DescriptionLetters',
    data() {
        return {
            images: [
                {
                    src: imgbasico,
                    description: 'Lavado Básico: Un lavado rápido y eficiente que incluye limpieza exterior del vehículo, lavado de llantas y secado a mano, dejando tu auto limpio y reluciente en poco tiempo',
                    descriptionVisible: false,
                    flipped: false
                },
                {
                    src: imgpremiun,
                    description: 'Lavado Intermedio: Además de la limpieza exterior, este servicio incluye una limpieza detallada de llantas, lavado de los cristales por dentro y por fuera, y una aspiración ligera del interior para un acabado más completo.',
                    descriptionVisible: false,
                    flipped: false
                },
                {
                    src: imgintermedio,
                    description: 'Lavado Premium: Nuestro servicio más completo, que abarca un lavado exterior profundo, limpieza de llantas, cristales y espejos, aspiración detallada del interior, limpieza de tapicería, y aplicación de cera para un brillo y protección duraderos.',
                    descriptionVisible: false,
                    flipped: false
                }
            ]
        };
    },
};
</script>

<style scoped>
.image-container {
    position: relative;
    border: 8px solid #000000;
    overflow: hidden;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    transition: transform 2.5s ease-in-out;
}

.image-container:hover .image {
    transform: translateY(-510px);
}

.description-container {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-250px);
    width: calc(100% - 20px);
    height: 0%; /* Ajusta esto según lo alto que quieras que sea la descripción */
    background-color: rgba(255, 255, 255, 0.8); /* Fondo semitransparente */
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    
    transition: transform 0.5s ease-out; /* Anima la aparición */
}

.image:hover .description-container {
    transform: translateX(-50%) translateY(0); /* Muestra la descripción al pasar el mouse */
}
</style>