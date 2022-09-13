const obj = {
    '*':'multiply',
    '/':'divide',
    '+':'add',
    '-':'subtract'
};
let Total = '';
let operator = '';
let isOpActive = false;
let isSubmit = false;
let initialScreenValue = '';
let checkValue = '0';
let operandId = '';
let specialOperators = false;

function clearScreen(){
    if(document.getElementById('AC').value == 'AC'){
        console.log('I was clicked');
        document.getElementById('result-screen').value = '0';
        Total = '';
        operator = ''
        checkValue =   '0';

        if(operandId != ''){
            defaultColor();
        }
    }
    else{
        console.log('C was clicked');
        if(isSubmit == false && operandId != ''){
            highlight();
        }
        if(isSubmit){
            Total = '0';
        }
        document.getElementById('result-screen').value = '0';
        checkValue =   '0';
        document.getElementById('AC').value = 'AC';
    }
}

function display(a){
    if(operandId != ''){
        defaultColor();
    }
    isOpActive = false;    
    // console.log('issubmit of display',isSubmit)
    if(isSubmit == true){
        Total = '';
        operator = '';
    }
    isSubmit = false;
    document.getElementById('AC').value = 'C';
    let output = document.getElementById('result-screen').value;
    if(a == '.' && output.indexOf(a) == output.lastIndexOf(a) && output.indexOf(a) != -1){

    }else{
        if(document.getElementById('result-screen').value == '0' || checkValue == '0'){
            document.getElementById('result-screen').value = a;
            checkValue = a;
        }else{
            if(document.getElementById('result-screen').value.length > 9){
                let inputValue = document.getElementById('result-screen').value;
                if(inputValue.length == 10 && inputValue[0] == '-'){
                    document.getElementById('result-screen').value += a;
                    checkValue += a;
                }
            }else{
                document.getElementById('result-screen').value += a;
                checkValue += a;
            }
        }
    }
        
}

function negativeVal(){
        document.getElementById('result-screen').value *= -1;
        Total = document.getElementById('result-screen').value;
        isSubmit = true;
}

function percentage(){
    document.getElementById('result-screen').value *= 0.01;
    Total = document.getElementById('result-screen').value;
    checkValue = '0';
    Total = '';
    isSubmit = true;
}

function operands(a){
    if(isOpActive){
        operator = a;
        defaultColor();
        operandId = obj[a];
        highlight();

    }else{
        if(isSubmit == false){
        calculate();
        }else{
            initialScreenValue = document.getElementById('result-screen').value;
        }
        operator = a;
        checkValue = '0';
        isSubmit = false;
        isOpActive = true;
        operandId = obj[a];
        highlight();
    }
}

function highlight(){
    let btn = document.getElementById(operandId);
    // console.log(operandId,'highlight operand id');
    btn.style.color = '#f08b07';
    btn.style.backgroundColor = '#fff';
}

function defaultColor(){
    let btn = document.getElementById(operandId);
    btn.style.color = '#fff';
    btn.style.backgroundColor = '#f08b07';
}

function calculate(){
    // if(specialOperators){

    // }else{
        if(isOpActive){
            defaultColor();
        }
        let calcVal;
        if(isSubmit){
            calcVal = eval(Total+operator+initialScreenValue);
            // console.log('Total',Total,'operator',operator,'initialScreenValue',initialScreenValue);
        }else{    
            initialScreenValue = document.getElementById('result-screen').value;
            calcVal = eval(Total+operator+initialScreenValue);
            // console.log(calcVal);
            // console.log('sec',checkValue);
        }
        document.getElementById('result-screen').value = calcVal;
        Total = calcVal;
        checkValue = '0';
        isSubmit = true;
    // }
}