// ●

/*c 02 this 키워드를 알아보자 1. 함수와 Object에서 사용하면 */
document.write("02 this 키워드를 알아보자 1. 함수와 Object에서 사용하면");
console.log("02 this 키워드를 알아보자 1. 함수와 Object에서 사용하면");

//  ● this 그냥 쓰거나, 일반함수안에서 쓰면 window
// window:  global object
console.log(this);

function a() {
  console.log(this);
}
a();

// ● strict mode + 일반함수 안에서 쓰면 undefined
// 'use strict';
function b() {
  console.log(this);
}
b();

// ● object 안의 function에서 this는  , this를 가지고있는 함수의 object 전체를 의미함
// ( object안의 function = method)

var 오브젝트1 = {
  data: "Kim",
  간지함수: function () {
    console.log("간지");
  },
};
오브젝트1.간지함수();

// ● object1 안의 object2안의 function 안의 this : object2 (object 1 (x))

var object1 = {
  object2: {
    간지함수: function () {
      console.log(this);
    },
  },
};
object1.object2.간지함수();

// ●오브젝트 es6 문법. 모두 같은 뜻
// 오브젝트이름:function(){}
// 오브젝트이름:()=>{}
// 오브젝트이름(){}

window.간지나는함수 = function () {
  console.log();
};

function 간지나는함수() {
  console.log(this);
}

// ● this : 그 함수를 가지고 있는 object
// 그냥 썼을때 window 출력된것은 window 가 global object이라서

/*c 03 this 키워드를 알아보자 2. event listener와 constructor */
document.write("03 this 키워드를 알아보자 2. event listener와 constructor");
console.log("03 this 키워드를 알아보자 2. event listener와 constructor");

//● constructor  (나중에 자세히 설명함)
// object를 여러개 만들고싶을때, function을 이용해서 여러개 만들 수 있음.
// function 안에 this를 쓰면 constructor가 됨
// this는 새로 생성되는 object이고, instance라고 불림.
function 기계() {
  this.이름 = "Kim";
}
var 오브젝트 = new 기계();

//● this = e.currnetTarget  지금 이벤트 동작하는곳 : 버튼

document.getElementById("버튼").addEventListener("click", function () {
  console.log(this);
});

document.getElementById("버튼").addEventListener("click", function (e) {
  console.log(e.currentTarget);
});

// ●forEach
// array자료보관함
// array에 반복문 돌리기 : 어레이.forEach
// forEach에는 콜백함수 추가
// 내부코드가 array안의 데이터 숫자만큼 반복됨

// ●여기서의 this : window
// 함수가 쓰인 위치에 따라 this값이 변함
// 이렇게 쌩으로 있는 콜백함수는 그냥 일반함수 취급.  일반 함수에서는 window

document.getElementById("버튼2").addEventListener("click", function (e) {
  var 어레이 = [1, 2, 3];
  어레이.forEach(function () {
    console.log(this);
  });
});

//● object안의 콜백함수 안의  this : window
// 근본없는 일반 함수 취급...

var 오브젝트 = {
  이름들: ["김", "이", "박"],
  함수: function () {
    오브젝트.이름들.forEach(function () {
      console.log(this);
    });
  },
};

오브젝트.함수();

// ●arrow function :
//  this를 재설정하지않고 그대로 물려받아서 사용.
//  arrow function을 사용하는 이유 &장점
// this가 자꾸 바뀌어서 사용하던 것들..이제는 더이상 사용안해도 됨.
// arrow function 사용하면 되므로..

var 오브젝트2 = {
  이름들: ["사과", "바나나", "딸기"],
  함수: function () {
    오브젝트.이름들.forEach(() => {
      console.log(this);
    });
  },
};
오브젝트2.함수();
