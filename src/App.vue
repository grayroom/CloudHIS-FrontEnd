<template>
  <div class="flex felx-row h-screen dark:bg-gray-800 dark:text-white">
    <EmrTree class="w-80 min-w-[80] flex-grow-0 flex-shrink-0"></EmrTree>
    <EmrEditor class="w-[100%-20rem] flex-grow flex-shrink"></EmrEditor>
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