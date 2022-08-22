<template>
  <div class="flex felx-row h-screen">
    <EmrTree class="w-80"></EmrTree>
    <EmrEditor class="shadow-xl flex-auto"></EmrEditor>
  </div>
</template>

    
<script>
import EmrEditor from "./components/EmrEditor.vue"
import EmrTree from "./components/EmrTree.vue";

export default {
  components: {
    EmrTree,
    EmrEditor,
  }
}
</script> 

<style>
</style>