// var firstName = prompt ("Ismingizni Kiriting");
// var gitChop = prompt ("GitHubda shoxlarni qanday chopiladi?");
// var bootMix = prompt ("margin boottom qanday beriladi?");
// var fontsMix = prompt ("Kod shrifti qaysi oilaga jiradi ?");
// var borderRad = prompt ("Border dumaloq shakilga keltirish uchun qanday qiymat kiritiladi?");
// var sassScss = prompt ("Scss kodni css ga qanday o'tkaziladi?");
// var fontsMin = prompt ("Serif oilasining eng mashxur vakili?");
// console.log(firstName + '\n' + gitChop + '\n' + bootMix + '\n' + fontsMix + '\n' + borderRad + '\n' + sassScss + '\n' + fontsMin)


// var elSpan = document.querySelector ('text')

// var data = +prompt ('Raqam kiriting')

// if ( data % 2 == 0) {
//     console.log ( `true`)
// }else {
//     console.log (`false`)
// }


// var userName = prompt("Ismingizni kiriting ")
// var nameSpan = document.querySelector ('.user-name')
// var elSpan = document.querySelector ('.status')
// var gender = prompt("gender")
// if(gender == "male") {
//     console.log("janob")
//     elSpan.textContent = "Janob";
// }else {
//     console.log("xonim")
//     elSpan.textContent = "Xonim";
// }
// nameSpan.textContent = userName;


var elText = +prompt("Alisher pulingiz miqdorini so'mda kiriting"); 

var dollar = 11000;
var yevro = 11800;

var elDollar = 750;
var elYevro = 120;
var resDol = (dollar * elDollar);
var resYev = (yevro * elYevro);
var elTitle = document.querySelector ('.text')
    
if(resDol + resYev <= elText) {
    console.log("Oq yo'l, Alisher!");
    elTitle.textContent = "Oq yo'l, Alisher!";
}else{
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan."); 
    elTitle.textContent = "Alisher, ozgina sabr qilish kerak bo'lar ekan.";
}




