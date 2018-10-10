const routers = [
    {
        path: '/',
        name: '_home',
        meta: {
            hideInMenu: true,
            notCache: true
        },
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            hideInMenu: true,
            title: '佛山市南海区贺泰化工有限公司',
            notCache: true,
            icon: 'md-home'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    }, {
        path: '/product',
        name:'product',
        meta: {
            title: '产品中心'
        },
        component: (resolve) => require(['./views/product/qingfusuan.vue'], resolve)
    }


];
export default routers;
