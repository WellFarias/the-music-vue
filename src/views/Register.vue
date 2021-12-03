<template>
    <v-container>
        <v-card elevation="0"  >
            <v-card-title>
                Registro de Instrumentos
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col>
                        <v-text-field
                        v-model="instrument.name" 
                            outlined 
                            
                            label="Nome" 
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field 
                            v-model="instrument.brand"
                            outlined 
                            
                            label="Marca" 
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-select
                            v-model="instrument.category"
                            :items="categories"
                            label="Categoria" 
                            outlined
                            
                        ></v-select>
                    </v-col>
                    <v-col>
                        <v-text-field 
                            v-model="instrument.year"
                            outlined 
                            label="Ano" 
                        ></v-text-field>
                    </v-col>
                </v-row>
                 <v-row>
                    <v-col>
                        <v-text-field 
                            v-model="instrument.color"
                            outlined 
                            
                            label="Cor" 
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field 
                            v-model="instrument.from"
                            outlined 
                            
                            label="Origem" 
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-switch
                            v-model="instrument.delivery"
                            inset
                            label="Pronta Entrega ?"
                        ></v-switch>
                    </v-col>
                    <v-col>
                        <v-switch
                            v-model="instrument.isUsed"
                            inset
                            label="Usado ?"
                        ></v-switch>
                    </v-col>
                </v-row>
                 <v-row>
                    <v-col>
                        <v-text-field 
                            v-model="instrument.price"
                            outlined 
                            
                            label="Valor" 
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field 
                            v-model="instrument.plots"
                            outlined 
                            
                            label="Parcelas" 
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field 
                            v-model="instrument.picture"
                            outlined
                            
                            label="Imagem Principal"
                            append-icon="mdi-camera"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-textarea 
                            v-model="instrument.description"
                            label="Descrição do Produto" 
                            outlined
                            
                        ></v-textarea>
                    </v-col>
                </v-row>
                <v-card-actions>
                    <v-row>
                        <v-col>
                            <v-btn 
                                block 
                                @click="save()"
                                elevation="0" 
                                color="green accent-4"
                                class="white--text"
                            >Salvar</v-btn>
                        </v-col>
                        <v-col>
                            <v-btn 
                                block 
                                @click="cancel()"
                                elevation="0"
                                outlined
                                color="grey darken-2"
                                
                            >Cancelar</v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import { InstrumentsModule } from '../store/modules/instrumentsModule'
import Instrument from '@/models/instrument'

@Component({
    name: 'Register',
    components: {}
})

export default class Register extends Vue {

    instrumentsModule = getModule(InstrumentsModule, this.$store)

    categories = [
        'Cordas',
        'Teclas',
        'Percussão',
        'Acessórios',
        'Pedais'
    ]

    get instrument() {
        return this.instrumentsModule.instrument
    }

    get instruments() {
        return this.instrumentsModule.instruments
    }

    save() {
        this.instrumentsModule.save(this.instrument).then(res => {
            console.log("INSTRUMENTO SALVO COM SUCESSO", res)
        }).catch(error => {
            console.log("ERRO AO SALVAR", error)
        })
    }

    cancel() {
        this.instrumentsModule.setInstrument(new Instrument())
    }


}
</script>

<style>

</style>