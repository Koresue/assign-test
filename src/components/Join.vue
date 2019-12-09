<template>
    <div class="box" id="join">
        <p id="title">説明会登録</p>
        <form @submit.prevent="submit">
            <p>企業名</p>
            <input type="text" id="Comname" v-model="comname">
            <p>日時</p>
            <input type="time" id="Comtime" v-model="comtime">
            <p>場所</p>
            <input type="text" id="Complace" v-model="complace">
            <p>持参物</p>
            <input type="text" id="Comhave" v-model="comhave">
            <p>備考</p>
            <input type="text" id="Comremarks" v-model="comremarks">
            <router-link to="/Briefing"><button type="submit" v-on:click="Newjoin">新規登録</button></router-link>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Join.vue",


        methods: {
            Newjoin: function () {
                alert("説明会を新規登録しました")
                // if (event) {
                //
                // }
            }
        },
        el: '#join',
        data() {
            return {
                form: {
                    comname: '',
                    comtime: '',
                    complace: '',
                    comhave: '',
                    comremarks: '',
                },
            }
        }
    }







</script>

<style scoped>
    p#title{
        text-align: center;
    }


    div.box{
        width: 276px;
        height: 597px;
        padding: 0px;
        border: 1px solid #333333;
        border-radius: 10px;
    }
    input{
        width: 80%;
    }
</style>