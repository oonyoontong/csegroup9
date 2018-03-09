<template>
    <div class="dashboard_page">
    <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-light navbar-fixed-top " id="top-nav">
        <div class="container-fluid">
            <a class="navbar-brand" href="./courses">
                <img src="../assets/app-icon.png" height="40" width="40">
                <span class="hover">SmartClass</span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">

                    <li class="nav-item col-xs-6 col-sm-4 col-md-3">
                        <a class="navbar-brand" href="./profile">
                            <img src="../assets/profile-icon.png" height="25" width="25">
                            <span class="hover">Profile</span>
                        </a>
                    </li>
                    <li class="nav-item col-xs-6 col-sm-4 col-md-3 offset-xs-7 offset-sm-5 offset-md-4" >
                        <a class="navbar-brand" href="./quiz">
                            <img src="../assets/quiz-icon.png" height="25" width="25">
                            <span class="hover">Quiz</span>
                        </a>
                    </li>
                </ul>
            </div>

            <a class="navbar-brand" href="../logout">
                <img src="../assets/logout-icon.png" height="30" width="30">
            </a>

        </div>
    </nav>

    <div style="height:9999px">
        <router-view/>
    </div>

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
    .dashboard_page{
        overflow: hidden;
    }

    a span{
        padding-left: 5px;
        color: white;
    }
    #top-nav{
        background-color: #31A9C1;
        height: 7%;
        width: 100%;
        font-family: "Roboto";
        position:fixed;

    }


    /*SIDEBAR STYLING*/

</style>