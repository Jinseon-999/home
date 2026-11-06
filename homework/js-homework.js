JavaScript 기초 문법 및 연산자 복습 문제 (100문제)
학습 범위: 변수 선언, 자료형, 산술·증감·복합대입·비교·논리·삼항연산자, 자료형 변환
학습 방법: 코드를 직접 작성하거나 결과를 먼저 예상한 후 실행하여 비교하세요. 각 문제는 독립적으로 실행하고,
조건문·반복문·함수는 사용하지 마세요.


PART 1. 변수 선언과 값 변경 (1~10)


문제 1. let으로 age 변수를 선언하고 25를 저장한 후 출력하세요.

let age = 25;
console.log(age);

문제 2. const로 userName 변수를 선언하고 "홍길동"을 저장한 후 출력하세요.

const userName =  '홍길동';
console.log(userName);

문제 3. let으로 price를 선언하고 1000을 저장하세요. 이후 2000으로 변경하고 출력하세요.

let price = 1000;
price = 2000;
console.log(price);

문제 4. 값을 저장하지 않은 data 변수를 선언하고 출력하세요. 어떤 값이 출력되는지 확인하세요.

let data;
console.log(data);
undefined

문제 5. 이름 김철수, 나이 30, 키 178.5, 학생 여부 false를 각각 변수에 저장하고 출력하세요.

let name = '김철수';
let age = 30;
let height = 178.5;
let isStudent = false;

console.log('이름 : ' + name);
console.log('나이 : ' + age);
console.log('키 : ' + height);
console.log('학생 여부 : ' + isStudent);

*/

문제 6. 
        let a = 10;         
        let b = a;
        a = 30;

        console.log(a); 30
        console.log(b); 10
        출력 결과를 예상하세요.

문제 7. let score = 80; let score = 90; 코드의 오류 원인을 설명하고 수정하세요.

        변수초기화를하고, 80으로 할당했으니 
        score = 90; 로 값을 바꿔주는게 맞다.     

문제 8. const maxValue = 100; maxValue = 200; 코드의 오류 원인을 설명하세요.

        const 는 상수선언이라 값이 바뀌지않는다.

문제 9. 다음 변수명 중 사용할 수 없는 것을 찾고 수정하세요.

    let 1score = 100;          -> let score1 = 100;
    let myName = "홍길동";
    let user age = 20;         -> let userAge = 20; 
    let $money = 5000;
    let user-name = "김철수";   -> let user_name = "김철수";

문제 10. 다음 중 중복 선언이 가능한 코드를 찾으세요.

    A: var a = 10; var a = 20;           ◁- var는 중복 선언가능
    B: let b = 10; let b = 20;
    C: const c = 10; const c = 20;


PART 2. 산술연산자 (11~20)


문제 11. a=15, b=4를 선언하고 덧셈, 뺄셈, 곱셈, 나눗셈을 각각 출력하세요.

let a = 15;
let b = 4;

console.log( a + b);
console.log( a - b);
console.log( a * b);
console.log( a / b);

문제 12. 100을 7로 나눈 나머지를 출력하세요.

let a = 100;
let b = 7;

console.log( a % b);

문제 13. 2의 5제곱을 ** 연산자로 계산하여 출력하세요.

let a = 2;
let b = 5;

console.log( a ** b);

문제 14. a=10, b=3일 때 a / b와 a % b의 결과를 예상하세요.

a / b = 3.33..
a % b = 1

문제 15. console.log(10 + 5 * 2); 결과를 예상하세요.

20

문제 16. console.log((10 + 5) * 2); 결과를 예상하세요.

30

문제 17. console.log(20 - 4 * 3 + 10); 결과를 예상하세요.

18

문제 18. console.log(2 ** 3 + 10 % 3 * 5); 결과를 예상하세요.

13

문제 19. 사과 한 개 1200원, 5개 구매 시 총금액을 변수와 연산자로 계산하세요.

let apple = 1200;

console.log(apple * 5);

문제 20. 125분을 시간과 분으로 나누어 출력하세요. /, %, Math.floor()를 사용하세요.

let mintue = 125
let hour = 60

console.log(mintue / hour);
console.log(mintue % hour);
Math.floor()
PART 3. 문자열 결합과 연산 순서 (21~30)


문제 21. console.log(10 + 20 + "30"); 결과를 예상하세요.

문제 22. console.log("10" + 20 + 30); 결과를 예상하세요.

문제 23. console.log(10 + "20" + 30); 결과를 예상하세요.

문제 24. console.log(10 + 20 + 30 + "원"); 결과를 예상하세요.

문제 25. console.log("합계: " + 10 + 20); 결과를 예상하세요.

문제 26. console.log("합계: " + (10 + 20)); 결과를 예상하세요.

문제 27. a=5, b="10"일 때 a+b와 a*b의 결과를 예상하세요.

문제 28. "100" - 20, "100" * 2, "100" / 4의 결과를 예상하세요.

문제 29. 이름과 나이를 변수에 저장하고 "홍길동님의 나이는 25세입니다."를 문자열 결합으로 출력하세요.

문제 30. a=10, b=20, c="30"일 때 다음 결과를 예상하세요.

    a+b+c
    c+a+b
    a+c+b
    a*2+c


PART 4. 증감연산자 (31~45)


문제 31. let a=10; a++; console.log(a); 결과를 예상하세요.

문제 32. let a=10; a--; a--; console.log(a); 결과를 예상하세요.

문제 33. let a=5; console.log(a++); console.log(a); 결과를 예상하세요.

문제 34. let a=5; console.log(++a); console.log(a); 결과를 예상하세요.

문제 35. let a=10; console.log(a--); console.log(a); 결과를 예상하세요.

문제 36. let a=10; console.log(--a); console.log(a); 결과를 예상하세요.

문제 37. let a=10; let b=a++; console.log(a,b); 결과를 예상하세요.

문제 38. let a=10; let b=++a; console.log(a,b); 결과를 예상하세요.

문제 39. let a=5, b=10; let c=a++ + b; console.log(a,b,c); 결과를 예상하세요.

문제 40. let a=5, b=10; let c=++a + b--; console.log(a,b,c); 결과를 예상하세요.

문제 41. let a=10, b=3; let c=a-- - ++b; console.log(a,b,c); 결과를 예상하세요.

문제 42. let x=5, y=10; x=++y - x++; console.log(x,y); 결과를 예상하세요.

문제 43. let a=10, b=20; a=a++ + ++b; console.log(a,b); 결과를 예상하세요.

문제 44. 
        let a=5, b=10;
        b=a++ + --b;
        a=++a + b--;
        console.log(a,b);
        결과를 예상하세요.

문제 45. 
        let x=10, y=5, z=3;
        x=++y + z--;
        y=x-- - ++z;
        z=x++ + y--;
        console.log(x,y,z);
        결과를 예상하세요.


PART 5. 복합대입연산자 (46~55)


문제 46. let a=10; a+=5; console.log(a); 결과를 예상하세요.

문제 47. let a=20; a-=7; console.log(a); 결과를 예상하세요.

문제 48. let a=5; a*=4; console.log(a); 결과를 예상하세요.

문제 49. let a=100; a/=4; console.log(a); 결과를 예상하세요.

문제 50. let a=17; a%=5; console.log(a); 결과를 예상하세요.

문제 51. let a=10; a+=5; a*=2; a-=8; console.log(a); 결과를 예상하세요.

문제 52. let a=100; a/=2; a+=10; a%=7; console.log(a); 결과를 예상하세요.

문제 53. 다음 코드를 복합대입연산자로 바꾸세요.

    let a=10;
    a=a+20; a=a*3; a=a-15; a=a/5;

문제 54. 계좌 잔액 100000원에서 30000원 입금, 25000원 출금 후 잔액을 복합대입연산자로 출력하세요.

문제 55. 캐릭터 체력 100에서 30 감소, 20 회복, 15 감소 후 최종 체력을 복합대입연산자로 출력하세요.


PART 6. 비교연산자 (56~65)


문제 56. 10 == 10과 10 != 10의 결과를 예상하세요.

문제 57. 10 > 5, 10 < 5, 10 >= 10, 10 <= 9의 결과를 예상하세요.

문제 58. 10 == "10"과 10 === "10"의 결과를 예상하세요.

문제 59. 20 != "20"과 20 !== "20"의 결과를 예상하세요.

문제 60. a=15, b=20일 때 a>b, a<b, a==b의 결과를 예상하세요.

문제 61. age 변수를 선언하고 20세 이상인지 비교한 결과를 출력하세요.

문제 62. score 변수를 선언하고 60점 이상인지 비교한 결과를 출력하세요.

문제 63. a=10, b="10", c=20일 때 다음 결과를 예상하세요.

    a==b; a===b; a+10==c; a+b=="1010";

문제 64. 
    let a=5, b=10;
    console.log(a++ == 5);
    console.log(a);
    console.log(++b == 11);
    console.log(b);
    결과를 예상하세요.  

문제 65. a=100, b="100"의 값과 자료형이 모두 같은지 비교하는 코드를 작성하세요.


PART 7. 논리연산자 (66~75)


문제 66. 다음 && 결과를 예상하세요: true&&true, true&&false, false&&true, false&&false.

문제 67. 다음 || 결과를 예상하세요: true||true, true||false, false||true, false||false.

문제 68. !true, !false, !!true의 결과를 예상하세요.

문제 69. a=10, b=20일 때 a>5 && b>10의 결과를 예상하세요.

문제 70. a=10, b=20일 때 a>15 || b>15의 결과를 예상하세요.

문제 71. a=10, b=20일 때 !(a>5 && b>10)의 결과를 예상하세요.

문제 72. a=10, b=20일 때 다음 결과를 예상하세요.

    a==10 && b=="20"
    a==10 || b==="20"

문제 73. age=25일 때 나이가 20세 이상이면서 30세 이하인지 확인하는 논리식을 작성하세요.

문제 74. score=75, attendance=90일 때 점수 60 이상이면서 출석률 80 이상인지 확인하세요.

문제 75. a=10, b=20, c=30일 때 결과를 예상하세요.

    a<b && b<c
    a>b || c>b
    !(a==10)
    (a>5 && b<10) || c==30
    !(a>5) && b>10


PART 8. 삼항연산자 (76~85)


문제 76. age=20일 때 age>=19 ? "성인" : "미성년자"의 결과를 예상하세요.

문제 77. score=55일 때 score>=60 ? "합격" : "불합격"의 결과를 예상하세요.

문제 78. 숫자 10이 양수인지 아닌지 삼항연산자로 판단하여 출력하세요.

문제 79. a=10, b=20 중 더 큰 값을 삼항연산자로 출력하세요.

문제 80. let a=10; let result=a==10 ? 100 : 200; console.log(result); 결과를 예상하세요.

문제 81. let a=10, b=20; let result=a+(b>10 ? 5 : 15); 결과를 예상하세요.

문제 82. num=17이 짝수인지 홀수인지 삼항연산자로 출력하세요.

문제 83. price=25000일 때 30000원 이상이면 "무료배송", 아니면 "배송비 발생"을 출력하세요.

문제 84. score=85일 때 다음 결과를 예상하세요.

    score>=90 ? "A" : score>=80 ? "B" : "C"

문제 85. a=10, b=20일 때 다음 결과를 예상하세요.

    a>b ? a+5 : b+5


PART 9. 자료형 변환 (86~95)


문제 86. Number("100")의 결과를 예상하세요.

문제 87. String(100)의 결과를 예상하세요.

문제 88. 10 + "20"의 결과를 예상하세요.

문제 89. 10 + Number("20")의 결과를 예상하세요.

문제 90. String(10) + 20의 결과를 예상하세요.

문제 91. a="100", b="200"일 때 a+b와 Number(a)+Number(b)의 결과를 예상하세요.

문제 92. a=10, b="20", c=30일 때 a+b+c와 a+Number(b)+c의 결과를 예상하세요.

문제 93. Number("3.14") + 2와 String(100) + String(200)의 결과를 예상하세요.

문제 94. a="50", b=20일 때 a+b, Number(a)-b, Number(a)*b, Number(a)/b의 결과를 예상하세요.

문제 95. a="10", b=20, c="30"일 때 결과를 예상하세요.

    a+b+c
    Number(a)+b+Number(c)
    String(b)+a
    Number(a+b)


PART 10. 종합 응용 문제 (96~100)


문제 96. 쇼핑몰 결제: 상품 가격 15000원, 수량 3개, 배송비 3000원.

    1) 상품 총금액 계산 
    2) 배송비 포함 최종 결제금액 출력
    3) 50000원 이상인지 비교 
    4) 삼항연산자로 "고액 주문"/"일반 주문" 출력

문제 97. 시험 점수: 국어 85, 영어 90, 수학 75.

    1) 총점 계산 
    2) 평균 계산
    3) 평균 80 이상인지 비교
    4) 삼항연산자로 "우수"/"보통" 출력

문제 98. 은행 계좌: 초기 잔액 100000원.

    1) 50000원 입금 
    2) 30000원 출금 
    3) 20000원 추가 출금
    4) 복합대입연산자 사용 
    5) 최종 잔액 출력
    6) 잔액 100000원 이상인지 비교 
    7) "잔액 충분"/"잔액 부족" 출력
    
문제 99. 놀이공원: age=15, height=155, withParent=true.
입장 조건: 나이 14세 이상이고 키 150cm 이상이거나, 14세 미만이라도 보호자 동반이고 키 150cm 이상이면 입장 가능.

    1) 논리식으로 입장 여부 계산 
    2) 결과를 변수에 저장
    3) 삼항연산자로 "입장 가능"/"입장 불가" 출력
    4) 나이를 12로 변경해 재확인 5) 보호자 동반을 false로 변경해 재확인

문제 100. 다음 코드의 모든 출력 결과를 예상하고 이유를 설명하세요.

let a = 10;
let b = 20;
let c = "30";
a += 5;
b--;
a = ++b + a--;
console.log(a);
console.log(b);
console.log(c);
console.log(a + b + c);
console.log(a + Number(c) + b);
console.log(a > b);
console.log(a == "35");
console.log(a === "35");
let result1 = a > b && Number(c) > 20;
let result2 = a < b || c == 30;
console.log(result1);
console.log(result2);
let result3 = result1 ? a + b : a - b;
console.log(result3);
요구사항: 1) 출력 순서 2) 변수 변화 3) 전위/후위 증감 순서
4) 문자열 결합과 숫자 덧셈 구분 5) 비교·논리 결과 6) 삼항 선택 이유