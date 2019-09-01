
import express from 'express';

// import middlewares
import startup from './middlewares/startup';

// initialize app
const websocket = require('ws');
const http = require('http');
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const wss = new websocket.Server({ server });

app.on('upgrade', wss.handleUpgrade);
app.use(startup); // apply startup configurations


const user: string[] = [];
// create socket connection
wss.on('connection', socket => {

    // broadcast to all clients / notify to all clients (manual way)
    const broadcast = function (msg:any) {
        wss.clients.forEach(function each(client) {
            if (client !== socket && client.readyState === websocket.OPEN) {
                client.send(msg);
            }
        })
    }

    // socket connection created
    console.log('web socket connection is alive');

    // add socket event here 
    // message event
    socket.on('message',function(event){ 

        // receive a message from client via this event
        console.log('Received message from client!',event);

        // reply message to client client
        socket.send('This is a message from the server!  ' + new Date().getTime());
        broadcast('There has a client has been connected.');
    });

    // login event
    socket.on('login', function(data) {
        if(data==null){
            console.log("data required.");
            socket.send('Some errors happened when login ' + new Date().getTime());
        }

        if(data.username==null || data.username == "") {
            console.log("username is required.");
            socket.send('Username is reuired ' + new Date().getTime());
        }

        if(!user.some(data.username)) {
            user.push(data.username);
        }
        
    });

    // disconnect a client 
    socket.on('disconnect', function () {
        console.log('A user disconnected');
    });
});


server.listen(port, () => {
    console.log(`Listenning on: http://localhost:3000`);
});


