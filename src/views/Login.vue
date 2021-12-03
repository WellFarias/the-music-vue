<template>
    <v-main>
        <v-container fluid>
            <v-row justify="end" style="margin-top: 10%">
                <v-col cols="3">
                    <v-card elevation="0" color="grey darken-4">
                        <v-card-text>
                            <v-row justify="center" class="mt-5 mb-5">
                                <h1 class="font-weight-regular" id="title">Login</h1>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <input 
                                        type="text"
                                        placeholder="Email"
                                        class="field"
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <input 
                                        type="password"
                                        placeholder="Senha" 
                                        class="field"
                                    />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-btn 
                                        block 
                                        large
                                        outlined
                                        color="white"
                                    >Entrar</v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'

@Component({
    name: 'Login',
    components: { }
})

export default class Login extends Vue{

}
</script>

<style scoped>

#title {
    font-size: 3rem;
    color: white;
}

.field {
  width: 100%;
  height: 55px;
  border: solid 1px white;
  border-radius: 5px;
  padding: 10px;
}

::placeholder {
    color: white;
    font-size: 1rem;
}

</style>