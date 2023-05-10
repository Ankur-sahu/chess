//client connection file
import { io } from "socket.io-client";

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt : 'Infinity',
        timeout: 10000,
        pingTimeout: 60000, // Set the timeout to 60 seconds
        pingInterval: 25000, // Set the interval to 25 seconds
        transports: ['websocket'],
    }
    return io(process.env.REACT_APP_BACKEND_URL, options)
}