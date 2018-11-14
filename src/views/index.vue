<template>
    <div class="layout">
        <Layout>
                <Menu mode="horizontal" :theme="light" according="true" active-name="1">
                    <div class="layout-logo">
                        <img src="../../static/images/logo.png"  >
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1" to="/home">
                            <Icon type="md-home"/>
                            网站首页
                        </MenuItem>
                        <!--<MenuItem name="2" to="aboutus">-->
                        <!--<Icon type="md-people"/>-->
                        <!--关于贺泰-->
                        <!--</MenuItem>-->
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="md-people"/>
                                关于贺泰
                            </template>
                            <MenuItem name="2-1" to="/aboutus">公司概况</MenuItem>
                            <MenuItem name="2-2">公司文化</MenuItem>
                            <MenuItem name="2-3">品牌故事</MenuItem>
                            <MenuItem name="2-3">资质证书</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"/>
                                产品中心
                            </template>
                            <MenuItem name="3-1" to="/product/qingfusuan">氢氟酸</MenuItem>
                            <MenuItem name="3-2" to="/product/niaosuan">尿酸</MenuItem>
                            <MenuItem name="3-3" to="/product/fuhuaqingan">氟化氢铵</MenuItem>
                            <MenuItem name="3-4" to="/product/fuhuaan">氟化铵</MenuItem>
                            </MenuGroup>
                        </Submenu>
                        <Submenu name="4">
                            <template slot="title">
                                <Icon type="ios-paper"/>
                                新闻动态
                            </template>
                            <MenuItem name="4-1" to="/news/company">公司新闻</MenuItem>
                            <MenuItem name="4-2" to="/news/industry">行业新闻</MenuItem>
                            </MenuGroup>
                        </Submenu>
                        <MenuItem name="5" to="/link">
                            <Icon type="ios-call"/>
                            联系我们
                        </MenuItem>

                    </div>
                </Menu>
            <Content>
                <router-view></router-view>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>

</template>

<script>
    export default {
        name: "hetai-header",
        data() {
            return {msg: 'vue模板页'}
        }
    }

</script>

<style scoped>
    .layout {
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;

    }
    img {
        border-style: none;
        width: 230px;
        height: 230px;
        margin-top: -100px;
    }
    .layout-logo {
        width: 100px;
        height: 30px;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-nav {
        float: right;
        height: 100%;
    }

    .layout-footer-center {
        text-align: center;
    }


</style>

