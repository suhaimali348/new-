const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

console.log('WebSocket server running on ws://localhost:3000');

wss.on('connection', ws => {
  console.log('Client connected');
  const interval = setInterval(() => {
    const msg = 'Server time: ' + new Date().toLocaleTimeString();
    ws.send(msg);
  }, 1000); // send every second

  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(interval);
  });
});
