<template>
     <v-main>
        <nav-bar></nav-bar>
        <v-container 
            fluid
            class="container"
        >
            <v-card elevation="0" class="mt-5">
                <v-card-title>Detalhes do Produto</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="8" >
                            <v-carousel
                                height="450"
                                hide-delimiter-background
                                show-arrows-on-hover
                            >
                                <v-carousel-item
                                    class="carousel"
                                >
                                    <div class="content">
                                        <img
                                            :src="instrument.picture"
                                            class="contains"
                                        >
                                    </div>
                                </v-carousel-item>
                            </v-carousel>
                        </v-col>
                        <v-col cols="4" >
                            <v-row>
                                <h1 
                                    class="font-weight-regular ml-5"
                                    style="line-height: 35px"
                                >{{ instrument.name }}
                                </h1>
                            </v-row>
                            <v-row>
                               <p class=" font-weight-regular ml-5 mt-5 ">Marca: {{ instrument.brand }}</p>
                            </v-row>
                            <v-row>
                               <p class=" font-weight-regular ml-5 ">Cor: {{ instrument.color }}</p>
                            </v-row>
                            <v-row>
                               <p class=" font-weight-regular ml-5 ">Origem: {{ instrument.from }}</p>
                            </v-row>
                            <v-row>
                               <p class=" font-weight-regular ml-5 ">{{ instrument.isUsed ? "Usado" : "Novo" }}</p>
                            </v-row>
                            <v-row>
                                 <p class=" font-weight-regular ml-5 ">Descrição do Produto:</p>
                            </v-row>
                            <v-row>
                                 <p class=" font-weight-regular ml-5 ">{{ instrument.description }}</p>
                            </v-row>
                            <v-row>
                                <h1 class="font-weight-regular ml-5 " >{{ instrument.price }}</h1>
                            </v-row>
                            <v-row>
                                <p class="green--text mt-1 ml-16" >em até {{ instrument.plots }}</p>
                            </v-row>
                            <v-row class="mt-10" >
                                <p class="ml-5 font-weight-regular ">Formas de pagamentos:</p>
                            </v-row>
                            <v-row class="mt-5" >
                                <v-col cols="3" >
                                    <v-img
                                        width="60" 
                                        src="https://kontaazul.com.br/wp-content/uploads/2020/05/mastercard.jpg"></v-img>
                                </v-col>
                                <v-col cols="3" >
                                    <v-img
                                        width="60" 
                                        src="https://logodownload.org/wp-content/uploads/2016/10/visa-logo-8.png" ></v-img>
                                </v-col>
                                <v-col cols="3" >
                                    <v-img
                                        width="60" 
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg/2560px-Logo%E2%80%94pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.svg.png"></v-img>
                                </v-col>
                                <v-col cols="3" >
                                    <v-img
                                        width="60" 
                                        src="https://audiconsc.com/site/wp-content/uploads/2018/01/cards-boleto.png" ></v-img>
                                </v-col>
                            </v-row>
                            <v-row class="mt-10" justify="end" >
                                <v-btn 
                                    elevation="0" 
                                    class="white--text mr-3 "  
                                    color="green accent-4"
                                    large
                                >Comprar
                                   <v-icon class="ml-3">mdi-shopping</v-icon>
                               </v-btn>
                           </v-row>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-container>
    </v-main>
</template>

<script lang="ts" >

import { Vue, Component } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import { InstrumentsModule } from '../store/modules/instrumentsModule'
import NavBar from '@/components/NavBar.vue'

@Component({
    name: 'DetailsProducts',
    components: { NavBar }
})

export default class DetailsProducts extends Vue {

    instrumentsModule = getModule(InstrumentsModule, this.$store)

    get instruments() {
        return this.instrumentsModule.instruments
    }

    get instrument() {
        return this.instrumentsModule.instrument
    }

    getById() {
        this.instrumentsModule.findById(this.$route.params.id).then( res => {
            console.log("OK", res)
        }).catch( error => {
            console.log( error )
        } )
    }

    created() {
        this.getById()
        this.instrumentsModule.findAll()
    }
}
</script>

<style scoped>

.container {
    width: 90%;
}

.contains {
    height: 100%;
    width: 100%;
    object-fit: scale-down;
    object-fit: contain;
}

.content {
    border: solid 1px rgb(230, 230, 230);
    height: 100%;
    width: 100%;
}

</style>