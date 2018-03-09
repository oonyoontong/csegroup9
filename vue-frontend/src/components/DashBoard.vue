<template>
    <div class="dashboard_page">
    <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-light navbar-fixed-top " id="top-nav">
        <div class="container-fluid">
            <a class="navbar-brand" href="./courses">
                <img src="../assets/app-icon.png" height="40" width="40">
                <span class="hover" style="padding-left: 10px; color: #fff;">SmartClass</span>
            </a>
            <!--<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
            </div>-->

            <a class="navbar-brand" href="../logout">
                <img src="../assets/logout-icon.png" height="30" width="30">
            </a>

        </div>
    </nav>

    <div>
        <nav class="main-menu">
            <ul>


                <li class="dropdown">
                    <a href="#" data-toggle="dropdown" class="dropdown-toggle">
                        <i class="fas fa-list fa-2x " ></i>
                        <span class="nav-text">
                            Courses

                        </span>

                    </a>

                    <ul class="dropdown-menu forAnimate" id="menu1" role="menu">
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>

                    <!--<ul class="dropdown-menu">
                        <li><a href="#">Crear</a></li>
                        <li><a href="#">Modificar</a></li>
                        <li><a href="#">Reportar</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Informes</a></li>
                    </ul>-->

                <!--<li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Usuarios <span class="caret"></span><span style="font-size:16px;" class="pull-right hidden-xs showopacity glyphicon glyphicon-user"></span></a>

                </li>-->


                <li class="has-subnav">
                    <a href="quiz">
                        <i class="fas fa-pencil-alt fa-2x"></i>
                        <span class="nav-text">
                            Quiz
                        </span>
                    </a>


                </li>

                <li>
                    <a href="stats">
                        <i class="fas fa-chart-bar fa-2x"></i>
                        <span class="nav-text">
                            Graphs and Statistics
                        </span>
                    </a>
                </li>

                <li>
                    <a href="calendar">
                        <i class="fas fa-table fa-2x"></i>
                        <span class="nav-text">
                            Calendar
                        </span>
                    </a>
                </li>

                <li>
                    <a href="profile">
                        <i class="fas fa-user fa-2x"></i>
                        <span class="nav-text">
                            Profile
                        </span>
                    </a>

                </li>

                <li>
                    <a href="settings">
                        <i class="fas fa-cog fa-2x"></i>
                        <span class="nav-text">
                            Settings
                        </span>
                    </a>
                </li>
            </ul>

        </nav>
    </div>




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

    #top-nav{
        background-color: #31A9C1;
        height: 7%;
        width: 100%;
        font-family: "Roboto";
        position:fixed;
    }


    /*SIDEBAR STYLING*/
    @import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);

    .fa-2x{
        font-size: 2em;
    }

    .fas{
        position: relative;
        display: table-cell;
        width: 60px;
        height: 60px;
        text-align: center;
        vertical-align: middle;
        font-size:20px;
    }

    .main-menu:hover,nav.main-menu.expanded {
        width:250px;
        overflow:visible;
    }





    .dropdown:hover .dropdown-menu {
        display: block;
    }

    .dropdown-menu {
        position: static;
        float: none;
        width: auto;
        margin-top: 0;
        background-color: transparent;
        border: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .main-menu {
        background:#212121;
        border-right:1px solid #e5e5e5;
        position:fixed;
        left:0;
        height: 93%;
        bottom:0;
        width:60px;
        overflow:hidden;
        -webkit-transition:width .05s linear;
        transition:width .05s linear;
        -webkit-transform:translateZ(0) scale(1,1);
        z-index:1000;
    }

    .main-menu>ul {
        margin:7px 0;
    }

    .main-menu li {
        position:relative;
        display:block;
        width:250px;
    }

    .main-menu li>a {
        position:relative;
        display:table;
        border-collapse:collapse;
        border-spacing:0;
        color:#999;
        font-family: arial;
        font-size: 14px;
        text-decoration:none;
        -webkit-transform:translateZ(0) scale(1,1);
        -webkit-transition:all .1s linear;
        transition:all .1s linear;

    }

    .main-menu .nav-icon {
        position:relative;
        display:table-cell;
        width:60px;
        height:60px;
        text-align:center;
        vertical-align:middle;
        font-size:18px;
    }

    .main-menu .nav-text {
        position:relative;
        display:table-cell;
        vertical-align:middle;
        width:190px;
        font-family: 'Titillium Web', sans-serif;
    }

    .main-menu>ul.logout {
        position:absolute;
        left:0;
        bottom:0;
    }

    .no-touch .scrollable.hover {
        overflow-y:hidden;
    }

    .no-touch .scrollable.hover:hover {
        overflow-y:auto;
        overflow:visible;
    }

    a:hover,a:focus {
        text-decoration:none;
    }

    nav {
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        -o-user-select:none;
        user-select:none;
    }

    nav ul,nav li {
        outline:0;
        margin:0;
        padding:0;
    }
    .main-menu li:hover>a,nav.main-menu li.active>a,.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus,.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus,.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,.dashboard-page nav.dashboard-menu ul li.active a {
        color:#fff;
        background-color:#5fa2db;
    }
    @font-face {
        font-family: 'Titillium Web';
        font-style: normal;
        font-weight: 300;
        src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');
    }

</style>