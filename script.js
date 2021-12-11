//Сколько шоколадок можно купить и сколько останеться сдачи
var cash = prompt('сколько у Вас в кошельке денег? ');
choco = 24;
// alert = ("Целое число " Math.floor(cash/choco);
const nam = Math.floor(cash / choco);
const buy = cash % choco;
alert('Получаем целое число ' + `${nam}` + 'и остаток ' + `${buy}`);


// Записываем цифры задом на оборот
var num = prompt('напишите любые три цифры ');
const change = ('' + num).split('').reverse().join('');
alert(`${change}`)
