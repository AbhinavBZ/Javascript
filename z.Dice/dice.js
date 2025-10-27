function rollDice(){
    const num=document.getElementById("numdice").value;
    const diceresult=document.getElementById("diceresult");
    const diceimages=document.getElementById("diceimages");
    const values=[];
    const images=[];
    for(let i=0;i<num;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
    }
    diceresult.textContent=`Dice:${values.join(',')}`;
    diceimages.innerHTML=images.join('');

}