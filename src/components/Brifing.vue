<template>
    <div>
        <p id="title">説明会一覧</p>
        <div style="padding: 10px; margin-bottom: 10px; border: 1px solid #333333; border-radius: 10px;">
            〇〇〇〇説明会　　<router-link to="/Details">詳細</router-link>
        </div>
        <router-link to="/Join">新規登録</router-link>
    </div>
</template>

<script>
    export default {
        name: "Brifing.vue"
    }
</script>

<style scoped>
    #title{
        text-align: center;
    }
</style>