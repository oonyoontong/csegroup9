<template>
    <div>
        <h1>LIVE QUESTIONS</h1>

        <div id="chat">


        </div>

        <div>
            <p v-if="isConnected">We're connected to the server!</p>
            <p>Message from server: "{{socketMessage}}"</p>
            <button @click="pingServer()">Ping Server</button>
        </div>
    </div>


</template>


<script>
    //TODO TAKE IN COURSEID,LECTURE NUMBER FROM QUERY AND PARSE DATA
    export default {
        name: "live-questions",
        data() {
            return {
                isConnected: false,
                socketMessage: ''
            }
        },

        sockets: {
            connect() {
                // Fired when the socket connects.
                this.isConnected = true;
            },

            disconnect() {
                this.isConnected = false;
            },

            // Fired when the server sends something on the "messageChannel" channel.
            messageChannel(data) {
                this.socketMessage = data
            }
        },

        methods: {
            pingServer() {
                // Send the "pingServer" event to the server.
                this.$socket.emit('pingServer', 'PING!')
            }
        }
    }
</script>

<style scoped>

</style>