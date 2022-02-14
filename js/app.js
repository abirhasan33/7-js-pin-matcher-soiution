function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        console.log('got 3 dogit and calling aginin', pin)
        return getPin();
    }
}
function generattePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value= '';
        }
    }
    else{
        const previousNumber = calcInput.value;
        const newCalc = previousNumber + number;
        calcInput.value = newCalc;
    }
});

function veryfypin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-number').value;
    const successMesssage = document.getElementById('notify-success');
    const failError = document.getElementById('notity-fail');
    if(pin == typedNumber){
        successMesssage.style.display = 'block';
        failError.style.display = 'none';
    }else{
        failError.style.display = 'block';
        successMesssage.style.display = 'none';
    }
}