<template>
    <v-container fluid class="container" >
        <v-card elevation="0" class="rounded-0" >
            <v-card-title>
                Lista de Instrumentos Cadastrados
                <v-spacer></v-spacer>
                <v-btn 
                    fab
                    large 
                    color="green"
                    elevation="0"
                    @click="route_register()"
                >
                    <v-icon class="white--text">
                        {{ icons.mdiPlus }}
                    </v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">
                                    Produtos
                                </th>
                                <th></th>
                                <th class="text-left">
                                    Marca
                                </th>
                                <th class="text-center">
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(instrument, i) in instruments"
                                :key="i"
                            >
                                <td>
                                    <img :src="instrument.picture">
                                </td>
                                <td>{{ instrument.name }}</td>
                                <td>{{ instrument.brand }}</td>
                                <td class="text-center" >
                                    <v-btn icon>
                                        <v-icon>mdi-pencil</v-icon>
                                    </v-btn>
                                    <v-btn icon>
                                        <v-icon @click="deleteItem(i)">mdi-delete</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card-text>
        </v-card>
        <SnackNotification></SnackNotification>
    </v-container>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import { InstrumentsModule } from '../store/modules/instrumentsModule'
import { mdiPlus } from '@mdi/js'
import SnackNotification from '@/components/SnackNotification.vue'
import Axios from 'axios'

@Component({
    name: 'InstrumentList',
    components: { SnackNotification }
})

export default class InstrumentList extends Vue {

    instrumentsModule = getModule( InstrumentsModule, this.$store )
    index = -1

    icons = {
        mdiPlus
    }

    get instrument() {
        return this.instrumentsModule.instrument
    }

    get instruments() {
        return this.instrumentsModule.instruments
    }

    route_register() {
        this.$router.push({ path: '/register' })
    }

    deleteItem(i: any){
        var id;
        this.index = i
        id = this.instruments[i].id
        this.instrumentsModule.delete(id).then(() => {
            // mensagem
        }).catch( error => {
            console.log( error )
        } )
    }

    created() {
        this.instrumentsModule.findAll()
    }
}

</script>

<style>

.container {
    width: 90%;
}

img {
    height: 100px;
    width: 100px;
    object-fit: contain;
    object-fit: scale-down;
}

</style>