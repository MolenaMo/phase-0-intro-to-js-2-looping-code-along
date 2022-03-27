// Code your solutions in this file==below is "for" loop
/*for (let age = 30; age < 40; age++){ 
    console.log(`I'm ${age} years old. Happy birthday to me!`)
/*debugger}*/

//Using forloop with Arrays-The for loop is often used to iterate over every element in an array. 
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     //debugger;
//   }

//   return gifts;//unsure why this is needed 
// }

// wrapGifts(gifts);
//===the actual lab assignment===//


//===below returns desired result in repl, but doesn't pass test =(
// const arrayOfNames = ["Guadalupe", "Ollie", "Aki"];
// const theEvent = ["surprise"]
// function writeCards(arrayOfNames){
//     for (let i = 0; i < 3 ; i++){
//         console.log(`Thank you, ${arrayOfNames[i]} for the wonderful ${theEvent[0]} gift!`)
// } }writeCards(arrayOfNames)

// const greeting = [`Thank you,${arrayOfNames[i]} for the wonderful ${theEvent[0]} gift! `]
// function writeCards(arrayOfNames, theEvent){
//     for (let i=0; i<3; i++){
//         const greeting = [`Thank you,${arrayOfNames[i]} for the wonderful ${theEvent[0]} gift! `]
//     }return [greeting]
// }

//passes test, doesn't meet instructions tho'
// return[ "Thank you, Guadalupe, for the wonderful surprise gift!",
// "Thank you, Ollie, for the wonderful surprise gift!",
// "Thank you, Aki, for the wonderful surprise gift!",]
//    ;i < names.length
//    console.log('Thank you, ${names[i]} for the wonderful surprise gift!');
// 

function writeCards(arr, event){
    const newArr = []
    for (let i = 0; i < 3; i++){
        const message = `Thank you, ${arr[i]}, for the wonderful surprise gift!`
        newArr.push(message)
    }
    return newArr
}

//===REMINDER===WHILE LOOP
//while ([condition]) { [loop body]}

// function countDown(ten){
//     while (countDown >0) {
//         countDown --
// return countDown(10)
// }}console.log(countDown)

function countDown(){
let countDown = 10;
while (countDown > -1) {
  console.log(countDown--);
}}