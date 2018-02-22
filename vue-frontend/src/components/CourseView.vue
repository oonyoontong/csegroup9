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
        data() {
            return {
                lectureInput: ""

            }
        },
        methods: {
            lectureQuery: function () {
                this.$router.push({
                    path: 'lecture',
                    query: {
                        q: this.$data.lectureInput
                    }
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>