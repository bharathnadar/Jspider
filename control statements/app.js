// if stmt 
// let a=10;
// let b=20;

// if(a<=b){
//     document.writeln(" CODE INSIDE IF BLOCK IS TRUE");
// }

// if else stmt
// let balance=200 , transaction=30;
// if(balance>=transaction){
//     document.writeln(" transaction successful");
// }
// else{
//     document.writeln(" insufficient balance");
// } 

// if else if stmt
// let day="monday"

// if (day==="monday") {
//     document.writeln("Working day");
// }  else if (day==="saturday"){
//     document.writeln("Party day");
// }   else if(day=="sunday"){
//     document.writeln("Holiday");
// }else{
//     document.writeln("Day not found");
// }

// switch case 
let day="monday";

switch(day){
    case "saturday":document.writeln("Party day");
    break;
    case "monday":document.writeln("Working day");
    break;
    case "sunday":document.writeln("Holiday");
    break;
    default:document.writeln("No day matched");
    break;
}
       