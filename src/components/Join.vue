<template>
    <div class="box" id="join">
        <p id="title">説明会登録</p>
        <span id="debug"></span>
        <form>
            <p>企業名</p>
            <input type="text" v-model="company_name">
            <p>日時</p>
            <input type="time" v-model="start_time">
            <p>場所</p>
            <input type="text" v-model="venue">
            <p>持参物</p>
            <input type="text" v-model="bring_item">
            <p>備考</p>
            <input type="text" v-model="supplementary">
            <router-link to="/Briefing">
                <!--DB追加説明会-->
                <input v-on:click="insertdb" type="button" value="送信">
            </router-link>
        </form>
    </div>
</template>
<script>
    //import insert from './event_insert.js';
    export default {
        name: "Join.vue",
        data:{
            finish_flg: 0,
            division: "",
            joboffer_number: 0,
            event_date: "",
            start_time: null,
            finish_time: "",
            company_name: null,
            venue: null,
            occupation: "",
            content: "",
            bring_item: null,
            briefing_deadline: "",
            exam_deadline: "",
            workplace: "",
            briefing_number: 0,
            exam_number: 0,
            offer_number: 0,
            target: "",
            international_flg: 0,
            disability_flg: 0,
            supplementary: null,
            update_date: "",
        },
        methods: {
            insertdb(e) {
                if (this.start_time && this.company_name && this.venue && this.bring_item && this.supplementary) return true;
                this.errors = [];
                if (!this.start_time) this.errors.push("Name required");
                if (!this.company_name) this.errors.push("company_name required");
                if (!this.venue) this.errors.push("venue required");
                if (!this.bring_item) this.errors.push("bring_item required");
                if (!this.supplementary) this.errors.push("supplementary required");
                e.preventDefault();

                json_data = JSON.stringify(data);

                fetch('http://ec2-18-177-93-10.ap-northeast-1.compute.amazonaws.com/assignDB/event/event_insert.php', {
                    method: 'POST',
                    body: json_data,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(function (response) {
                        return response.text();
                    })
                    .then(function (data) {
                        obj = JSON.parse(data);
                        console.log(obj);
                        $("#debug").text("追加が完了しました");
                    })
                    .catch(function (error) {
                        document.getElementById('result').textContent = error;
                        $("#debug").text("追加に失敗しました");
                    })
            }
        }
    }


</script>

<style scoped>
    p#title {
        text-align: center;
    }

    div.box {
        width: 276px;
        height: 597px;
        padding: 0px;
        border: 1px solid #333333;
        border-radius: 10px;
    }

    input {
        width: 80%;
    }
</style>