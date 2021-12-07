//Сколько шоколадок можно купить и сколько останеться сдачи
var cash = prompt('сколько у Вас в кошельке денег? ');
choco = 24;
const buy = cash % choco;
alert(`${buy}`);


// Записываем цифры задом на оборот
var num = prompt('напишите любые три цифры ');
const change = (('' + num).split('').reverse().join(''));
alert(`${change}`)
