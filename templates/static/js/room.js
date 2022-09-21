const chatSocket = new WebSocket(
  'ws://'
  + window.location.host
  + '/ws/'
  + roomName
  + '/'
);

chatSocket.onmessage = function(e) {
  console.log('onMessage');
};

chatSocket.onclose = function(e) {
  console.error('The socket closed unexpectedly');
};