<template>

    <div :style="{backgroundImage: 'url(./static/images/7.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',minHeight: '500px'}"> {{msg}}</div>
</template>

<script>
    export default {
        name: "pc",
        data() {
            return {msg: 'vue模板页'}
        }
    }

</script>

<style scoped>

</style>
    
    