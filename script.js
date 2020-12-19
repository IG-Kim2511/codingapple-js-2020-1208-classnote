// ●

/*🦄c2 this 1: object안의... this */
/* 
🚀this : 
그냥 썼을때 : window (그냥 썼을때 window 출력된것은 window 가 global object이라서 )
object안의 this : object
일반functtion 내부에서의 this:   전역객체 window 

method(object안의 function)안의... this : 그 function을 가지고 있는 object 전체
*/

// 1) this 그냥 쓰거나, 일반함수안에서 쓰면 window
// window:  global object
console.log(this);

function a() {
  console.log(this);
}
a();


// 2- 예외) strict mode + 일반함수 안에서 쓰면 undefined
// 'use strict';
function b() {
  console.log(this);
}
b();


// 3-1) object 안의 ...function 안의 this는, this를 가지고있는 함수의 object 전체를 의미함
console.log("3)")
// ( object안의 function = method)

var object3 = {  /* 3-1) */
  data: "Kim",

  간지함수: function () {
    console.log(this);
  },
};
object3.간지함수();


// 3-2) object1 안의 object2안의 ...function 안의 this : object2 (object 1 (x))

var object1 = {

  object2: {    /* 3-2) */

    간지함수: function () {
      console.log(this);
    },
  },
};
object1.object2.간지함수();



/*🦄c3 this 2: eventListener안. constructor안. object안. arrow function안의 this */
/* 
🍉this

2) constructor안에서 this:
: instance를 뜻함 
:  = 새로 생성되는 object

4) eventListener안에서 this:
: e.currentTarget을 뜻함
: 지금 이벤트가 동작하는 곳 
: ex)  여기에서는 클릭이벤트가 동작하는 곳...'버튼'을 뜻함

4-2)
eventListener안의... this : =e.currentTarget. 

eventListener안의 function안의...  this : = 그냥 일반함수안의 this  = window


6) object안의... this :  object  (c2에서 다룬 내용)

6-2)일반 함수안의 this : 고정되어 있음

object안의 function안의... this : 그 function을 가지고 있는 object


6-3) arrow function 안의 this: 바로 위의 this 값이 무엇인가에 따라서 바뀜
 (👉4강에서 추가 설명)

object안의 arrow function 안의..this : window

object안의 function안의 arrow function 안의... this : object

👉
 this를 재설정하지않고 바로 위의 this 값을 그대로 물려받아서 사용.
 arrow function을 사용하는 이유 &장점  
*/

/* 2) constructor  (나중에 자세히 설명함)
object를 여러개 만들고싶을때, function을 이용해서 여러개 만들 수 있음.
function 안에 this를 쓰면 constructor가 됨
this는 새로 생성되는 object이고, instance라고 불림. */

function 기계() {
  this.이름 = "Kim";
}
var 오브젝트 = new 기계();


// 4)

document.getElementById("버튼").addEventListener("click", function () {
  console.log(this);  /* 4) */
});

document.getElementById("버튼").addEventListener("click", function (e) {
  console.log(e.currentTarget); /* 4) */
});

// 4-2) ~~.forEach(function(){})

document.getElementById("버튼2").addEventListener("click", function (e) {
  var 어레이 = [1, 2, 3];
  어레이.forEach(function () {
    console.log(this);  /* 4-2) eventListener안의 function안의...  this : window */
  });
});


// 6)

var 오브젝트 = {
  이름들: ["김", "이", "박"],
  함수: function () {
    오브젝트.이름들.forEach(function () {     /*  6-2) */
      console.log(this);  
    });
  },
};

오브젝트.함수();

// 6-2)

var 오브젝트2 = {
  이름들: ["사과", "바나나", "딸기"],
  함수: function () {
    오브젝트.이름들.forEach(() => {   /* 6-3)arrow function : */
      console.log(this);  
    });
  },
};
오브젝트2.함수();


// 🦄c4 this3 : Arrow function의 this, arrow function쓰는 법

/*
2-1) 일반함수 만들기.
2-2 실행 */
function 함수(){}   /* 2-1)  */
var 함수 = function( ){ }  /* 2-1)  */

함수();  /* 2-2)  */


/* 4)
 Arrow function 쓰는 이유
1. input, output 보기 쉬윔
2. parameter 의 round braket ( ) 생략 가능 (parameter이 1개일때)
3. curly braket { } 생략 가능
4. return 생략 가능
 */

var 함수 = function(x){return x*2 }

var 애로우2 = x => { return x * 2 }

var 애로우3 = x => x * 2 ;


/* 6)
🚀arrow function의 this :
arrow function을 쓰면 내부에서 this값을 쓸 때 밖에 있던 this값을 그대로 사용합니다.
(함수를 쓸 때.. 함수가 쓰인 위치에 따라서 내부의 this값이 변한다고 저번시간에 배웠습니다. )

근데 arrow function은 어디서 쓰든간에 내부의 this 값을 변화시키지 않습니다. 
바깥에 있던 this의 의미를 그대로 내부에서도 사용하는 함수가 바로 arrow function 이라는 함수입니다. 
(이게 장점 4이자 arrow function을 쓰는 핵심 이유입니다.) 
*/

/* 8)
(eventListener + function 안의... this : = e.currentTarget. )

eventListener + arrow function 안의... this : window

👉this대신 e.currnetTarget 쓰면 e.currnetTarget 정확히 타겟팅 됨 
 eventListener + arrow function 안의... e.currnetTarget */

document.querySelector('.c3 #버튼3').addEventListener('click',(e)=>{
console.log(this)
});
document.querySelector('.c3 #버튼4').addEventListener('click',(e)=>{
console.log(e.currentTarget)
});


/* 10)
(object + function안의... this : object)

object + arrow function안의... this : window */
console.log("👇")

var object4 = {
  이름: 111,
  함수: function(){
    return this
  }
}
object4.함수();
console.log(object4.함수())


var object4_2 = {
  이름: 222,
  함수: ()=>{
    return this
  }
}
object4_2.함수();
console.log(object4_2.함수())

