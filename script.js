function MagicResponse(){
  
  var userQuestion = document.getElementById("questionInput").value;

  document.getElementById("questionDislpay").innerHTML = userQuestion;

  var response = '';

  var randomNumber = Math.floor(Math.random() * 10) + 1;

  switch (randomNumber){
    case 1:
    response = 'It is<br>certain';
    break;
  
    case 2:
    response = 'It is<br>decidedly so';
    break;
  
    case 3:
    response = 'Reply<br>hazy, try<br>again';
    break;
  
    case 4:
    response = 'Cannot<br>predict now';
    break;
  
    case 5:
    response = 'Do not<br>count on it';
    break;
  
    case 6:
    response = 'My<br>sources<br>say no';
    break;
  
    case 7:
    response = 'Outlook<br>not so good';
    break;
  
    case 8:
    response = 'Signs<br>point<br>to yes';
    break;

    case 9:
    response = 'Probably';
    break;

    case 10:
    response = 'Probably<br>not';
    break;
  
    default:
    response = 'Error!';
    break;
  };

  document.getElementById("answer").innerHTML = response;
};
