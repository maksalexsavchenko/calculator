<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
        <div class="container">
            <a href="/" class="navbar-brand">Home</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="/login" class="nav-link">Login</a>
                    </li>
                    <li class="nav-item">
                        <a href="/register" class="nav-link">Sign up</a>
                    </li>

                    <li class="nav-item">
                        <a href="/calc" class="nav-link">Calculator</a>
                    </li>

                    <li class="nav-item">
                        <a href="/api" class="nav-link">PrivatBank Api</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>
    .navbar-light {
        background-color: #ffffff;
    }
</style>