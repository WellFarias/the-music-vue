<template>
   <v-main>
    <nav-bar></nav-bar>
       <v-container fluid class="container">
           <v-card elevation="0" class="mt-5 mb-5">
               <div class="d-flex flex-row flex-wrap pa-5">
                   <div class="box-filters">
                       <v-card-title class="pa-0 mt-2 mb-5">Filtro de Produtos</v-card-title>
                       <v-text-field 
                            v-model="search"
                            label="O que você procura ?"
                            outlined
                            dense
                            append-icon="mdi-magnify"
                        ></v-text-field>
                        <v-list>
                            <v-list-item-group>
                                <v-list-item
                                    v-for="(item, i) in items"
                                    :key="i"
                                >
                                    <v-list-item-icon>
                                        <v-icon>{{item.icon}}</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title v-text="item.text"></v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </div>
                    <div class="box-container-cards d-flex flex-row flex-wrap justify-center">
                        <div class="ma-6" v-for="( instrument, i ) in searching" :key="i">
                        <v-hover v-slot="{ hover }" class="elevation" >
                                    <v-card 
                                        min-width="234"
                                        max-width="234"  
                                        min-height="440"
                                        max-height="440"
                                        :elevation="hover ? 12 : 0"
                                        :class="{ 'on-hover': hover }"
                                        class="card_size"
                                        @click="getProduct(i)"
                                    >
                                        <img 
                                            :src="instrument.picture" 
                                            class="contain"
                                        >
                                        <v-card-text>
                                            <p>{{ instrument.name }}</p>
                                            <h1 class="font-weight-regular" >{{ instrument.price }}</h1>
                                            <p class="green--text mt-1 ml-5" >em até {{ instrument.plots }}</p>
                                            <p v-if="instrument.delivery" class="green--text">
                                                <v-icon class="green--text">mdi-truck</v-icon>
                                            Pronta entrega</p>
                                        </v-card-text>
                                    </v-card>
                            </v-hover>
                    </div>
                   </div>
               </div>
           </v-card>
       </v-container>
        <Footer></Footer>
    </v-main>
</template>

<script lang="ts" >

import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import { InstrumentsModule } from '../store/modules/instrumentsModule'
import { mdiGuitarElectric, mdiGuitarAcoustic, mdiAmplifier,  mdiPiano, mdiMicrophoneVariant, mdiGuitarPick } from '@mdi/js'
import NavBar  from '../components/NavBar.vue'

@Component({
    name: 'Store',
    components: { NavBar }
})

export default class Store extends Vue {

    instrumentsModule = getModule(InstrumentsModule, this.$store)
    index = -1
    search = ""
    items = [
        {
          icon: mdiGuitarElectric,
          text: 'Guitarra',
        },
        {
          icon: mdiGuitarAcoustic,
          text: 'Violão',
        },
        {
          icon: 'mdi-send',
          text: 'Baixo',
        },
        {
          icon: 'mdi-email-open',
          text: 'Bateria',
        },
        {
            icon:  mdiPiano,
            text: "Teclas"
        },
        {
          icon: 'mdi-email-open',
          text: 'Ukulele',
        },
        {
          icon: mdiAmplifier,
          text: 'Amplificadores',
        },
        {
          icon: mdiGuitarPick,
          text: "Acessórios",
        },
        {
          icon: mdiMicrophoneVariant,
          text: 'Microfones',
        },
      ]

    get instruments() {
        return this.instrumentsModule.instruments
    }

    get instrument() {
        return this.instrumentsModule.instrument
    }

    get searching() {
        return this.instruments.filter( instrument => {
            return instrument.name.match(this.search)
       })
    }

    getProduct(i: any){
        var id;
        this.index = i
        id = this.instruments[i].id
        this.$router.push({ name: 'DetailsProducts', params: { id } })
        console.log(id)
    }

    created() {
        this.instrumentsModule.findAll().then(res => {
            console.log(this.instruments)
        })
    }

}
</script>

<style>
.container {
    width: 95%;
}

.contain {
    object-fit: scale-down;
    object-fit: contain;
    height: 280px;
    width: 100%;
    border-bottom: solid 1px rgb(235, 235, 235);
}

.elevation {
    transition: 0.5s;
}

/* .box-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
} */

.box-filters {
    width: 20%;
}

.box-container-cards {
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* justify-content: center; */
    width: 80%;
}

.box-cards {
    margin: 36px;
}

</style>