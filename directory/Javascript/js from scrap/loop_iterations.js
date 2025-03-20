/*for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//whileloop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do while loop
let i = 0;
do {
    console.log(i);
    i ++;

}
while(i<5);


// for in loop 
 const obj = {a:1,b:2,c:3};
 for (let key in obj){
    console.log(key, obj[key]);
    console.log(obj["a"])
 }
*/
// for of loop
const arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}