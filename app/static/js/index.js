// focus on input id=room_name
document.querySelector('#room_name').focus()

/*
    if user press button enter on input room_name
    this is converted in click on button
*/
document.querySelector('#room_name').onkeyup = function (e) {
    if (e.keyCode === 13) {
        document.querySelector('#button').click();
    }
};

/*
    after action click of button, the user will be
    redirect to url /cha/ + name typed

    if input empty, return alert message
*/
document.querySelector('#button').onclick = function (e) {
    var room_name = document.querySelector('#room_name').value;
    if (room_name != "") {
        window.location.pathname = '/chat/' + room_name + '/';
    } else {
        alert('Type the Room Name');
        document.querySelector('#room_name').focus();
    }
};