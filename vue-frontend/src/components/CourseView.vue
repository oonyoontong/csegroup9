<template>
    <div>
    <h1>COURSEVIEW {{ $route.query.q }}</h1>
    </div>
</template>

<script>
    //TODO: PULL COURSES FROM SERVER, SORT BY QUERY

    export default {
        name: "course-view"
    }
</script>

<style scoped>

</style>