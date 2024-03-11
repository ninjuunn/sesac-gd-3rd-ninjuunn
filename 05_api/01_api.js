// // 간단한 비동기 코드 예시 
// // set time out을 사용해 비동기적으로 코드를 실행
// // 1, 3, 2순으로 콘솔에서 확인할 수 있음 
// // setTimeout은 해당 시간동안 코드가 실행을 멈추는 것이 아니라 
// // settimeout와 다음 줄에 작성된 코드가 모두 실행되고 있는 중 
// // 하지만 setTimeout의 두 번째 인자인 ms 시간이 지난 뒤에 
// // settimeout 내부의 코드를 실행하는 것  
// // console.log('hi 1')

// // // 비동기 코드 대표적인 예시 
// // setTimeout(() => {
// //     console.log('hi 2')
// // }, 1000);

// // console.log('hi 3');

// // -----------------------------------------------------------
// // console.log('----------------------')

// // 만약 비동기 코드를 동기적으로 또는 원하는 순서대로 실행시키고 싶다면?
// // 동기적으로 실행할 부분을 콜백 함수 내부에 작성하면 됨
// // console.log("hi 1");

// // setTimeout(() => {
// //   console.log("hi 2");
// //   console.log("hi 3");
// // }, 1000);

// // -----------------------------------------------------------

// // 사용자에게 아이디를 입력받고, 비동기적으로 서버 통신을 흉내내는 로그인 로직 
// // const id = prompt('아이드를 입력해주새요.');
// // let userId;
// // console.log('로그인 시도');

// // // 서버 통신 부분
// // setTimeout(() => {
// //     userId = 'layla01';
// //     console.log('서버에서 성공적으로 아이디 받아옴')
// // }, 2000);

// // if(id === userId) {
// //     console.log('로그인 성공');
// // } else {
// //     console.log('로그인 실패');
// // }

// // 무주건 실패하는 이유 
// // setTimeout 내부의 콜백함수가 실행되기 전 (서버에서 데이더를 받아오기 전)에 
// // 사용자에게 입력받은 id와 userId(undefined)를 비교하기 때문 
// // userId는 서버에서 데이더를 받아오지 못했기 때문에 값이 없음 
// // 즉, undefined 비교해서 조건문에서 항상 false가 되어 else 절만 실행함

// // -----------------------------------------------------------

// // => 정상적으로 입력받은 id와 서버에서 받은 userId를 비교하는 코드 만들어주세요? (3분)

// // const id = prompt('아이드를 입력해주새요.');
// // let userId;
// // console.log('로그인 시도');

// // // 서버 통신 부분
// // setTimeout(() => {
// //     userId = 'layla01';
// //     console.log('서버에서 성공적으로 아이디 받아옴')

// //     if(id === userId) {
// //         console.log('로그인 성공');
// //     } else {
// //         console.log('로그인 실패');
// //     }
// // }, 2000);

// // => 예시 

// // setTimeout(() => {
// //   let teacherList = "";
// //   let name = "layla"; // 임의로 서버에서 받아온 name
// //   if (!name) {
// //     console.log("강사 이름을 찾을 수 없습니다!");
// //   } else {
// //     teacherList += name;
// //     console.log(teacherList);
// //   }
// //   setTimeout(() => {
// //     name = "yuki"; // 임의로 서버에서 받아온 name
// //     if (!name) {
// //       console.log("강사 이름을 찾을 수 없습니다!");
// //     } else {
// //       teacherList += ", " + name;
// //       console.log(teacherList);
// //     }
// //     setTimeout(() => {
// //       name = "lily"; // 임의로 서버에서 받아온 name
// //       if (!name) {
// //         console.log("강사 이름을 찾을 수 없습니다!");
// //       } else {
// //         teacherList += ", " + name;
// //         console.log(teacherList);
// //       }
// //     }, 1000);
// //   }, 1000);
// // }, 1000);
 
// // ------------------------------------------------------------

// // Promise
// // Promise를 사용해 비동기 처리를 구현하는 예시 
// // const id = 'layla01';
// // let userId;

// // const promise = new Promise((resolve, reject) => {
// //     console.log('Promise start!');

// //     setTimeout(() => {
// //         userId = 'layla01';

// //         if(userId === id) {
// //             resolve(userId);
// //         } else {
// //             reject(new Error('서버에서 사용자의 아이디를 받아오는 것을 실패함'));
// //         }
// //     }, 2000);
// // });

// // promise
// //     .then((data) => {
// //         console.log(`userId는 ${data}입니다!`);
// //     })

// //     .catch((error) => {
// //         console.log(`error`);
// //     })

// //     .finally(() => {
// //         console.log('Promise 종료');
// //     });

// // ------------------------------------------------------------
// // arr 
// // n
// // func
// // cb 
// // el 
// // pw

// // async & away 사용
// // promise는 then울 체이닝 할 수 있어 너무 많은 체이닝을 할 경우 가독성이 떨어짐 
// // 이름 
// // promise를 다르게 사용하는 방법  
// // async : 해당 함수 내부에 
// // await : 

// // try & catch 
// // try 스코프를 실행함 
// // 실행 도중 어떤 에러 발생이나 문제가 발생하면 바로 catch 절로 이동 
 
// // const id = 'layla01'; // 성공
// // // const id = 'layla1' //살패
// // let userId;

// // // Promise를 함수에 담아 해당 함수 호출 시 Promise ....
// // const promiseFunc = () => {
// //     return new Promise((res, rej) => {
// //         console.log('promise 시작');

// //         // 서버에서 데이터 받아오는 시간 대체
// //         setTimeout(() => {
// //             userId = 'layla01';

// //             if(userId === id) {
// //                 res(userId)
// //             } else 
// //             rej (new Error('아이디가 틀렷습니다. 다시 한번 입력해주세요!'));
// //         },2000);
// //     });
// // };

// // const checkUserId = async () => {
// //     try {
// //         const result = await promiseFunc();
// //         console.log(result);
// //     } catch (error) {
// //         console.log(error);
// //     } finally {
// //         console.log('Promise 종료!');
// //     }
// // };

// // checkUserId();

// // ------------------------------------------------------------

// // json
// // 데이터를 전송하기 위해 경량의 데이터 포멧 
// // 여러 언어에서 쉽게 사용할 수 있어 서버와의 통신에서는 json으로 통신함 

// // [
// //     {
// //         "name": "버비",
// //         "age": 1,
// //         "employed": "true",
// //         "position": "이사",
// //         "address": {
// //             "gu": "마포구",
// //             "city": "서울시"
// //         }
// //     }
// // ]

// const jsonString =
//   '{"name":"장화","age":13,"isEmployed":true,"position": "이사", "address":{"gu":"마포구","city":"서울시"}}';

//   console.log(jsonString.name); // js 객체처럼 바로 사용할 수 없음 

// // json -> js 객체로 파싱하기 
// const obj = JSON.parse(jsonString);
// console.log(obj);
// console.log(obj.name);

// // js 객체 -> json으로 파싱하기 
// const jsonStr = JSON.stringify(obj);

// console.log(jsonStr);

// // ------------------------------------------------------------

// // open API 사용 

// // 고양이 사진 가져오기 

// // fetch('https://api.thecatapi.com/v1/images/search')
//     .then((response) => response.json())
//     .then((data) => {
//         // console.log(date);
//         const img = document.createElement('img');
//         img.src = data[0].url;
//         img.setAttribute('width', '500px');

//         document.querySelector('#cat').append(img);
//     });

// // ------------------------------------------------------------
// // OMDb api 사용해 영화 데이터 받아와 브라우저에 보여주기 

// async function getmovieData() {
//     let word = 'love';
//     const h3 = document.querySelector('h3');
//     h3.innerText = `검색된 키워드 : ${word}`;

//     // fetch으로 데에터 불러오기 
//     // response 변수에는 서버에서 받아온 데이터가 저장됨
//     // const response = await fetch(
//     //     `http://www.omdbapi.com/?i=tt3896198&apikey=2670387a&s=${word}`
//     // );
//     const movieData = await response.json();

//     console.log(movieData.Search);

//     // 불러온 데이터는 movieData.Search 배열 안에 각각의 개체로 있음 
//     // movieData.Search 배열을 반복문을 통해 돌아서 
//     for (let movie of movieData.Search) {
//         const div = document.createElement('div');
//         const img = document.createElement('img');
//         const p = document.createElement('p');

//         img.src = movie.Poster
//         img.alt = movie.Title
//         p.innerText = movie.Title;
//         div.append(img, p);
//         ul.append(div);
//     }
// }

// //  ------------------------------------------------------------

// // 
// // JSONPlaceholder API 사용해 가짜 
// // JSONPlaceholder 

// // 
// // 
// const getPost = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     });
// };

// // 
// // 
// const postPost = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST', 
//         body: JSON.stringify({
//             title: '제목제목제목',
//             body: '게시물 내용 내용 내용',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((data) => 
//         console.log(data)
//     ).catch((err) => {
//         // error 발생시 원하는 error 처리 
//         console.log(`err: `, err);
//     })
// };

// const deletePost = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts/1', {
//         method: 'DELETE', 
//     })
//         .then((response) => response.json())
//         .then((date) => console.log('Delete!'))
//         .catch((err) => console.log('delete err:', err));
// };



