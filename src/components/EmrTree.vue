<template>
	<div class="overflow-scroll-y scrollbar-hide p-4 dark:border-gray-500 h-40 md:h-full">
		<v-jstree :data="data" show-checkbox multiple allow-batch whole-row @item-click="itemClick"></v-jstree>
	</div>
</template>

<script>
import VJstree from 'vue-jstree'
import axios from 'axios'
import Cookies from 'js-cookie'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


export default {
	components: {
		VJstree,
	},
	data() {
		return {
			data: [],
		}
	},

	beforeMount() {
		var accessToken = Cookies.get('access')

		axios.get('/emr/api/templates/', {
			withCredentials: true,
			crossDomain: true,
			credentials: "access",
			headers: {
				// Authorization: "Bearer " + Cookies.get('access')
				Authorization: accessToken
			}
		})
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

.tree-ocl {
	color: 1px solid rgb(209 213 219);
}
</style>