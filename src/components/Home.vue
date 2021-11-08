<template>
       <div class="home">
           <h2>Hello</h2>
       </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Home",
        async created() {
            const response = await axios.get('user');

            console.log(response)
        }
    }
</script>

<style scoped>

</style>