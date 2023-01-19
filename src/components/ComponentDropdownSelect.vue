<template>
    <node-view-wrapper class="dropdown-select">
        <select class="text-caption text-black">
            <option :selected="true" :disabled="true" hidden="true" value="">select</option>
            <option v-for="option in options" :key="option.idx" :value="option.value">
                {{ option.label }}
            </option>
        </select>
    </node-view-wrapper>
</template>

<script>
import { nodeViewProps, NodeViewWrapper } from '@tiptap/vue-2'

export default {
    components: {
        NodeViewWrapper,
    },

    data() {
        return {
            options: this.node.attrs.options,
        }
    },

    props: nodeViewProps,

    methods: {
        increase() {
            this.updateAttributes({
                // count: this.node.attrs.count + 1,
            })
        },
    },
}
</script>

<style lang="scss">
.dropdown-select {
    display: inline;
    margin-right: 0.5rem;
    padding-right: 0.5rem;
    border-right: 1px solid gray;
}

select {
    border: 1px solid rgba(0, 0, 0, 0.87);
    border-radius: 0.25rem;
    padding: 0 0.25rem;
    text-align: center;
}
</style>