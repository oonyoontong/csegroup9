<template>

    <div class="child">
        <button v-on:click="logout">Log out</button>
        <p>Child router path: {{ $route.fullPath }}</p>
    <router-view/>
    </div>
</template>

<script>



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

</style>