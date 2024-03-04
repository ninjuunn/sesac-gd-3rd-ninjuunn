console.log('connected')

// for문 
/*
    for (for문 내에서 사용할 변수 선언; 조건식 (어디까지 증가/감소할지 작성); 증감) {
        반복할 코드 
    }
*/
// i + 1 = 1 / i += 1 /  i++ -> 모두 동일함
// i - 1 = 1 / i -= 1 /  i-- -> 모두 동일함
// i =++: 변수 i에서 값을 꺼낸 뒤, 1을 더함 
// i --: 변수 i에서 값을 꺼낸 뒤, 1을 뺌

// 5씩 늘리고 싶을 때 -> i += 5 -> i를 5씩 늘림

for (let i = 0; i < 10; i++) {
    // console.log('안녕' , i);
    console.log('안녕 ${i}');
}

for (let i = 0; i < 10; i += 3) {
    console.log('hey' , i)
}

// 1부터 5까지 씩 증가하면서 출력하는 방법 
// 1. i ++
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
// 2. i < 6 
for (let i = 0; i < 6; i++) {
    console.log(i)
}

// for문을 사용해 5부터 1까지 출력하기
for (let i = 5; i >= 1; i--) {
    console.log(i)
}

// 1부터 n까지 모든 수를 더해 result로 콘솔에 찍기!
let n = 10;
let result = 0; 
for (let i = 1; i <= n; i++) {
    result += i;
}
console.log(result);

// for문과 배열 함께 사용하기
// 배열의 모든 요소 출력하기 
let cafe = ['americano', 'latte', 'esperesso', 'tea']
console.log(cafe.length); //배열의 길이를 출력 -> 4

for (let i = 0; i < cafe,length; i++) {
    console.log('cafe menu', cafe[i]);
    // i가 0일 때 cafe [0]
    // i가 1일 반복 cafe[1]
    // i가 2일 반복 cafe[2]
    // i가 3일 반복 cafe[3]
    // i가 5일 반복 하지 않아요! -> i가 4이기 때문
}

// 배열 요소의 총 합 구하기 
let numArr = [99, 88, 77, 66, 55]
let numSum = 0;

for (let i = 0; i < numArr.length; i++) {
    numSum = numSum + numArr[i];
    console.log(numSum);
}
console.log(numSum)

// for문과 if문 함께 사용
// 짝수만 출력한다
// 1. for문만 사용
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// 2. if문과 함께 사용
for (let i = 2; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

console.clear()

// 구구단 출력하기 
// const number = 2;
const number = Number(prompt('구구단을 계산할 숫자를 입력하세요'))
console.log(number + '단');
for (let i = 1; i < 10; i++) {
    // console.log(number + '*' + i + '=' + number * i);
    console.log(`${number} * ${i} = ${number * i}`);
}

// 이중 for문 
for (let i = 0; i < 5; i++) {
    console.log('i :', i);

    for (let j = 0; j < 10; j++) {
        console.log(`현재 i는 ${i}이고, j는 ${j}`); //i는 0, j는 1
    }
}

// 실습 

console.clear()



// 배열의 반복 실습

let numArr = [];
for (let i = 0; i < 100; i++) {
    numArr.push(i + 1); 
}

// 합 구하기
// 1. for문
let sum1 = 0;
for (let i = 0; i < numArr.length; i++) {
    sum1 = sum1 + numArr[i]
    // sum1 += numArr[i]
}
console.log(sum1);

// 2. for off문 
let sum2 = 0 
// numArr 뱌열의 있는 모든 요소를 num이라고 지칭하면서 반복한다.
for (let num of numArr) {
    sum2 = sum2 + num;
    // sum2 += num; 
}
console.log(sum2);

// 3. forEach문 
let sum3 = 0 
numArr.forEach(function(num) {sum3 = sum3 + num;
    // sum3 += num
});
console.log(sum3);

// 화살표 함수로 작성 
numArr.forEach((num) => {
    sum3 = sum3 + num;
    // sum3 += num
});

}


