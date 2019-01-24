//business logic
function addWay(input) {
  input += "way";
  return input;
}

function addAy(input) {
  input += "ay";
  return input;
}

function isVowel(letter) {
  var vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(letter);
}

function moveToEnd(letterArray) {
  var tempArray = letterArray.slice();
  var consonantArray = [];
  for (var i = 0; i < letterArray.length; i++) {
    if(!isVowel(letterArray[i])) {
      var letter = tempArray.shift();
      consonantArray.push(letter);
      if(letterArray[ i ] === 'q') {
        if(letterArray[ i + 1 ] === 'u'){
          letter = tempArray.shift();
          consonantArray.push(letter);
          i++;
        }
      }
    } else {
      i = letterArray.length;
    }
  }
  var output = tempArray.concat(consonantArray);
  output = output.join('');
  return output;
}

function pigLatin(userSentence) {
  var output = "";
  var lettersArray = userSentence.split('');

  if(isVowel(userSentence[0])) {
    return output = addWay(userSentence);
  } else {
    output = moveToEnd(lettersArray);
    return addAy(output);
  }
}

//user interface

$(function() {
  $("button").click(function(){
    var input = $("#userInput").val();
    console.log(pigLatin(input));
  });
});
