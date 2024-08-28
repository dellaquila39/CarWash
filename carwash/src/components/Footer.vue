    <!-- <template>
        <v-footer color="black" class="white--text footer-hidden" app>
            <v-col class="text-center py-4" cols="12">
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
</template>

<script>
export default{
    name: 'Footer',
    mounted() {
        window.addEventListener('scroll', this.showFooter);
    },
    methods: {
        showFooter() {
        const footer = document.querySelector('.footer-hidden');
        const scrollPosition = window.scrollY + window.innerHeight;
        const footerTop = footer.offsetTop;
        const scrollingDown = scrollPosition > this.lastScrollPosition;

        if (scrollingDown && scrollPosition >= footerTop) {
            footer.classList.remove('footer-hidden');
        } else if (!scrollingDown && scrollPosition < footerTop) {
            footer.classList.add('footer-hidden');
        }
        this.lastScrollPosition = scrollPosition;
        }
    }
}
</script>

<style scoped>
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

.footer-hidden {
    display: none;
}
</style> -->