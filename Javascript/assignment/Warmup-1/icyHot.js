function icyHot(temp1, temp2){
    if((temp1>100 && temp2<0) || (temp2>100 && temp1<0))
      return true;
    else
      return false;
}

//test case
console.log(icyHot(120, -1));
console.log(icyHot(-1, 120));
console.log(icyHot(2, 120));

