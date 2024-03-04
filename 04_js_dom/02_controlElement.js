/*
1. 태그 내부 content 다루기 
- inneText : 요소 안의 텍스트를 가져와, 입력된 문자열로 변경 
- innerHTML : 요소 안의 코드를 가져와, 입력된 문자열로 변경 
*/
let div1 = document.getElementById('div1');
console.log(div1);
console.log(div1.innerText);
console.log(div1.innerHTML);

// 해당 요소 내부의 텍스트 변경
div1.innerText = 
'여기는 첫 번째 div이면서 js에서 내용 수정했다'

// 해당 요소 태그를 작성해도 태그 적용 안됨
div1.innerText = 
'여기는 첫 번째 div이면서 js에서 내용 수정했다'

// 해당 요소 내부의 html 변경
div1.innerHTML = '여기는 첫 번째 div 태그면서 innerHTML'

div1.innerHTML = '<ul><li>1</li></ul>'

// 남는 공백 문자 체거

// ======================================================
// 2. 속성 접근 
// 요소 속성 거져오기 
// 요소.getAttribute('속성명')
// 요소 속성 수정
// 요소.setAttribute('속성명'. '속성값')

let naver = document.getElementById('naver');
console.log(naver);

// a태그의 href
console.log(naver.getAttribute('href'));

let imgEl = document.getElementById('beach');

console.log(imgEl.getAttribute('src'));
console.log(imgEl.src); // 점 접근법

// 속성 수정 
naver.setAttribute('href', 'http://www.google.co.kr');
imgEl.setAttribute('src', './img/beach2.jpg');

naver.href = 'https://github.com/' // 점 접근법 

// ==============================
// 3. 스타일 변경 
let flowers = document.querySelectorAll('#flower li');
for (let li of flowers) {
    // 스타일 속성 지정 
    // li.style.backgroundColor = 'skyblue';
    // li.style.color = 'green';
    // 클래스 추가 
    li.classList.add('changeStyle')
} 

// 클래스 가져오기 
console.log(flowers[0].classList); 
// 클래스 치우기 
console.log(flowers[0].classList); 
// 
flowers[0].classList.remove('changeStyle');
// 클래스 
console.log(flowers[0].classList.contains('changeStyle'))
// 
flowers[0].classList.toggle('changeStyle')
flowers[1].classList.toggle('changeStyle')

// ======================================================

// 4. 부모 자식 노드 
const perentEl = document.querySelector('#flower'); // ul 
const childEl = document.querySelector('#flower .pink'); // ul > li.pink

// 자식 노드 선택하기 

console.log(perentEl.children); // ul의 ... 
console.log(perentEl.children[2]);
// 자식 요소에 접근하려면 배열 접근 방식을 따름 
// 자식이 하나여도 동일 

// 부모 노드 접근 
// 요소 자체에 접근 
console.log(childEl.parentNode); // childEl의 부모를 선택 

// 현제 노드 접근
// 위 노드 접근 
console.log(childEl.previousElementSibling); // 앞 형제 요소가 없기 때문에 null
console.log(childEl.parentNode.children[2].previousElementSibling);
// 아래 노드 접근 
console.log(childEl.nextElementSibling);

// ======================================================

// 요소 생성 추가, 삭제
const container = document.querySelector('.container')

// 요소 생성 
const pEl = document.createElement('p');
pEl.innerHTML = '새로 ..'
pEl.style.fontSize = '30px';
pEl.id = 'append-d';

console.log(pEl);

// 
// 
// 
// 여러 자식 요소 한 번에 삽입 가능합니다. 마지막 한 번 마지막 한 번 총 두 개를 만들었습니다. 여러 개 사용 가능하다. 여러 번 사용 스타일 또 똑 같이 들어간다. 
container.append(pEl);

const pEl2 = document.createElement('p');
container.append(pE12); 

container.append(pEl, pE12); 

// div 3개 "안녕"

