function divEscpacedEle(message){
  return $('<div></div>').text(message);
}

function divSystemContentEle(message){
  return $('<div></div>').html('<i>' + message + '</i>');
}

function processUserInput(chatApp, socket){
  var message = $('#send-message').val();
  var systemMessage;

  if(message.charAt(0) == '/'){
    systemMessage = chatApp.processCommand(message);
    if(systemMessage){
      $('#messages').append(divSystemContentEle(systemMessage));
    }
  } else {
    chatApp.sendMessage($('#room').text(), message);
    $('#messages').append(divEscpacedEle(message));
    $('#messages').scrollTop($('#messages').prop('scrollHeight'));
  }
  $('#send-message').val('');
}
