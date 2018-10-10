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
<template>
    <div class="layout">
        <Layout :style="{position: 'fixed', width: '100%','background-image': 'url(' + 'src/images/318625.jpg' + ')',backgroundRepeat:'no-repeat',backgroundSize:'cover'}">
            <Header :style="{position: 'fixed', width: '100%' ,opacity:0.7}">
                <Menu mode="horizontal" theme="dark" according="true" active-name="1">
                    <div class="layout-logo">
                        <img src="../images/logo.png" height="100%">
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="md-home"/>
                            网站首页
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="md-people"/>
                            关于我们
                        </MenuItem>
                        <MenuItem name="3" to="product">
                            <Icon type="ios-analytics"></Icon>
                            产品中心
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            公司动态
                        </MenuItem>
                        <MenuItem name="5">
                            <Icon type="ios-call"/>
                            联系我们
                        </MenuItem>

                    </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 20px 0',minHeight: '500px'}">
                Content
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>
<script>
    export default {}
</script>