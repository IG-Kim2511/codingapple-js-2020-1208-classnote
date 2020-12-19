// ●

/*🦄c2 this 1: object안의... this */
/* 
🚀this : 그 함수(method)를 가지고 있는 object
그냥 썼을때 window 출력된것은 window 가 global object이라서 */


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

eventListener안의 function안의...  this : window


6) object안의... this :  object  (c2에서 다룬 내용)

6-2)일반 함수안의 this : 고정되어 있음

object안의 function안의... this : window


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
