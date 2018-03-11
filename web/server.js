// const io = require('socket.io')()


// io.on('connection', (client) => {
// 	// console.log('socket connected')
// 	client.on('subscribeToTimer', (interval) => {
// 	  console.log('client is subscribing to timer with interval ', interval);
//       setInterval(() => {
//         client.emit('timer', new Date());
// 	  }, interval);
// 	});
// })


// const port = 8000
// io.listen(port)
// console.log('listening on port ', port)

const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

// our localhost port
const port = 4001

const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  console.log('User connected')

  socket.on('message sent', (chat) => {
  	console.log(chat)
  	io.emit('message received', chat)
  })
  
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))