/*
var time = 10;
var greeting;

if (time < 10) {
  greeting = 'Good morning';
} else if (time < 20) {
  greeting = 'Good day';
} else {
  greeting = 'Good evening';
}
console.log(greeting);
var color = 'red';
switch (color) {
  case 'yellow':
    console.log('yellow color');
    break; 
  case 'red':
    console.log('red color');
    break;
  case 'blue':
    console.log('blue color');
    break;
  default:
    console.log('unknowm color');
}

for (var i = 0; i < 3; i++) { // 한줄만 실행하면서 확인해 봄.
  for (var j = 0; j < i; j++) {
    console.log(i,j);
  }
}

Q1
/*
for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
ex) 
0
2
4
6
8

for (var i = 0; i < 10; i++){  // i값을 0부터 시작해서 10보다 작을때까지 하나씩 증감한다.
  if (i  % 2 === 0) { // i값을 2로 나눴을 때 0이 되어 참이면 
    console.log(i)//i값을 출력한다.
  }

} // 8까지 출력해야 하므로 9보다 작은 수로 정함.


/*
for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
ex) 02468

var result = '';
for (var j = 0; j < 10; j++){ // j값을 0부터 시작해서 10보다 작을때까지 하나씩 증감한다.
  if(j % 2 === 0){ // j값을 2로 나눴을 때 0이 되어 참이면
    result += j; // 결과값을 가로로 하는 것은 숫자를 문자로 변환한 후 문자를 더한다.
  }
}

/*
for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
ex)
9
7
5
3
1


for (var k = 10; k > 0; k--){ // k값을 10부터 시작해서 k값이 0보다 클때까지 1씩 감소한다.
  if(k % 2 === 1){ // k값을 2로 나눈 나머지가 1인 홀수라면
    console.log(k); // k값을 출력한다.
  }
}


/*
while문을 사용하여 0부터 10까지 정수 중에서 짝수만을 작은 수부터 출력하시오.
ex)
0
2
4
6
8

while (var l = 0; l < 10; l++){// unexpected token var 잘못된 식이라고 에러 메시지 // 0부터 시작해서 10미만 일때까지 1씩 증가한다.
  if(l % 2 === 0){//2로 나누고 나머지가 0인 짝수라면 
    console.log(l);//출력한다.
  }
}


var l = 0; // l값을 0으로 할당한다.
while(l < 10){ // l값이 10미만 일때까지 반복한다.
  if(l % 2 === 0) console.log(l); // l값을 2로 나눈 나머지가 0인 짝수라면 l값을 출력한다.
  l++; // l값을 1씩 증가한다.
} // 질문 : 주석처리한 바로 위의 while문을 for문과 같은 방법으로 코딩하니 unexpected token var 라고 메시지가 나오는데요. 무슨 뜻인가요? 


/*
while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
ex)
9
7
5
3
1


var m = 10; // m값을 10으로 할당한다.
while(m > 0){ // m값이 0보다 클때까지 반복한다.
  if(m % 2 === 1) console.log(m); // m값을 2로 나눈 나머지가 1인 홀수 일때 m값을 출력한다.
  m--; // m값을 1씩 감소한다.
}


/*
삼각형출력하기

다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라.
개행문자('\n')를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관게없다.

// 높이(line)가 5
*
**
***
****
*****

*/
var star = '*';
var line = 1;
/*
트리 출력하기

다음을 참고하여 *(별)로 트리를 문자열로 완성하라.
개행문자('\n')를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자('\n')로 끝나도 관게없다.

// 높이(line)가 3일때 + 높이(line)가 5일때
*
**
***
*
**
***
****
*****

*/