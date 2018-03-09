<template>
    <div>
    <h1>COURSEVIEW {{ $route.query.q }}</h1>
        <form v-on:submit="lectureQuery">
            <input v-model="lectureInput" placeholder="lecture">
            <button type="submit">submit</button>
        </form>
    </div>
</template>

<script>
    //TODO: PULL COURSES FROM SERVER, SORT BY QUERY

    export default {
        name: "course-view",
        props: [
            'lectureInput'
        ],
        methods: {
            lectureQuery: function () {
                console.log("wtfwtf")
                this.$router.replace({
                    path: 'lecture',
                    query: {
                        q: this.lectureInput
                    }
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>