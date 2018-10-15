<template>
    <div class="layout">
        <Layout >
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" according="true" active-name="1">
                    <div class="layout-logo">
                        <img src="../images/logo.png" height="100%">
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1" to="home">
                            <Icon type="md-home"/>
                            网站首页
                        </MenuItem>
                        <MenuItem name="2" to="aboutus">
                            <Icon type="md-people"/>
                            关于贺泰
                        </MenuItem>
                        <MenuItem name="3" to="product">
                            <Icon type="ios-analytics"/>
                            产品中心
                        </MenuItem>
                        <MenuItem name="4" to="news">
                            <Icon type="ios-paper"/>
                            业务动态
                        </MenuItem>
                        <MenuItem name="5" to="link" >
                            <Icon type="ios-call"/>
                            联系我们
                        </MenuItem>

                    </div>
                </Menu>
            </Header>
            <Content >
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

