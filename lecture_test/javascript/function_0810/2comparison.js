// 1. 두 수를 입력받아 큰 수를 반환하는 함수

// 1번째 안 
/*
function bigger(a, b){ // 두개의 숫자를 비교하는 조건문 함수를 사용하여
  if (a > b) { //  a가 b보다 크다면
    console.log(a); // a를 출력한다.
  }else if (a === b){ // a와 b가 같은 수 라면
    console.log(a + "와" + b + "는 같은 수입니다."); // 'a와 b는 같은 수입니다.'를 출력한다.
  }
  else{ // 그렇지 않으면 ( a가 b보다 크지도 않고 같지도 않다면)
    console.log(b); // b를 출력한다.
  }
}
bigger(3, 3);
*/

function bigger(a, b){ // 두개의 숫자를 비교하는 조건문 함수를 사용하여
  if (a > b) { //  a가 b보다 크다면
    console.log(a); // a를 출력한다.
  } else{ // 그렇지 않으면 (a가 b보다 크지도 않고 같지도 않다면)
    console.log(b); // b를 출력한다.
  }
}
bigger(3, 7);



// 2번째 안
// 두 수를 입력받아 큰 수를 반환하는 함수

function bigger(c, d) { // 두개의 숫자를 비교하는 조건문 함수를 사용하여
  var result;  
  if (c > d) { // c가 d보다 크다면
    result = c; // c 이다.
  } 
    
   // else if(c === d){ // 두개의 숫자가 같다면
   //   result = "입력한 수는" + c + "로 같은 수를 비교하였습니다."; // 같은 수를 입력하여 비교함을 알려준다. 리턴값에 문자열이 섞이면 오류가 날 확률이 크므로 일반적인 사용방법은 아니다. 수정필요함.
   //   }
    
  else{ // c가 d보다 작거나 같다면
    result = d; // d이다.
  }
  return result; // 결과를 반환한다.
}
console.log(bigger(3, 9)); // 숫자를 입력하여 결과값을 확인한다.

// bigger(3, 8); // 숫자를 입력하여 결과값을 확인한다.

// 3번째 안
// Math.max() Math 객체를 이용

console.log(Math.max(5, 9)); // 빌트인 함수 이용. 완료.

