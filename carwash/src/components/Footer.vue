<template>
    <v-container class="container">
        <v-footer color="black" class="white--text">
            <v-col class="text-center py-4">
                <v-row>
                    <v-col cols="12">
                    <h2 class="mb-4">Agustín, Front-End Developer</h2>
                    <p class="mb-4">Desarrollador web especializado en crear soluciones efectivas y visualmente atractivas.</p>
                    </v-col>
                </v-row>

            <v-row justify="center">
                <v-col cols="auto">
                    <v-btn icon href="https://www.linkedin.com/in/agustin-dell-aquila/" target="_blank">
                        <v-icon large>mdi-linkedin</v-icon>
                    </v-btn>
                </v-col>

                <v-col cols="auto">
                    <v-btn icon href="dellaquila39492276@hotmail.com">
                        <v-icon large>mdi-email</v-icon>
                    </v-btn>
                </v-col>

                <v-col cols="auto">
                    <v-btn icon href="https://github.com/dellaquila39" target="_blank">
                        <v-icon large>mdi-github</v-icon>
                    </v-btn>
                </v-col>
            </v-row>

            <v-row>
                <v-col class="mt-4">
                    <p>© {{ new Date().getFullYear() }} Agustín Dell Aquila - Todos los derechos reservados.</p>
                </v-col>
            </v-row>
        </v-col>

        </v-footer>
    </v-container>
</template>

<script>
export default{
    name: 'Footer'
}
</script>

<style scoped>
.container {
    width: 100%;
}

.v-footer {
    background-color: black;
    font-family: "Roboto", sans-serif;
}

.white--text {
    color: white;
}

.v-btn .v-icon {
    color: white;
}
.v-btn .v-icon:hover {
    color: #314c7d;
    border: 20px  #314c7d;
    border-radius: 50%;
}
</style>