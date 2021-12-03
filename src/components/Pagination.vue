<template>
    <div class="text-center">
        <v-pagination
        color="red"
        v-model="page"
        :length="4"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
        ></v-pagination>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { component } from 'vue/types/umd';

@Component({
    name: 'Pgination',
    components: { }
})

export default class Pagnation extends Vue {

    page = 1
}

</script>