//Часть 1. Возведение числа в степень. Аналог Math.pow

console.log('Результат возведения в степень: ', pow( prompt("Введите основу: "), prompt("Введите степень: ")));

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

var arrUsers = [];
for ( var i = 0; i < 5; i++) {
  arrUsers[i] = prompt('Введите ' + ( i + 1 ) + '-е имя пользователя', 'Константин');
}
var currentUser = prompt('Добро пожаловать! Введите имя пользователя', 'Светлана');
var allowToLogin = false;
for ( var i = 0; i <= arrUsers.length; i++) {
  if ( currentUser === arrUsers[i] ) {
    allowToLogin = true;
  }
}

if (allowToLogin) {
    alert( currentUser + ', Вы успешно вошли!' );
  } else {
    alert( 'Ошибка! Пользователь не найден!' )
  }
