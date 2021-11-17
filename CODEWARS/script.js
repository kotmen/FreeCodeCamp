function numberToString(num) {
    return num.toString();
  }

/////////////////////////////////////////////////

String.prototype.toJadenCase = function () {
  var returnString = [];
  var words = this.toLowerCase().split(' ');
  
  for (var i = 0; i < words.length; i++) {
      word = words[i];
      returnString.push(word[0].toUpperCase() + word.slice(1));
  }
  return returnString.join(" ");
};
////////////////////////////////////////

function filter_list(l) {
return l.filter( str => typeof str != 'string');
}
//////////////////////////////////////

function openOrSenior(data) 
  { return  data.map(x => 
    { if(x[0] >= 55 && x[1] > 7)
      {return "Senior";}
      else{return "Open";} 
    }); 
  }


////////////////////////

function positiveSum(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
     sum += arr[i];
   }
  }
 return sum;
 }

 ///////////////////////////

 function arrayDiff(a, b) {
  return a.filter(e => !b.includes(e));
}

//////////////////////////

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
/////////////////////////////
function even_or_odd(number) {
  return Math.abs(number) % 2 === 1 ? "Odd" : "Even";
}