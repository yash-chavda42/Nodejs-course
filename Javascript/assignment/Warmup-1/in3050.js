function in3050(a, b){
    if((a>=30 && a<=40) && (b>=30 && b<=40))
      return true;
    else if((a>=40 && a<=50) && (b>=40 && b<=50))
      return true;
    else
      return false
  
}

//test case
console.log(in3050(30, 31));
console.log(in3050(30, 41));
console.log(in3050(40, 50));