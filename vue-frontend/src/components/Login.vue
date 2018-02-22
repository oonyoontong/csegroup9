<template>
    <div>
        <h2>Login</h2>
        <p v-if="$route.query.redirect">
            You need to login first.
        </p>
        <form @submit.prevent="login">
            <input v-model="username" placeholder="username">
            <input v-model="password" placeholder="password" type="password"> <br>
            <button type="submit">login</button>
            <p v-if="error" class="error">Bad login information</p>
        </form>
    </div>
</template>



<script>
    import auth from '../auth';


    export default {
        name: "login",
        data(){
            return {
                username: "",
                password: "",
                error: false
            }
        },

        methods:{
            login(){
                console.log('attempting login');
                auth.login(this.username,this.password,loggedIn =>{
                    console.log("finished checking");
                    if (!loggedIn){
                        console.log("errorr");
                        this.error = true;
                    } else {
                        console.log("attempting to route to dashboard");
                        this.$router.push('dashboard');
                    }
                })
            }
        }

    }
</script>

<style scoped>

</style>