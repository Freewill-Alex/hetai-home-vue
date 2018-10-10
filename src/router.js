
const routers = [{
        path: '/',
        name: '_home',
        redirect: '/home',
        meta: {
            hideInMenu: true,
            notCache: true
        },
        children: [
            {
                path: '/home',
                name: 'home',
                meta: {
                    hideInMenu: true,
                    title: '首页',
                    notCache: true,
                    icon: 'md-home'
                },
                component: () => import('./views/index.vue')
            }
        ]
    }, {
            path: '/product',
            name:'product',
            meta: {
                title: '产品中心'
            },
            component: (resolve) => require(['./views/product/qingfusuan.vue'], resolve)
        }
    ]
;
export default routers;