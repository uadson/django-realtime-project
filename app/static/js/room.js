// var roon_name receiver room_name_json of view RoomView
var room_name = {{ room_name_json }};

// routing of websocket
var chatSocket = new WebSocket(
    'ws://' + window.location.host +
    '/ws/chat/' + room_name + '/'
);

// get message of textarea
chatSocket.onmessage = function (e) {
    var data = JSON.parse(e.data);
    var message = data['message'];
    document.querySelector('#room').value += (message + '\n');

};

// finished the chat
chatSocket.onclose = function (e) {
    console.error('The chat closed unexpectly');
};

/*
    if user press button enter on input text
    this is converted in click on button
*/
document.querySelector('#text').focus();
document.querySelector('#text').onkeyup = function (e) {
    if (e.keyCode === 13) {
        document.querySelector('#button').click();
    }
};

// sending message and cleaning the textarea
document.querySelector('#button').onclick = function (e) {
    var messageInput = document.querySelector('#text');
    var message = messageInput.value;
    chatSocket.send(JSON.stringify({
        'message': message
    }));
    messageInput.value = '';
};