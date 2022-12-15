console.log("This is a practice file example.js");
// var str;
// var age=25
// var str="varVariable";
// console.log(str, typeof str);
// console.log(age, (typeof age));


// const variable="constVariable";  // declaration is must
// const number=22;
// // variable="chnge"     {reassignment is
// // number=23                not allow  }
// console.log(variable, typeof variable);
// console.log(number, (typeof number));

// {let str= "letVariable";
// let num= 24;
// num=25;
// var1="tushar"
// console.log(str, typeof str);
// console.log(num, (typeof num));
// }
// let a;
// a=2;
// console.log(a);
// console.log(str);
// console.log(".......................")

// // console.warn("This is warning");
// // console.error("this is error");
// // alert("this is alert message")

// **window object :----
// let win=window;
// console.log(win)
// win=window.document;
// console.log(win)
// win=window.innerHeight;
// console.log(win)
// win= window.innerWidth;
// console.log(win)
// win=window.document.location.toString( );
// console.log(win)

/* 1. single element selector

let element= document.getElementById("brand");
// element=element.className;
// element=element.childNodes;
// element=element.parentNode;
// element=element.children;
// element.style.color="yellow";
// element.innerText=`tushar is a developer`;
// element.innerHTML=`<h1 style="color:yellow">tushar</h1>`;
console.log(element)

let sel=document.querySelector("#navContainer");
sel=document.querySelector(".container");
sel=document.querySelector("a");
sel.style.color="yellow";
console.log(sel);
*/

/*  Multi element selector
// let elems= document.getElementsByClassName("link");
// // console.log(elems);
// Array.from(elems).forEach(element =>{
//     console.log(element);
//     element.style.color = "yellow";
// })
*/


// let elems=document.getElementsByClassName("container");
// // console.log(elems[0].getElementsByClassName("nav-brand"));
// elems= document.getElementsByTagName("div");
// console.log(elems);

// ------CREATE ELEMENT APPEND INTO DOM:-------
// let aLink = document.createElement("a");
// aLink.setAttribute("href","https://www.w3school.com");

// let head = document.createElement("h1");
// let txt=document.createTextNode("Go to code");
// head.append(txt)

// aLink.append(head)

// let sec=document.querySelector(".tecdiv");
// sec.appendChild(aLink);
// console.log(sec) 

// /*  ------EVENTLISTENER------
document.getElementById("tech-head").addEventListener("mouseover", function(e){
    let varr
    console.log("You clicked the technologies");
    // varr= e.target;
    // varr= e.target.classList;
    // varr= e.target.className;
    // varr= Array.from(e.target.classList);
    // varr= e.offsetX;
    // varr= e.offsetY;
    // varr= e.clientX;
    console.log(varr);
})



