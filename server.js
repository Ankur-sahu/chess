const express = require('express');
const app = express();
const http = require('http')
const { Server } = require('socket.io')
const ACTION = require('./src/Actions');
const path = require('path');
const server = http.createServer(app)
const io = new Server(server)
app.use(express.static('build'))
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
})
const userSocketMap = {} //storing user with its socket id
function getAllConnectedClients(roodId) {
    return Array.from(io.sockets.adapter.rooms.get(roodId) || []).map(
        (socketId) => {
            return {
                socketId,
                username: userSocketMap[socketId],
            }
        })
}

io.on('connection', (socket) => {
    socket.on(ACTION.JOIN, ({ roomId, username }) => {
        userSocketMap[socket.id] = username
        socket.join(roomId)
        const clients = getAllConnectedClients(roomId)
        if (clients.length < 3) {
            console.log(clients, "geeting clients")
            clients.forEach(({ socketId }) => {
                io.to(socketId).emit(ACTION.JOINED, {
                    clients,
                    username,
                    socketId: socket.id,
                })
            })
        } else {
            io.to(socket.id).emit(ACTION.NOSPACE, {
                space: false,
                length: Object.keys(userSocketMap).length
            })
        }
    })

    socket.on(ACTION.CODE_CHANGE, ({ roomId,
        blockSelected,
        index,
        type }) => {
        io.to(roomId).emit(ACTION.CODE_CHANGE, {
            blockSelected,
            index,
            type
        })
    })

    socket.on(ACTION.SYNC_CODE, ({ blocks, turn, game, killedP, lastStep, socketId }) => {
        io.to(socketId).emit(ACTION.SYNC_CODE, { blocks, turn, game, killedP, lastStep })
    })
    socket.on(ACTION.DISCONNECTING, () => {
        const rooms = [...socket.rooms] 
        rooms.forEach((roodId) => {
            socket.in(roodId).emit(ACTION.DISCONNECTED, {
                socketId: socket.id,
                username: userSocketMap[socket.id],
            })
        })
        delete userSocketMap[socket.id]
        socket.leave()
        console.log("desiconnect")
    })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Listening on Port ${PORT}`))