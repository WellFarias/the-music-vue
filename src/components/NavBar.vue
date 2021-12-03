<template>
    <div>
        <v-app-bar
            color="black"
            height="65px"
        >
            <img class="ml-15" src="the-music.svg" alt="logo-the-music" srcset="">
            <v-spacer></v-spacer>
            <v-badge
                bordered
                color="red"
                overlap
                :content="this.cart.length < 1 ? '0' : this.cart.length"
                class="mr-15"
            >
                <v-btn
                    class="white--text"
                    depressed
                    fab
                    small
                    outlined
                    @click="cartDialog = !cartDialog"
                >
                    <v-icon style="font-size: 155%">mdi-cart-variant</v-icon>
                </v-btn>
            </v-badge>
        </v-app-bar>
        <CartDialog :cartDialog="cartDialog"></CartDialog>
    </div>
</template>

<script lang="ts">

import { Vue, Component, Prop, VModel } from 'vue-property-decorator'
import { InstrumentsModule } from '../store/modules/instrumentsModule'
import { getModule } from 'vuex-module-decorators'
import CartDialog from '@/components/CartDialog.vue'

@Component({
    name: 'NavBar',
    components: { CartDialog }
})

export default class NavBar extends Vue {

    @Prop({ type: Function }) method: any

    instrumentsModule = getModule(InstrumentsModule, this.$store)
    cartDialog = false
    cart = [
        'Guitarra Fender Stratocaster',
        'Bateria Nagano',
        'Amplificador Fender Frontman 212R',
        'Pedal JHS Double Barrel'
    ]
    
    get instrument() {
        return this.instrumentsModule.instrument
    }

    get instruments() {
        return this.instrumentsModule.instruments
    }
}
</script>

<style scoped>

div {
  height: 65px;
  align-items: center;
}

img {
    height: 90%;
}

</style>