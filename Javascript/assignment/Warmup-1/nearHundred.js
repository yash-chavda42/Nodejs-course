function nearHundred(n){
    if(Math.abs(100-n)<=10 || Math.abs(200-n)<=10)
      return true;
    else
      return false
}

//test case
console.log(nearHundred(93));
console.log(nearHundred(90));
console.log(nearHundred(89));