
const textbox=document.getElementById("textbox");
const tofahrenheit=document.getElementById("toFahrenheit");
const tocelsius=document.getElementById("toCelsius");
const result= document.getElementById("result");
let temp;

function convert(){
    if(tofahrenheit.checked){
        temp= Number(textbox.value);
        temp= (temp*9/5)+32; 
        result.textContent=`Temperature in Fahrenheit is : ${temp} °F`;
    }
    else if(tocelsius.checked){
        temp= Number(textbox.value);
        temp= (temp-32)*(5/9); 
        result.textContent=`Temperature in Fahrenheit is : ${temp} °F`;
    }
    
    else{
        result.textContent=`Select a unit.`;
    }
}