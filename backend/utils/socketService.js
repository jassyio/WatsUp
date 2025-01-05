const handleSocketConnection = (io, socket) => {
    console.log('A user connected');

    socket.on('joinRoom', (roomId) => {
        socket.join(roomId)
        console.log(`User joined room ${roomId}`);
    })

    socket.on('chat message', (msg) => {
        if(msg.roomId){
            io.to(msg.roomId).emit('chat message', msg);
        }else{
            io.emit('chat message', msg);
        }
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
};

module.exports = { handleSocketConnection };