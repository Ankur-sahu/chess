const express = require('express');
const app = express();
const http = require('http')
const { Server } = require('socket.io')
const ACTION = require('./src/Actions')



const server = http.createServer(app)
const io = new Server(server)
let count = 1

const userSocketMap = {} //storing user with its socket id
function getAllConnectedClients(roodId) {
    return Array.from(io.sockets.adapter.rooms.get(roodId) || []).map(
        (socketId) => {
            return {
                socketId,
                username: userSocketMap[socketId],
            }
        })//io.sockets.adapter.get(roodId) it ll return all socket having roomId this return Map(data structure in js)

}

io.on('connection', (socket) => {
    console.log('socket connected', socket.id)

    socket.on(ACTION.JOIN, ({ roomId, username }) => {//handling socket req
        userSocketMap[socket.id] = username//user that just joined
        socket.join(roomId) 
        const clients = getAllConnectedClients(roomId) //creating a fn to fetch all connected clients

        if (clients.length < 3) {
            //roodId exist then it ll join user else it lll create room
            console.log(clients, "geeting clients")
            clients.forEach(({ socketId }) => {
                io.to(socketId).emit(ACTION.JOINED, {//sending all client info about new user joining
                    clients,
                    username,
                    socketId: socket.id,//user that just joined
                })
            })
        } else {
            io.to(socket.id).emit(ACTION.NOSPACE, {
                space: false,
                length: Object.keys(userSocketMap).length
            })
            console.log("NO-SPACE")
        }


    })

    //getting msg from clients
    socket.on(ACTION.CODE_CHANGE, ({ roomId,
        blockSelected,
        index,
        type }) => {
        console.log(blockSelected,"getting req from client", index)
        //socket.in(roomId).emit(ACTION.CODE_CHANGE,{inputMsg}) //uncomment it if want to send data to all client except user who sended it
        io.to(roomId).emit(ACTION.CODE_CHANGE, {
            blockSelected,
            index,
            type })//sending to all room members
    })
    
    socket.on(ACTION.DISCONNECTING, () => {//when someone close or chamge tab
        //[...] converting values to array
        const rooms = [...socket.rooms] //get all room from socket from perticular user that is disconnecting
        rooms.forEach((roodId) => {
            socket.in(roodId).emit(ACTION.DISCONNECTED, {
                socketId: socket.id,
                username: userSocketMap[socket.id],
            })
        })
        delete userSocketMap[socket.id] //delete from userSocketMap object
        socket.leave()//leave room for that user
        console.log("desiconnect")
    })
}) //whenever client make connection



const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Listening on Port ${PORT}`))