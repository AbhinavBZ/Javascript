document.getElementById("submit").onclick=function(){
    const name=document.getElementById("name").value;
    let grade=document.getElementById("grade").value;
    grade=Number(grade);
    let result;
    switch(true){
        case (grade>100):result="Invalid result";break;
        case (grade>=90):result="O";break;
        case (grade>=80 &&grade<90):result="A";break;
        case (grade>=70 &&grade<80):result="B";break;
        case (grade>=60 &&grade<70):result="C";break;
        case (grade>=50 &&grade<60):result="D";break;
        default:result="F"

    }
    document.getElementById("p1").textContent=`${name}, You scored : ${result}`;
}