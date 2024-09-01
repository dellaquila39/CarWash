<template>
    <v-app class="app">
        <v-app-bar app color="black" class="white--text">
            <v-btn icon class="white--text" @click="$router.go(-1)" title="Atrás">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-btn icon href="" target="_blank">
                <v-icon class="instagram-icon" large>mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon href="" target="_blank">
                <v-icon class="whatsapp-icon" large>mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn icon href="" target="_blank">
                <v-icon class="email-icon" large>mdi-email-outline</v-icon>
            </v-btn>
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
            this.$router.push('/');
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

<style scoped>
.v-btn .v-icon:hover{
    color: #314c7d;
    border: 20px  #314c7d;
    border-radius: 50%;
}
.white--text:hover{
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(49, 76, 125, 0.4); 
}
.whatsapp-icon, .instagram-icon, .email-icon{
    color: #314c7d !important;
    border-bottom: none !important;
    padding: 5px;
}
.whatsapp-icon:hover, .instagram-icon:hover, .email-icon:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(49, 76, 125, 0.4);
    border-radius: 50%;
}

</style>