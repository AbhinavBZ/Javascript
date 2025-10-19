const increase=document.getElementById("increase");
const reset=document.getElementById("reset");
const decrease=document.getElementById("decrease");
const counter=document.getElementById("counter");
let count=0;
increase.onclick=function(){
    count++;
    document.getElementById("counter").textContent=count;
}
decrease.onclick=function(){
    count--;
    document.getElementById("counter").textContent=count;
}
reset.onclick=function(){
    count=0;
    document.getElementById("counter").textContent=count;
}