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
                title: ''
            },//佛山市南海区贺泰化工有限公司
            component: (resolve) => require(['./views/home/home.vue'], resolve)
        },{
            path: '/aboutus',
            name: 'aboutus',
            meta: {
                title: '关于我们_贺泰(Hetai)官网'
            },
            component: (resolve) => require(['./views/aboutus/companyInfo.vue'], resolve)
        }, {
            path: '/product/qingfusuan',
            name: 'qingfusuan',
            meta: {
                title: '产品中心_氢氟酸_贺泰(Hetai)官网'
            },
            component: (resolve) => require(['./views/product/qingfusuan.vue'], resolve)
        }, {
            path: '/product/niaosuan',
            name: 'niaosuan',
            meta: {
                title: '产品中心_尿酸_贺泰(Hetai)官网'
            },
            component: (resolve) => require(['./views/product/niaosuan.vue'], resolve)
        }, {
            path: '/product/fuhuaqingan',
            name: 'fuhuaqingan',
            meta: {
                title: '产品中心_氟化氢铵_贺泰(Hetai)官网'
            },
            component: (resolve) => require(['./views/product/fuhuaqingan.vue'], resolve)
        }, {
            path: '/product/fuhuaan',
            name: 'fuhuaan',
            meta: {
                title: '产品中心_氟化铵_贺泰(Hetai)官网'
            },
            component: (resolve) => require(['./views/product/fuhuaan.vue'], resolve)
        }, {
            path: '/news/company',
            name: 'news_company',
            meta: {
                title: '公司新闻_贺泰(Hetai)官网'
            },
            component: (resolve) => require(['./views/news/company.vue'], resolve)
        }, {
            path: '/news/industry',
            name: 'news_industry',
            meta: {
                title: '行业新闻_贺泰(Hetai)官网'
            },
            component: (resolve) => require(['./views/news/industry.vue'], resolve)
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
