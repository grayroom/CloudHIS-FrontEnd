<template>
  <div class="overflow-hidden border-gray-100 border-r p-4">
    <v-jstree :data="data" show-checkbox multiple allow-batch whole-row @item-click="itemClick"></v-jstree>


  </div>
</template>

<script>
import VJstree from 'vue-jstree'
import axios from 'axios'

export default {
  components: {
    VJstree,
  },
  data() {
    return {
      data: [
        {
          "text": "Same but with checkboxes",
          "icon": "fa fa-folder",
          "children": [
            {
              "text": "initially selected",
              "icon": "fa fa-folder",
              "selected": true
            },
            {
              "text": "custom icon",
              "icon": "fa fa-warning icon-state-danger"
            },
            {
              "text": "initially open",
              "icon": "fa fa-folder",
              "opened": true,
              "children": [
                {
                  "text": "Another node",
                  "icon": "fa fa-folder"
                }
              ]
            },
            {
              "text": "custom icon",
              "icon": "fa fa-warning icon-state-warning"
            },
            {
              "text": "disabled node",
              "icon": "fa fa-check icon-state-success",
              "disabled": true
            }
          ]
        },
        {
          "text": "Same but with checkboxes",
          "opened": true,
          "children": [
            {
              "text": "initially selected",
              "selected": true
            },
            {
              "text": "custom icon",
              "icon": "fa fa-warning icon-state-danger"
            },
            {
              "text": "initially open",
              "icon": "fa fa-folder icon-state-default",
              "opened": true,
              "children": [
                {
                  "text": "Another node"
                }
              ]
            },
            {
              "text": "custom icon",
              "icon": "fa fa-warning icon-state-warning"
            },
            {
              "text": "disabled node",
              "icon": "fa fa-check icon-state-success",
              "disabled": true
            }
          ]
        },
        {
          "text": "And wholerow selection",
          "icon": "fa fa-folder"
        }
      ],
    }
  },

  created() {
    axios.get('http://127.0.0.1:8000/templates/')
      .then(response => {
        for (var template in response.data) {
          this.data.push({
            "text": response.data[template].file_name,
            "id": response.data[template].id,
            "children": [],
            "icon": response.data[template].is_directory ?
              "fa fa-folder" : "fa fa-file",
          })
        }
      })
      .catch(error => {
        console.log(error)
      })
  },

  methods: {
    itemClick(node) {
      console.log(node.model.text + ' clicked !')
    }
  }
}
</script>

<style lang="scss">
.fa-folder::before {
  color: #dbc056;
}

.fa::before {
  color: #ffc107;
}
</style>