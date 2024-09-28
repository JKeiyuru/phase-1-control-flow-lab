function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400){
    return 'This one is on me!'
  } else if ( feet<= 2000){
    return 'That will be twenty bucks.'
  } else if ( feet> 2000 && feet<2500){
    return 'I will gladly take your thirty bucks.'
  } else if ( feet> 2500)
    return 'No can do.'
}

function ternaryCheckCity(city){
  // Write your code here!
  let response;
  city === 'NYC'? response='Ok, sounds good.' : response='No go.'
  return response
}

function switchOnCharmFromTip(charm){
  // Write your code here!
  let answer;
  switch (charm) {
    case charm = 'generous':
     answer = 'Thank you so much.'
     break;
    case charm = 'not as generous' :
      answer = 'Thank you.'
      break;
    case charm = 'thanks for everything':
        answer = 'Bye.'
        break;
    default :
     console.log("Bye.");
     break;
  }
  return answer;
}