<template>
    <node-view-wrapper class="editable">
        <node-view-content class="editable" />
    </node-view-wrapper>
</template>

<script>
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-2'

export default {
    components: {
        NodeViewWrapper,
        NodeViewContent,
    },

    props: nodeViewProps,
}
</script>

<style lang="scss">
.editable {
    display: inline;
}
</style>