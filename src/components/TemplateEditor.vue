<template>
  <div class="flex flex-col md:flex-row dark:bg-gray-800 dark:text-white gap-10 p-10 max-w-[64rem] mx-auto">
    <EmrTree class="md:max-w-[24rem] flex-grow-0 flex-shrink-0 border-gray-200 md:border-r"></EmrTree>
    <EmrEditor class="w-full flex-grow flex-shrink"></EmrEditor>
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