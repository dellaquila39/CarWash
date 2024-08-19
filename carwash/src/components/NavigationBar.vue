<template>
    <v-app class="app">
        <v-app-bar app color="black" class="white--text">
            <v-toolbar-title>Lavado al Detalle!</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn text class="white--text" @click="goToStart">Inicio</v-btn>
                <v-btn text class="white--text" @click="goToShifts">Turnos</v-btn>
                <v-btn text class="white--text" @click="goToServices">Servicios</v-btn>
                <v-btn text class="white--text" @click="goToContact">Contacto</v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </v-app>
</template>

<script>
export default {
    name: 'NavigationBar',
    methods: {
        goToStart() {
            this.$router.push('/Start');
        },
        goToShifts() {
            this.$router.push('/Shifts');
        },
        goToServices() {
            this.$router.push('/Services');
        },
        goToContact() {
            this.$router.push('/Contact');
        }
    }
};
</script>

<style>

</style>