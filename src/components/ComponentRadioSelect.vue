<template>
    <node-view-wrapper class="radio-select border-r-2 border-r-gray-500">
        <input type='radio' v-bind:name="na" v-bind:id="posId" /><label v-bind:for="posId">(+)</label>
        <input type='radio' v-bind:name="na" v-bind:id="negId" /><label v-bind:for="negId">(–)</label>
    </node-view-wrapper>
</template>

<script>
import { nodeViewProps, NodeViewWrapper } from '@tiptap/vue-2'
import { v4 as uuidv4 } from 'uuid'

export default {
    components: {
        NodeViewWrapper,
    },

    data() {
        return {
            na: this.node.attrs.na,
            posId: uuidv4(),
            negId: uuidv4(),
        }
    },

    props: nodeViewProps,
}
</script>
<style lang="scss">
.radio-select {
    display: inline;
    margin-right: 0.5rem;
    padding-right: 0.5rem;
    border-right: 1px solid gray;
}

input[type="radio"] {
    height: 9.5px;
    padding: 4.75px;
}


input[type="radio"]:first-child+label {
    margin-right: 0.5em
}
</style>