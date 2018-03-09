<template>
    <div class = "dashboard_page">
        <nav id = "header" class = "navbar">
            <button><img src = "../assets/app-icon.png"/></button>
        </nav>
    </div>

</template>

<script>
    /*<div class="child">
        <button v-on:click="logout">Log out</button>
    <p>Child router path: {{ $route.fullPath }}</p>
    <router-view/>
    </div>*/


    export default {
        name: "dash-board",
        methods: {
            logout: function(){
                console.log("button logout");
                this.$router.push('/logout');
            }

        }

    }
</script>

<style scoped>
    .navbar{
        background-color: rgba(0,0,0,0.3);
        height: 7%;
    }

    .dashboard_page{
        background-repeat: no-repeat;
        height: 100vh;
        overflow:hidden;
    }
    
    #app-icon{
        background-size: auto;
        background: url(../assets/app-icon.png);
    }
</style>