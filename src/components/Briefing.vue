<template>
    <div class="box" align="center">
        <p id="title">説明会一覧</p>
        <table>
            <tbody>
            <tr v-for="item in datas" v-bind:key="item.id" >
                <td>{{ item.company_name }}
                <!--<button>{{item.dataid}}</button>-->
                    <!--<form action="Details.vue" >-->
                        <!--<router-link to="Details" v-on:click="Bridetails">詳細{{item.dataid}}</router-link>-->
                        <!--&lt;!&ndash;"{parms:{ name:'Details',value:'{{item.dataid}}'}}"&ndash;&gt;-->
                    <!--</form>-->
                <router-link to="Details" v-on:click="Bridataid">詳細</router-link>
                </td>

            </tr>
            </tbody>
        </table>
        <!--</ul>-->
        <router-link to="/Join">新規登録</router-link>
    </div>
</template>
<script>
    //import Details from 'Details.vue';

    export default {
        name: 'Briefing.vue',
        data () {
            return {
                datas: []
            }
        },
        // components:{
        //     Details
        // },
        created(){
            let brdata = this;
            fetch('http://ec2-18-177-93-10.ap-northeast-1.compute.amazonaws.com/assignDB/all_post.php')
                .then(function (response) {
                    return response.text()
                })
                .then(function (data) {
                    let obj = JSON.parse(data);
                    let rdata = obj['data'];
                    for (let i in rdata) {
                        console.log(rdata[i]['company_name']);
                        brdata.datas.push({
                            id: i,
                            company_name: rdata[i]['company_name'],
                            dataid: rdata[i]['event_number']
                        })
                    }
                })
        },
        methods: {
            Bridataid(){

            }
        }
    }
</script>
<style scoped>
    #title{
        text-align: center;
        color: gray;
    }
    table, th, td {
        border-spacing: 0 10px;
        text-align: center;
        color: gray;
    }
    td{border-top: solid 1px;border-bottom:solid 2px; width: 150px; padding: 15px; border-color: gray}
    td{border-radius: 15px 15px 15px 15px ; border-left:solid 1px; border-right:solid 1px; border-color: gray}
</style>