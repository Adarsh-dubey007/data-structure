let screen = document.getElementById("screen");
let buttons = document.querySelectorAll(".button")
console.log(buttons);
let screenValue = "";
for(item of buttons){
    item.addEventListener("click",(i) =>{
        buttonText = i.target.innerText;
        console.log(buttonText)
        if(buttonText == "x"){
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;

        }       
        else if(buttonText=="AC"){
            screenValue= ""
            screen.value = screenValue
        }
        else if(buttonText == "="){
            screen.value = eval(screenValue)
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue
        }
    } )
}