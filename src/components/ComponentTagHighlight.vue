<template>
  <node-view-wrapper class="tag-highlight">
    <div>
      <span v-html="text"></span>
    </div>
  </node-view-wrapper>
</template>

<script>
import { nodeViewProps, NodeViewWrapper } from '@tiptap/vue-2'

export default {
  name: "ComponentTagHighlight",

  components: {
    NodeViewWrapper,
  },

  mounted() {
    console.log(this.text)
  },

  data() {
    return {
      text: this.node.attrs.text,
    }
  },

  props: nodeViewProps,
}
</script>

<style scoped>

</style>