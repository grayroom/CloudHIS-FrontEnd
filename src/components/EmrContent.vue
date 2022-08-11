<template>
  <div class="h-[calc(100vh-4rem)] bg-gray-200 shadow-inner">
    <div class="flex justify-center pt-2 pb-6">
      <ul
        class="border-b border-r border-t border-gray-200 w-52 text-gray-900 cursor-pointer select-none"
      >
        <li class="ml-1 mr-1 mb-1 bg-white px-6 py-2 shadow">An item</li>
        <li class="ml-1 mr-1 mb-1 bg-white px-6 py-2 shadow">A second item</li>
        <li class="ml-1 mr-1 mb-1 bg-white px-6 py-2 shadow">A third item</li>
        <li class="ml-1 mr-1 mb-1 bg-white px-6 py-2 shadow">A fourth item</li>
        <li class="ml-1 mr-1 mb-1 bg-white px-6 py-2 shadow">
          And a fifth one
        </li>
      </ul>
    </div>
    메뉴
    <Tree
      id="my-tree-id"
      ref="my-tree"
      :custom-options="myCustomOptions"
      :custom-styles="myCustomStyles"
      :nodes="treeDisplayData"
    ></Tree>
  </div>
</template>

<script>
import Tree from "vuejs-tree";

export default {
  name: "TreeExample",
  components: {
    Tree,
  },
  data: function () {
    return {
      treeDisplayData: [
        {
          text: "root 1",
          state: { checked: false, selected: false, expanded: false },
          id: 1,
          checkable: false,
          nodes: [
            {
              text: "Child 1",
              state: { checked: true, selected: false, expanded: false },
              id: 3,
              checkable: false,
              nodes: [
                {
                  text: "Grandchild 1",
                  state: { checked: false, selected: false, expanded: false },
                  id: 5,
                  checkable: false,
                },
                {
                  text: "Grandchild 2",
                  state: { checked: false, selected: false, expanded: false },
                  id: 6,
                  checkable: false,
                },
              ],
            },
            {
              text: "Child 2",
              state: { checked: false, selected: false, expanded: false },
              id: 4,
              checkable: false,
            },
          ],
        },
        {
          text: "Root 2",
          state: { checked: false, selected: false, expanded: false },
          id: 2,
          checkable: false,
        },
      ],
    };
  },
  computed: {
    myCustomStyles() {
      return {
        tree: {
          style: {
            height: "auto",
            maxHeight: "300px",
            overflowY: "visible",
            display: "inline-block",
            textAlign: "left",
          },
        },
        row: {
          style: {
            width: "200px",
            cursor: "pointer",
          },
          child: {
            class: "",
            style: {
              height: "35px",
            },
            active: {
              style: {
                height: "35px",
              },
            },
          },
        },
        rowIndent: {
          paddingLeft: "20px",
        },
        text: {
          // class: "" // uncomment this line to overwrite the 'capitalize' class, or add a custom class
          style: {},
          active: {
            style: {
              "font-weight": "bold",
              color: "#2ECC71",
            },
          },
        },
      };
    },
    myCustomOptions() {
      return {
        treeEvents: {
          expanded: {
            state: false,
          },
          collapsed: {
            state: false,
          },
          selected: {
            state: true,
            fn: this.mySelectedFunction,
          },
          checked: {
            state: true,
            fn: this.myCheckedFunction,
          },
        },
        events: {
          expanded: {
            state: true,
          },
          selected: {
            state: true,
          },
          checked: {
            state: true,
          },
          editableName: {
            state: true,
            calledEvent: "expanded",
          },
        },
        addNode: {
          state: true,
          fn: this.addNodeFunction,
          appearOnHover: false,
        },
        editNode: { state: false, fn: null, appearOnHover: false },
        deleteNode: {
          state: true,
          fn: this.deleteNodeFunction,
          appearOnHover: true,
        },
        showTags: true,
      };
    },
  },
  mounted() {
    this.$refs["my-tree"].expandNode(1);
  },
  methods: {
    myCheckedFunction: function (nodeId, state) {
      console.log(`is ${nodeId} checked ? ${state}`);
      console.log(this.$refs["my-tree"].getCheckedNodes("id"));
      console.log(this.$refs["my-tree"].getCheckedNodes("text"));
    },
    mySelectedFunction: function (nodeId, state) {
      console.log(`is ${nodeId} selected ? ${state}`);
      console.log(this.$refs["my-tree"].getSelectedNode());
    },
    deleteNodeFunction: function (node) {
      const nodePath = this.$refs["my-tree"].findNodePath(node.id);
      const parentNodeId = nodePath.slice(-2, -1)[0];
      if (parentNodeId === undefined) {
        // 'root' node
        const nodeIndex =
          this.$refs["my-tree"].nodes.findIndex((x) => x.id !== node.id) - 1;
        this.$refs["my-tree"].nodes.splice(nodeIndex, 1);
      } else {
        // child node
        const parentNode = this.$refs["my-tree"].findNode(parentNodeId);
        const nodeIndex =
          parentNode.nodes.findIndex((x) => x.id !== node.id) - 1;
        parentNode.nodes.splice(nodeIndex, 1);
      }
      console.log("example: remove node", node.id);
    },
    addNodeFunction: function (node) {
      const newNode = {
        text: "Grandchild 2",
        id: Math.floor(Math.random() * 100),
        state: { checked: false, selected: false, expanded: false },
      };
      console.log("example: add node", newNode);
      if (node.nodes === undefined) {
        node.nodes = [newNode];
      } else {
        node.nodes.push(newNode);
      }
    },
  },
};
</script>

<style></style>
