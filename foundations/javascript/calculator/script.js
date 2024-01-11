let numArr = [];
let currentOp = '';
let num = null;
let digit = 10;
let result = 0;
let finished = false;

const screen = document.querySelector(".screen");
let p = document.createElement('p');
screen.appendChild(p);

function writeScreen(text){
    screen.removeChild(screen.firstChild);
    
    p.textContent = text;
    p.style.color = "white";
    p.style.fontFamily = "digital-clock-font";
    p.style.fontSize = "20px";
    p.style.margin = "8px";
    p.style.marginLeft = "auto";
    p.style.textAlign = "right";

    screen.appendChild(p);
}

function highlightButton(btn){ // Highlight when operation is to be done
    btn.style.backgroundColor = "rgb(253, 209, 37)";
}

function darkenButton(btn){ // Return to original color after operation is processed
    btn.style.backgroundColor = "rgb(255, 183, 0)";
}

function deselectButton(){
    switch (currentOp){
        case '+':
            darkenButton(btnSum);
            break;
        case '-':
            darkenButton(btnSubtract);
            break;
        case '*':
            darkenButton(btnMultiply);
            break;
        case '/':
            darkenButton(btnDivide);
            break;
    }
}

function addNumber(i){
    // Reset after equals
    if (finished && currentOp == '') {
        num = 0;
        result = 0;
        numArr = [];
        finished = false;
    }
    
    if (num == null) num = 0;

    num = num * digit + i;
    writeScreen(num);
    deselectButton();
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


// Operations Code
function sum(){
    if (num != null) numArr.push(num);
    if (numArr.length == 0) return;
    
    num = null;

    if (currentOp != '' && numArr.length == 2){ // operate than change operator
        result = operate();
        writeScreen(result);
    }

    result = 0;
    deselectButton();   
    currentOp = '+';
    highlightButton(btnSum);
}   


function subtract(){
    if (num != null) numArr.push(num);
    if (numArr.length == 0) return;
    
    num = null;


    if (currentOp != '' && numArr.length == 2){ // operate than change operator
        result = operate();
        writeScreen(result);
    }

    result = 0;
    deselectButton();   
    currentOp = '-';
    highlightButton(btnSubtract);
}


function multiply(){
    if (num != null) numArr.push(num);
    if (numArr.length == 0) return;

    num = null;

    if (currentOp != '' && numArr.length == 2){ // operate than change operator
        result = operate();
        writeScreen(result);
    }

    result = 0;
    deselectButton();   
    currentOp = '*';
    highlightButton(btnMultiply);
} 


function divide(){
    if (num != null) numArr.push(num);
    if (numArr.length == 0) return;

    num = null;

    if (currentOp != '' && numArr.length == 2){ // operate than change operator
        result = operate();
        writeScreen(result);
    }

    result = 0;
    deselectButton();   
    currentOp = '/';
    highlightButton(btnDivide);
} 

function equal(){
    // Store last number
    if (num != null) numArr.push(num);
    if (numArr.length != 2) return;

    
    // Process and Write
    result = operate();
    console.log(result)
    writeScreen(result);

    // Reset varibles
    num = null;
    currentOp = '';
    finished = true;
} 


function operate(){
    let res = 0;
    switch (currentOp){
        case '+':
            res = proccessSum();
            break;
        case '-':
            res = proccessSubtract();
            break;
        case '*':
            res = proccessMultiply();
            break;
        case '/':
            res = proccessDivide();
            break;
        default:
            res = num;
    }

    return res;
}

function proccessSum(){

    numArr[0] = numArr[0] + numArr[1];
    numArr.pop();

    return numArr[0];
}


function proccessSubtract(){

    numArr[0] = numArr[0] - numArr[1];
    numArr.pop();

    return numArr[0];
}


function proccessMultiply(){

    numArr[0] = numArr[0] * numArr[1];
    numArr.pop();

    return numArr[0];
}

function proccessDivide(){
    // Can't divide by 0
    if (numArr[1] == 0){

    }

    numArr[0] = numArr[0] / numArr[1];
    numArr.pop();

    return numArr[0];
}


const btnSum = document.querySelector(".sum");
btnSum.onclick = function(){sum();}

const btnSubtract = document.querySelector(".subtract");
btnSubtract.onclick = function(){subtract();}

const btnMultiply = document.querySelector(".multiply");
btnMultiply.onclick = function(){multiply();}

const btnDivide = document.querySelector(".divide");
btnDivide.onclick = function(){divide();}

const btnEqual = document.querySelector(".equal");
btnEqual.onclick = function(){equal();}


// Keyboard controls
let shiftPressed = false;

document.addEventListener('keydown', function(event) {
    console.log(event.key)
    switch(event.key){
        case "0":
            addNumber(0);
            break;
        case "1":
            addNumber(1);
            break;
        case "2":
            addNumber(2);
            break;
        case "3":
            addNumber(3);
            break;
        case "4":
            addNumber(4);
            break;
        case "5":
            addNumber(5);
            break;
        case "6":
            addNumber(6);
            break;
        case "7":
            addNumber(7);
            break;
        case "8":
            addNumber(8);
            break;
        case "9":
            addNumber(9);
            break;

        case "+":
            sum()            
            break;
        case "-":
            subtract();
            break;
        case "*":
            multiply();
            break;
        case "/":
            divide();
            break;
        case "=":
            equal();
            break;
        case "Enter":
            equal();
            break;
    }
});
