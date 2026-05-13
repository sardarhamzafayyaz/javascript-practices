// function abc(){
//     var a = 12;
// }
// console.log(a);
// .. ya vala functionala a 

// functional scop .. jo function ka andr e use ho sakty a 
// global scope pora code ma khy b  use ho skty a
// block scope  {} srf in brackets ka and
// agr code braces ma ne a to globala a
// jsa  var a = 12;


// exeution context 
// js sb ca phla jsa e apka functopn dkhta a sb ca pahla sb ca
// phla js bnata a excution context, ya aik process a jo ka 
// 2 diferent phases ma chalya a aik ka naam a memory phase 
// or dosa ka nam a execution phase


// lexical scoping..
//  ka ap kha pa physically available ho ya pora treeka 
//  ca depend krta a k ap kya acccess kr pow ga 
// function abcd(){
//     let a = 12;
//     function defg() {
//         console.log(a);
//     }
// }
// hmm js ma lexical follow krtA HN 


// dynamic scoping... ya ham folow ne krta
// kha ca call kar ra ho us pa depnd kra ga ka kya value mla gi

// let a = 12;

// function abcd(){
//     console.log(a);
// }

// function defg () {
//     let a =13;
//     abcd();
// }
// defg();



// closures //


// hota hnn functions jo k kisi parent function ka andr ho 
// or andr vala function return ho ra ho  or returning functiom use kra
// parent function ka ko varaiable


// function abcd () {

//     let a = 10;
//     return function defg(){
//         console.log(a);
    
//     };
// }

// private variables 
// global pollution ka,

// function abcd () {

//     let a = 10;
//     return function defg(){
//         console.log(a);
    
//     };
// }
// abcd(); 

// counter //
// function countForMe() {
//     let c = 0;
//     return function() {
//         c++;
//         console.log(c);
//     };
// }
//  let fnc = countForMe();
//  // yha pa value ne da ga sf function chla ga isi lya ham
//  // isa kis b variablee ma save kr dn ga fr un ko run krnn 
//  // ga ab aya aga a chla ga
//  fnc();
//   fnc();
//    fnc();
//     fnc();
// // ya valla ma aka fr ca is ki value start vali ho gi 0
// // or ya us badd chla ga
//     let fnc2 = countForMe();
//     fnc2();
//     fnc2();



// encapsulation//

// apna maan inner logic hide kr dna or srf un chzy ka 
/// access dna jin ki zaroorat a

// function clickLimiter(){
//     let click = 0;
//     return function(){
//         if(click < 5){
//           click++;
//           console.log(`clicked : ${click} times`)

//         }
//         else {
//             console.error("Limit exceed, try after dome time");
//         }
//     };
// }
// let fnc = clickLimiter();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();

/// a little project
//  toaster

function createToaster(config){
    return function(str){
        let div = document.createElement("div");
        div.textContent = str;
        div.className = `inline-block ${config.theme === "dark" ? "bg-red-700 text-white" :"bg-blue-600 text-black"} text-white px-4 py-3 rounded shadow-lg `;
        document.querySelector(".parent").appendChild(div);
        if (config.positionX !== "left" || config.positionY !=="top"){
            document.querySelector(".parent").className += 
            `${config.positionX === "right" ? "right-5" : "left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`;
        }  
        setTimeout(()=> {
            document.querySelector(".parent") .removeChild(div);
        }, config.duration * 1000)
    };
}
let toaster = createToaster({
    positionX:"left",
    positionY:"bottom",
    theme: "light",
    duration:3,

});

toaster("Download Done");
setTimeout(()=> {
    toaster("You Have The File")
},2000);












