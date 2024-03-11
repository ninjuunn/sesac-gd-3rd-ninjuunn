// click event 
$(".container").click(() => {
  console.log("event", event); // event 객체
  console.log("event.target", event.target); // event가 발생한 요소 (자기 자신)

  //   
  $(event.target).css("background-color", "purple");

  // 
  // $(".container").css("background-color", "skyblue");
});

// mouseover, mouseout 네비게이션 바에서 해당 요소가 보이고.
// 네비게이션 바를 마우스가 나가면 사라질 때 많이 사용

// mouseover event -> 해당 요소에 마우스가 올라갔을 때 실행
// $(".container").mouseover(() => {
//     console.log('마우스 올라감');
// });

// // 
// $(".container").mouseout(() => {
//     console.log('마우스 나감');
// });

// hover event -> css에서 더 많이 작성 
// mouseover, mouseout를 한 번에 지정 -> 인자로 함수 두 개 작성 
// 첫 번째 인자인 콜백함수는 mouseover일 때 실행항 코드를 작성
// 첫 번째 인자인 콜백함수는 mouseout일 때 실행항 코드를 작성
$(".container").hover(() => {
    console.log('hover 이벤트에서 마우스 올라감');
},
 () => {
    console.log('hover 나감');
 }
);

// scroll event
$(".container").scroll(() => {
    console.log('qkftod');
});

// 
// ------------------------------------------------------------------
// 키보드 이벤트 

// keydown 이벤트 : 선택한 요소에서 키보드를 누르는 이벤트가 발생할 경우 
//  
// 실시간 입력 처리하거나 

// =>>> 엔터 키 누리면 콘솔로 해당 input의 값 출력하기


// keyup event: 선택한 요소에서 키보드를 떼는 이벤트 발생할 경우 
// 키보드를 누리고 있는 동안에는 이벤트가 발생하지 않음 
// 사용자가 입력을 완료하거나 특정 키를 눌럿다가 

$("input[name=pw]").keydown((e) => {
    console.log('event', e);
    console.log('e.key', e.key);
    if (e.key === 'Enter') {
        console.log('dhfh');
        console.log('e.target.value');
    }
});

// 
// // on() : 이벤트를 걸겟다! addEventListener와 비슷 
// $('input[name=pw]').on('keyup', (e)) => {
//     console.log()
// });

// 엔터 키 누리면 콘솔로 해당 input의 값 출력하기



