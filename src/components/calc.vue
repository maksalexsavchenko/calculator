<template>
    <div class="grid">
        <input @keyup.enter="calc()" type="text" v-model="result" placeholder="0">
        <button @click="input(num)" class="cell num" v-for="num in numbers">{{num}}</button>
        <button @click="input(op)" class="cell op" v-for="op in operations">{{op}}</button>
        <button @click="reset()" class="cell op">AC</button>
        <button @click="calc()" class="cell op">=</button>
    </div>
</template>

<script>
    export default {
        name: "Calc",
        data () {
           return {
               result: '',
               numbers: [1,2,3,4,5,6,7,8,9,0],
               operations: ['+','-','*','/'],
           }
        },
        methods: {
            input: function(xyi) {
                this.result = this.result.toString();
                this.result+=xyi;
            },
            reset: function() {
                this.result = '';
            },
            calc: function() {
                this.result = eval(this.result);
            }
        }
    }
</script>

<style scoped>

    input[type="text"] {
        width: 100%;
        border: 1px solid rgba(36, 56, 73, 0.11);
        color: #243849;
        font-size: 18px;
        padding: 5px 5px;
        text-align: right;
    }
    .grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 200px;
        margin: 100px auto;

    }
    .cell {
        flex: 33%;
        height: 50px;
        font-size: 18px;
        border: none;
    }
    .num {
        background-color: #243849;
        color: #fff;
        font-weight: 400;
    }
    .cell:hover{
        background-color: #182530;
    }
    .op {
        background-color: #ff9900;
        color: #243849;
    }
</style>