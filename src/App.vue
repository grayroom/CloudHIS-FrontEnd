<template>
  <div class="min-h-screen bg-gray-100 flex flex-row">
    <EmrSideBar></EmrSideBar>
    <EmrContent></EmrContent>
    <EmrEditor></EmrEditor>
  </div>
</template>

    
<script>
import EmrSideBar from "./components/EmrSideBar.vue"
import EmrContent from "./components/EmrContent.vue"
import EmrEditor from "./components/EmrEditor.vue"

export default {
  components: {
    EmrSideBar,
    EmrContent,
    EmrEditor
  }
}
</script> 

<style>
</style>