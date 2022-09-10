<template>
  <div class="flex felx-row dark:bg-gray-800 dark:text-white">
    <EmrTree class="w-80 min-w-[80] flex-grow-0 flex-shrink-0"></EmrTree>
    <EmrEditor class="w-[100%-20rem] flex-grow flex-shrink"></EmrEditor>
  </div>
</template>

    
<script>
import EmrEditor from "./EmrEditor.vue"
import EmrTree from "./EmrTree.vue";

export default {
  components: {
    EmrTree,
    EmrEditor,
  }
}
</script> 

<style>
</style>