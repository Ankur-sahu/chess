//client connection file
import { io } from "socket.io-client";

export const initSocket = async()=>{
    const options = {
        'force new connection' : true,
        reconnectioAttempt : 'Infinity',
        timeout:10000,
        transports: ['websocket'],
    }
    return io(process.env.REACT_APP_BACKEND_URL, options)
}