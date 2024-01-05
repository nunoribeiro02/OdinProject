let numArr = [];
let opArr = [];
let num = 0;
let digit = 10;
let result = "";

const screen = document.querySelector(".screen");
let p = document.createElement('p');
screen.appendChild(p);

function writeScreen(text){
    screen.removeChild(screen.firstChild);
    
    p.textContent = text;
    p.style.color = "white";
    screen.appendChild(p);
}

function addNumber(i){
    console.log("addnumber");

    num = num * digit + i;
    result += i;

    writeScreen(result);
    console.log(num);
}


const btn0 = document.querySelector(".zero");
btn0.onclick = function(){addNumber(0);}

const btn1 = document.querySelector(".one");
btn1.onclick = function(){addNumber(1);}

const btn2 = document.querySelector(".two");
btn2.onclick = function(){addNumber(2);}

const btn3 = document.querySelector(".three");
btn3.onclick = function(){addNumber(3);}

const btn4 = document.querySelector(".four");
btn4.onclick = function(){addNumber(4);}

const btn5 = document.querySelector(".five");
btn5.onclick = function(){addNumber(5);}

const btn6 = document.querySelector(".six");
btn6.onclick = function(){addNumber(6);}

const btn7 = document.querySelector(".seven");
btn7.onclick = function(){addNumber(7);}

const btn8 = document.querySelector(".eight");
btn8.onclick = function(){addNumber(8);}

const btn9 = document.querySelector(".nine");
btn9.onclick = function(){addNumber(9);}




function sum(){
    console.log("sum");

    numArr.push(num);
    opArr.push('+');
    result += " + ";
    num = 0;

    writeScreen(result);
    console.log(result);
}   


function equal(){
    console.log("equal");

    // Store last number
    numArr.push(num);
    
    // Process and Write
    let res = processOperations();
    writeScreen(res);

    // Reset varibles
    result = "";
    num = 0;
    numArr = [];
    opArr = [];
} 


function processOperations(){
    index = 0;
    while (numArr.length -1 > index){
        index += 1;
        
        switch (opArr[0]){
            case '+':
                proccessSum(index)
            case '-':

        }
    }

    return numArr[index]
}

function proccessSum(index){
    
    numArr[index] = numArr[index] + numArr[index -1];
}


const btnSum = document.querySelector(".sum");
btnSum.onclick = function(){sum();}

const btnEqual = document.querySelector(".equal");
btnEqual.onclick = function(){equal();}