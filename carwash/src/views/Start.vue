<template>
    <v-app class="app">
        <v-carousel cycle height="600" show-arrows-on-hover>
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" class="carousel-image">
                <v-row class="fill-height" align="center" justify="center">
                    <v-col cols="12" md="6" class="text-center">
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.description }}</p>
                    </v-col>
                </v-row>
            </v-carousel-item>
        </v-carousel>
    </v-app>
</template>

<script>
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

export default{
    name: 'Stars',
    data() {
        return {
            items: [
                {
                    src: img1,
                    title:'',
                    description:'',
                },
                {
                    src: img2,
                    title:'',
                    description:'',
                },
                {
                    src: img3,
                    title:'',
                    description:'',
                },
                {
                    src: img4,
                    title:'',
                    description:'',
                },
            ]
        }
    }
}

</script>

<style scoped>
.v-carousel {
    border-radius: 10px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
}

.v-carousel__item {
    background-size: cover;
    background-position: center; 
}
.carousel-image {
    max-width: 2500px;
    margin: 0 auto;
}
</style>