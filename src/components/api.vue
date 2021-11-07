<template>
    <div class="api">
        <div class="courses">
<!--            <ul>-->
<!--                <li v-for="(course, index) in courses" :key="index">-->
<!--                    {{ course.ccy }}: Buy {{ course.buy }} <br> Sale {{ course.sale }}-->
<!--                </li>-->
<!--            </ul>-->

            <table style="width: 100%">
                <tr>
                    <th>ccy</th>
                    <th>base_ccy</th>
                    <th>buy</th>
                    <th>sale</th>
                </tr>
                <tr v-for="course in courses" >
                    <td>{{ course.ccy }}</td>
                    <td>{{ course.base_ccy }}</td>
                    <td>{{ course.buy }}</td>
                    <td>{{ course.sale }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>

    export default {
        name: "api",
        data(){
            return {
                courses : []
            }
        },
        mounted(){
            this.axios
                .get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
                .then(response => (this.courses = response.data))
        }
    }
</script>

<style scoped>
    .courses {
        width: 400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    ul {
        list-style: none;
        padding: 10px;
    }

    li {
        margin: 20px;
    }
</style>