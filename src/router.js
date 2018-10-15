const routers = [
    {
        path: '/',
        name: '_home',
        title: '佛山市南海区贺泰化工有限公司',
        redirect:"home",
        meta: {
            hideInMenu: true,
            notCache: true,
            icon: 'md-home'
        },
        component: (resolve) => require(['./views/index.vue'], resolve),
        children: [  {
            path: '/home',
            name: 'home',
            meta: {
                title: '佛山市南海区贺泰化工有限公司'
            },
            component: (resolve) => require(['./views/home/home.vue'], resolve)
        },{
            path: '/aboutus',
            name: 'aboutus',
            meta: {
                title: '关于我们_贺泰(Hetai)官网'
            },
            component: (resolve) => require(['./views/aboutus/companyInfo.vue'], resolve)
        }, {
            path: '/product',
            name: 'product',
            meta: {
                title: '产品中心_贺泰(Hetai)官网'
            },
            component: (resolve) => require(['./views/product/qingfusuan.vue'], resolve)
        }, {
            path: '/news',
            name: 'news',
            meta: {
                title: '业务动态_贺泰(Hetai)官网'
            },
            component: (resolve) => require(['./views/news/articleInfo.vue'], resolve)
        }, {
            path: '/link',
            name: 'link',
            meta: {
                title: '联系我们_贺泰(Hetai)官网'
            },
            component: (resolve) => require(['./views/linkus/contact.vue'], resolve)
        }
        ]
    },


];
export default routers;
