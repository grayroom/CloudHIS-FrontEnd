<template>
  <div class="min-h-screen bg-gray-100">
    <EmrHeader></EmrHeader>
    <div class="flex flex-row">
      <EmrSideBar></EmrSideBar>
      <EmrContent></EmrContent>
      <EmrEditor></EmrEditor>
    </div>
  </div>
</template>

    
<script>
import EmrSideBar from "./components/EmrSideBar.vue"
import EmrHeader from "./components/EmrHeader.vue"
import EmrContent from "./components/EmrContent.vue";
import EmrEditor from "./components/EmrEditor.vue";

export default {
  components: {
    EmrSideBar,
    EmrHeader,
    EmrContent,
    EmrEditor
  }
}
</script> 

<style>
</style>