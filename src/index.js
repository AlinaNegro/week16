/* функция sumInput() */

function sumInput() {
    const arr = [];
    let sum = 0;
    for (;;) {
        const value = +prompt("Введите число", '');
        if (!value ) break;
        arr.push(value); 
        sum += value;
    }
    alert('Отсортированный массив: ' + arr.sort() + ' ' + 'Сумма элементов: ' + sum );   
}

/* Калькулятор расчета стоимости автомобиля */

const marka = document.querySelector('.marka').value;
const services = document.getElementsByName('typeServ1');
const damages = document.querySelectorAll('#damage');
const mileage = Number(document.querySelector('#mileage').value);
const btn = document.querySelector('.btn'); 

btn.addEventListener('click', function(){
    document.querySelector('.result').innerHTML = "";
    let sum = 0;

    if ( marka === 'mazda') {
        sum += 1000000;
    }else if ( marka === 'lada'){
        sum += 900000;
    }else {
        sum += 1100000;
    }
    
    if(mileage < 100000 && mileage > 0 ){
        sum += 100000;
    }else if (mileage < 400000){
        sum += 50000;
    }else {
        sum += 25000;
    }

    for(let damage of damages) {
        if(damage.checked) {
            sum -= 10000;
        }
    }
    let val;
    for(let service of services) {
        if (service.checked) {
            val = service.value;
        }
    }
    
    switch(val) {
        case '1': sum += 50000;
        break;

        case '2' : sum += 30000;
        break;
        
        case '3': sum += 20000;
        break;

        case '4': sum += 40000;
        break;
    }

    document.querySelector('.result').innerHTML += 'Окончательная стоимость: ' + sum; 
})

/* 3 задачи */

function first() {
    const arr = ['js', 'css', 'html'];
    alert('First element:' + ' ' + arr[0]);
}

function second() {
    const arr = [0, 1, false, 2, undefined, '', 3, null];
    const filterArray = arr.filter(Boolean);
    alert(filterArray);
}

function third() {
    const arr = [[1,2], [1,2,3], [1,2,3,4]];
    const newArr = arr.findIndex(el => el.length > 3);
    alert(newArr);
    
}

