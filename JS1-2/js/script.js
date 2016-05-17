//Часть 1. Возведение числа в степень. Аналог Math.pow

console.log('Результат возведения в степень: ', pow( prompt("Введите основу:"), prompt("Введите степень:")));

function pow(a, n) {
  var result = a;
  if ( a == 0 ) return 0;
  if ( n > 0 ) {
    for ( i = 1; i < n; i++ ) {
      result *= a;
    }
    return result
  } else if ( n < 0) {
    for ( i = -1; i > n; i-- ) {
      result *= a;
    }
    return 1 / result;
  }
  return 1
}

//Поиск имени в массиве

var arrayName = [];
var n = 5;
var flag = 0;
for (var i = 0; i < n; i++) {
  arrayName[i] = prompt ('Введите имя пользователя - ');
}
// console.log ('array ',  arrayName);
var userName = prompt ('Введите имя пользователя - ');
// console.log ('userName ', userName);
for (var i = 0; i < arrayName.length; i++) {
  if (userName == arrayName[i]) {
    flag++;
  }
}
// console.log ('array length ', arrayName.length, '\nflag ', flag);
if (flag) {
  alert (userName + ' Вы успешно вошли!');
} else {
    alert ('Ошибка');
}


