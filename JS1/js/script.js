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


var arrUsers = [];
for ( var i = 0; i < 5; i++) {
  arrUsers[i] = prompt('������� ' + ( i + 1 ) + '-� ��� ������������', '����');
}
var currentUser = prompt('����� ����������! ������� ��� ������������', '����');
var allowToLogin = false;
for ( var i = 0; i <= arrUsers.length; i++) {
  if ( currentUser === arrUsers[i] ) {
    allowToLogin = true;
  }
}

if (allowToLogin) {
    alert( currentUser + ', �� ������� �����!' );
  } else {
    alert( '������! ������������ �� ������!' )
  }