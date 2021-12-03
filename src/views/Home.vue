<template>
    <v-content>
        <v-content>
            <v-parallax 
                src="https://i.pinimg.com/originals/7e/a3/b3/7ea3b3d75aad51f7a0e47f0ed82b5994.jpg"
                height="848"
            >
                <v-row>
                    <v-col>
                        <img src="the music svg.svg" alt="" srcset="">
                    </v-col>
                    <v-col>
                        <v-content style="text-align: center; margin-top: 55%; height: 820px">
                            <h1 class="font-weight-regular" id="title">The Music</h1>
                            <h3 class="font-weight-regular">Estúdio para ensaios</h3>
                            <h3 class="font-weight-regular">Compra e venda de instrumentos musicais</h3>
                            <v-btn class="mt-10" outlined color="white" x-large>Saiba Mais</v-btn>
                        </v-content>
                    </v-col>
                </v-row>
            </v-parallax>
        </v-content>
    </v-content>
</template>

<script>

import { Vue, Component } from 'vue-property-decorator'

@Component({
    name: 'Home',
    components: {}
})

export default class Home extends Vue {


}
</script>

<style scoped>
#title {
    font-size: 5rem;
}

.section-1 {
    background-color: rgb(17, 17, 17);
    margin-top: 0;
}

img {
    margin-top: 50%;
}
</style>