let x = 5 
console.log(x)
if(5=='5')   // it convert and then compares at this string is converted to number
{
    console.log(true)
}
 if (null == undefined)  // it convert and then compares 
{                       //true because null and undefined are considered equal
    console.log(true)
 }
 
if(5==='5'){
    console.log(true)
}           // false because the types are different (number vs string)
else{

    console.log(false)
}

console.log(Object.is(5, 5))        // true
console.log(Object.is(5, "5"))      // false
console.log(Object.is(NaN, NaN))    // true (unlike `===`, which considers NaN !== NaN)
console.log(Object.is(-0, +0))      // false (unlike `===`, which considers -0 === +0)