/*
JS 표준 내장 객체 
JS가 기본적으로 가지고 있는 객체 
String, Number, Array, Date, Math, ...
*/ 

// 1. Date 객체 
// 시간, 날짜에 대한 정보를 얻기 위해 사용 

let now = new Date();
console.log(now); 
// Mon Mar 04 2024 11:48:39 GMT+0900 (Korean Standard Time) 

// 1000ms === 1s 
// 1000ms * 3600 = 1000ms * 60 * 60 === 1s * 60 * 60 = 1h 
// 1000ms * 3600 * 24 === 24h 

// 1970년 1월 1일 기준으로 해당 ms만큼 지난 시간 
let Jan_02_1920 = new Date(1000 * 3600 * 24);
console.log(Jan_02_1920); 
//Fri Jan 02 1970 09:00:00 GMT+0900 (Korean Standard Time)

// new Date(year, month, day, hour, munites, seconds, ms)
// year: 4자리 
// month: 0(1월) ~ 11(12월)
// date: 1 ~ 31 / 값이 없으면 1로 처리 
// hour, munites, seconds, ms: 값이 없으면 0으로 처리 

console.log(new Date(2021, 2, 15)); 
// Mon Mar 15 2021 00:00:00 GMT+0900 (Korean Standard Time)
console.log(new Date(2021, 2, 15, 18, 30, 15));
// Mon Mar 15 2021 18:30:15 GMT+0900 (Korean Standard Time)

// Date 객체 메서드
// 연, 월, 일 ...
console.log(now.getFullYear()); // 연도 4자리 
console.log(now.getFullYear() + '년');
console.log(now.getMonth()); // 월 (0 ~ 11)
console.log(now.getDate()); // 일
console.log(now.getHours()); // 시간
console.log(now.getMinutes()); // 분
console.log(now.getSeconds()); // 초
console.log(now.getMilliseconds()); // 밀리초
console.log(now.getDay()); // 요일 (0 ~ 6) 일요일: 0 -> 일 ~ 토

// 실습1: date 객체 사용해 오늘 요일 얻기 (3.4일 - 월요일)
console.log(now.getDay(1));

// 실습2: switch-case문 / if문으로 오늘 요일이 평일인지 주말인지 구별 
function checkWeekend() {

switch (now.getDay()) { // 0(일) ~ 6(토) 까지의 값
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        return '평일';
        // break; // return 작성시 break keyword 작성하지 얺아도 알아서 해당 ... 
    case 0:
    case 6:
        return '주말';
        // break;
    default:
        return '알 수 없음';
        // break;
}
console.log(checkWeekend()); // checkWeekend 함수의 반환값을 콘솔에 출력

}

// 2. if문 
if(
    now.getDay() === 1 ||  
    now.getDay() === 2 ||
    now.getDay() === 3 ||
    now.getDay() === 4 ||
    now.getDay() === 5 
) {
    console.log('평일');
} else {
    console.log('주말');
}

// 3.삼항연산자 
const todayStatus = now.getDay() === 0 || now.getDay() === 6 ? '주말' : '평일';
console.log(todayStatus);

// math 객체 
// 수학적인 상수와 함수를 위한 곳성과 메서드 

// 속성
console.log(Math.E); // 자연로그
console.log(Math.PI); // 파이
console.log(Math.SQRT2); // 2의 제곱근

// 메서드 
console.log(Math.min(10, 2, 6, -50)); //최소값: 인자로 전달받은 값 중 최소값 
console.log(Math.max(10, 2, 6, -50)); //최대값: 인자로 전달받은 값 중 최대값
console.log(Math.random()); // 0 <= x < 1 난수 생성
console.log(Math.round(3.8)); // 소수를 반올림하여 정수를 변환
console.log(Math.floor(3.4)); // 소수를 버림하여 정수를 변환
console.log(Math.ceil(3.4)); // 소수를 올림하여 정수를 변환

// Math.random() 응응 
// 

// 0 ~ 9 사이의 난수 생성
console.log(Math.floor(Math.random() * 10));

// 0 ~ 10 사이의 난수 생성 
console.log(Math.floor(Math.random() * 11));

// 1 ~ 100 사이의 난수 생성
console.log(Math.floor(Math.random() * 100) + 1);

// 20 ~ 22 사이의 난수 생성 
console.log(Math.floor(Math.random() * 3) + 20); 




