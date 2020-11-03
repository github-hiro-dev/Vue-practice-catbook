import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProductList from '../views/ProductList.vue'
import Product from '../views/Product.vue'
import ProductHome from '../views/ProductHome.vue'
import ProductReview from '../views/ProductReview.vue'
import ProductReviewDetail from '../views/ProductReviewDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/product',
    component: ProductList
  },
  {
    path: '/product/:id(\\d+)',
    component: Product,
    props: route => ({ id: Number(route.params.id) }),
    children: [
      {
        name: 'product-home',
        path: '',
        component: ProductHome
      },
      {
        name: 'product-review',
        path: 'review',
        component: ProductReview
      },
      {
        name: 'product-detail',
        path: 'review/:rid',
        component: ProductReviewDetail
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
