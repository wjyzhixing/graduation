import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Personal from '@/components/Personal'
import Function from '@/components/Function'
import FunctionFile from '@/components/FunctionFile'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Main',
			component: Main
		},
		{
			path: '/personal',
			name: 'Personal',
			component: Personal
		},
		{
			path: '/function',
			name: 'Function',
			component: Function
		},
		{
			path: '/functionfile',
			name: 'FunctionFile',
			component: FunctionFile
		}
	]
})
