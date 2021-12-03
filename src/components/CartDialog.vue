<template>
    <v-dialog 
        v-model="cartDialog"
        width="800"
    >
        <v-card>
            <v-toolbar color="black">
                <v-card-title class="font-weight-regular" style="color: white">Carrinho</v-card-title>
                <v-spacer></v-spacer>
                <v-icon color="white" class="mr-5 font-weight-regular">mdi-cart-variant</v-icon>
            </v-toolbar>
            <v-card-text>
                <v-list>
                    <v-list-item-group>
                        <v-list-item
                            v-for="(item, i) in cart"
                            :key="i"
                        >
                            <v-list-item-content>
                                <v-list-item-title v-text="item"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-btn 
                        @click="cartDialog = false"
                        outlined
                        color="grey"
                        class="mt-4 mr-3 mb-3"
                    >
                    <v-icon class="mr-3">mdi-arrow-left</v-icon>
                        Voltar
                    </v-btn>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
    name: 'CartDialog',
    components: { }
})

export default class CartDialog extends Vue {

    @Prop({ type: Boolean }) cartDialog: boolean | false

    selectedItem = 1
    cart = [
        'Guitarra Fender Stratocaster',
        'Bateria Nagano',
        'Amplificador Fender Frontman 212R',
        'Pedal JHS Double Barrel'
    ]

}
</script>

<style>

</style>