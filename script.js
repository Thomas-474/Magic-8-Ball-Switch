function MagicResponse(){
  
  var userQuestion;
  
  //document.getElementById("questionInput").innerHTML;

  //document.getElementById("questionDislpay").innerHTML;

  var response = '';

  var randomNumber = Math.floor(Math.random() * 10) + 1;

  switch (randomNumber){
    case 1:
    response = 'It is certain'
    break;
  
    case 2:
    response = 'It is decidedly so';
    break;
  
    case 3:
    response = 'Reply hazy try again';
    break;
  
    case 4:
    response = 'Cannot predict now';
    break;
  
    case 5:
    response = 'Do not count on it';
    break;
  
    case 6:
    response = 'My sources say no';
    break;
  
    case 7:
    response = 'Outlook not so good';
    break;
  
    case 8:
    response = 'Signs point to yes';
    break;

    case 9:
    response = 'Probably';
    break;

    case 10:
    response = 'Probably not';
    break;
  
    default:
    response = 'Error!';
    break;
  };

  document.getElementById("answer").innerHTML = response;

};
