<template>
  <div class="min-h-screen bg-gray-100">
    <EmrHeader></EmrHeader>
    <div class="flex flex-row">
      <EmrSideBar></EmrSideBar>
      <EmrContent></EmrContent>
    </div>
  </div>
</template>

    
<script>
import EmrSideBar from "./components/EmrSideBar.vue"
import EmrHeader from "./components/EmrHeader.vue"
import EmrContent from "./components/EmrContent.vue";

export default {
  components: {
    EmrSideBar,
    EmrHeader,
    EmrContent,
}
}
</script> 

<style>
</style>