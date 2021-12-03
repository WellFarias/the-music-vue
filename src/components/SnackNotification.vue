<template>
    <v-snackbar 
        v-model="snack"
        color="success"
        top
        right
    >
        <div>
            <div class="d-flex justify-space-around pa-1">
                <b>Item salvo com sucesso !</b>
            </div>
        </div>
    </v-snackbar>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'


@Component({
    name: 'SnackNotification',
    components: { }
})

export default class SnackNotification extends Vue {

    snack = true

}
</script>

<style>

</style>