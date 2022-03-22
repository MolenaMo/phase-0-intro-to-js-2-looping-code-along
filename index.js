// Code your solutions in this file==below is "for" loop
/*for (let age = 30; age < 40; age++){ 
    console.log(`I'm ${age} years old. Happy birthday to me!`)
/*debugger}*/

//Using for with Arrays-The for loop is often used to iterate over every element in an array. 
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  }

  return gifts;
}

wrapGifts(gifts);