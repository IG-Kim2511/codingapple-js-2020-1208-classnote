// 🦄🦄c0-2 this 공식 정리

/* 
🚀this 공식 : 

--2강--
⚡초보로써, 쓸때마다 'console.log(this);'해서 어느것인지 확인하는 습관 들이자

그냥 썼을때 : window (그냥 썼을때 window 출력된것은 window 가 global object이라서 )

object안의 함수(method)안의 this : 그 function을 가지고 있는 object

일반function 내부에서의 this:   전역객체 window 

'use strict' mode + 일반함수 안에서 쓰면 undefined

method(object안의 function)안의... this : 그 function을 가지고 있는 object 전체


--3강--
2) constructor안에서 this:
: instance를 뜻함 
:  = 새로 생성되는 object

4) eventListener안에서 this:
: e.currentTarget을 뜻함

eventListener안의... this : =e.currentTarget. 

콜백함수 안의 this = 일반함수 안의 this = window
(ex. eventlister안의 일반함수 안의, forEach함수안의 일반함수 =  콜백함수 )

6) object안의 함수(method)안의 this : 그 function을 가지고 있는 object  (c2에서 다룬 내용)

6-3) arrow function 안의 this: 무조건 바로 위의 this 값을 따라감
 (👉4강에서 추가 설명)

object안의 arrow function 안의..this : window  (👉6강에서 추가 설명)

object안의 function안의 arrow function 안의... this : object

👉
 this를 재설정하지않고 바로 위의 this 값을 그대로 물려받아서 사용.
 arrow function을 사용하는 이유 &장점  


--4강--
🚀arrow function의 this :
arrow function을 쓰면 내부에서 this값을 쓸 때 밖에 있던 this값을 그대로 사용합니다.

(eventListener + function 안의... this : = e.currentTarget. )

eventListener + arrow function 안의... this : window
👉this대신 e.currnetTarget 쓰면 e.currnetTarget 정확히 타겟팅 됨 
 eventListener + arrow function 안의... e.currnetTarget

(object + function안의... this : object)

object + arrow function안의... this : window 


--6강--
-a: 일반function + this : setTimeout안의 함수는 콜백함수 = 일반함수 👉 콜백함수의 this = window 

-b: arrow function + this  = arrow function밖에 있던 this값 (eventListener +function안의..this) 그대로 사용 = e.currentTarget
*/


/*🦄c2 this 1: object안의... this */
/* 
🚀this 공식 : 
초보로써, 쓸때마다 'console.log(this);'해서 어느것인지 확인하는 습관 들이자

그냥 썼을때 : window (그냥 썼을때 window 출력된것은 window 가 global object이라서 )
object안의 함수(method)안의 this : 그 function을 가지고 있는 object
일반function 내부에서의 this:   전역객체 window 
'use strict' mode + 일반함수 안에서 쓰면 undefined

method(object안의 function)안의... this : 그 function을 가지고 있는 object 전체
*/

/* 
this의 의미:

내가 담겨있는 object가 this의 정확한 의미
*/



// 1) this 그냥 쓰거나, 일반함수안에서 쓰면 window
// window:  global object
console.log(this);

function a() {
  console.log(this);
}
a();


// 2- 예외) 'use strict' mode + 일반함수 안에서 쓰면 undefined
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

2)⚡ constructor안에서 this:
: instance를 뜻함 
:  = 새로 생성되는 object

4)⚡ eventListener안에서 this:
: e.currentTarget을 뜻함
: 지금 이벤트가 동작하는 곳 
: ex)  여기에서는 클릭이벤트가 동작하는 곳...'버튼'을 뜻함

4-2)
eventListener안의... this : =e.currentTarget. 

콜백함수 안의 this = 일반함수 안의 this = window
(ex. eventlister안의 일반함수 안의, forEach함수안의 일반함수 =  콜백함수 )


6) object안의 함수(method)안의 this : 그 function을 가지고 있는 object (c2에서 다룬 내용)

6-3)⚡ arrow function 안의 this: 무조건 바로 위의 this 값을 따라감
 (👉4강에서 추가 설명)

object안의 arrow function 안의..this : 여기 예시에서는.. window (👉6강에서 추가 설명)

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
    console.log(this);  /* 4-2)콜백함수 안의 this = 일반함수 안의 this = window */
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

// 6-3)

var 오브젝트2 = {
  이름들: ["사과", "바나나", "딸기"],
  함수: function () {
    오브젝트.이름들.forEach(() => {   /* 6-3)arrow function 안의 this: 여기서는 window */
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
⚡Arrow function 쓰는 이유
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


//  🦄c5 🦄c6 this & arrow function 연습문제 해설
console.log('c6')
// 👻캡쳐필기노트

// 2) q: 사람.sayHi()라고 작성하면 콘솔창에 ‘안녕 나는 손흥민’ 이라는 글자가 나와야합니다. 


var 사람 = {
  name: '손흥민', /*  */
  sayHi : function(){   /*  */
    console.log('안녕 나는 ' + this.name) /*  */
  }
}
사람.sayHi();


// 4) q:  자료.전부더하기()라고 쓰면 자료.data 안에 있는 모든 숫자를 더해서 콘솔창에 출력해주어야합니다. 

/* 
🚀 변수지정 공식 : 

~~~ 저장하는 변수 제작

반복문이 돌때마다 a값은 1,2,3,4,5

반복문 돌때마다 ~~~에 a를 더함

👉여기서 활용 : 
4-2) 합계 저장하는 변수 제작
4-3) 반복문이 돌때마다 a값은 1,2,3,4,5
4-4) 반복문 돌때마다 합계에 a를 더함
*/

var 자료 = { 
  data : [1,2,3,4,5] 
}

자료.전부더하기 = function(){
  var 합 = 0; /* 4-2)  */
  this.data.forEach(function(a){   /* 4-3)  */
    합 = 합 + a;   /* 4-4)  */
  });
  console.log(합);
}
자료.전부더하기();


/*6) setTimeout 
이렇게 한줄 쓰시면 1000ms 후에 왼쪽에 있는 콜백함수 내의 코드를 실행해줍니다. 
그럼 1초후에 안녕이 콘솔창에 출력되겠네요.  */

setTimeout(function(){ console.log('c6 setTimeout') }, 1000)


/* 6-2)
 콜백함수 대신 내가 미리 만들어놓은 함수의 이름을 적어도 실행됩니다.  */

function 함수(){
  console.log('안녕')
}
setTimeout(함수, 1000)


/* 8-q) 버튼을 클릭하면, 지금 누른 버튼에 담긴 글자를 출력하는 기능*/

/*8-2) 일반함수 + this */

document.querySelector('.c5 #버튼1').addEventListener('click', function(){
  console.log(this.innerHTML) /*  */
});


/* -4) 일반함수 + 콜백함수 as arrow function + this

-q: setTimeout을 이용해서 1초 후에 this.innerHTML을 콘솔창에 출력하고 싶으면 어떻게 코드를 수정해야할까요?

-a: 일반function + this : setTimeout안의 함수는 콜백함수 = 일반함수 👉 콜백함수의 this = window 
👻캡쳐필기노트(질문했었음)

-b: arrow function + this  = arrow function밖에 있던 this값 (eventListener +function안의..this) 그대로 사용 = e.currentTarget
*/

document.querySelector('.c5 #버튼2').addEventListener('click',
 function(){
  //  4-a) setTimeout(function(){} 
  setTimeout(()=>{ console.log(this.innerHTML) }, 1000);  /* 4-b) */
});


/* -5) -4 추가설명
this의 의미: 내가 담겨있는 object가 this의 정확한 의미

-4-a)
document.querySelector('~').setTimeout(function(){ this }, timeout);

오브젝트1.setTimeout을 했다면, setTimeout 내의 function(){} 안에서의 this는 오브젝트1 로 설정됩니다.

-4-b)
document.querySelector('~').addEventListener('click', 
function(){ 
  setTimeout(function(){ this }, timeout);
})

콜백함수로써의 setTimeout 은 어디 담겨있지 않기 때문에 오브젝트1.setTimeout 이렇게 쓰진 않죠?

실은 어디 담겨있습니다. window라는 오브젝트 보관함에 setTimeout이 미리 담겨있습니다.
콘솔창에 window를 출력해서 까보시면 진짜 들어있습니다.

window에 보관되어있기 때문에 그래서 우리가 setTimeout() 이렇게 써도 컴퓨터는 window.setTimeout() 이렇게 해석합니다.

그래서 안에서 this를 쓰시면 window가 나오는게 정확한 원리데스
*/


/* -6) 옛날 스타일
일반function + this를 that(작명)으로 변수화 + 변수 활용  */
document.querySelector('.c5 #버튼3').addEventListener('click', function(){
  var that = this;
  setTimeout(function(){ console.log(that.innerHTML) }, 1000); 
});


// 🦄c7 var let const와 assign,declare,scope (변수 신문법 총정리 1.)
// 👉js기초 15강


// 🦄c8 Hoisting, global variable(window variable), closure (변수 신문법 총정리 2.)
// 👻캡쳐필기노트

// 🦄c9 c10 변수, temporal deadzone, uninitialized, eventlistener-for반복문-let(변수 연습문제 해설)
// 👻캡쳐필기노트

// 🦄c11 Template literals(backquote). Tagged literal

// 2) Template literals(backquote)
// -1. 문자 중간 엔터키 입력이 가능합니다
var 문자 = `안녕
하세요`;

// -2. 변수를 집어넣을 때 편리합니다. 
//  문자 중간에 ${변수명} 

var 이름 = '손흥민';
var 문자 = `안녕하세요 ${이름} 입니다`;

// -3. HTML 템플릿 같은걸 보기쉽게 만들 수 있지요

var 문자 = `
<div>  
  ${이름}
</div>`;

/* 
4) Tagged Literals

-2. 함수를 실행시킬 때 소괄호가 아니라, 문자(작명)를 이용해서 함수를 실행시킬 수 있습니다. 

-3. ``만 넣어도 실행됨

-4. 왜 이따위 짓거리를 하는 거냐면, 함수뒤에 `문자`를 붙여 실행하면 그 `문자열`을 해체분석할 수 있기 때문입니다.  

(자주 쓰이지는 않음)*/

var 변수 = '손흥민';

function 해체분석기(){
  return 10 
}

해체분석기`안녕하세요 ${변수} 입니다`; /* 4-2) */
// 해체분석기 ``   /* 4-3) */


/* 6)

6-1) 함수의 파라미터 두개를 추가해줍니다.  (param1문자들, parma2변수들)

이제 이 함수는 막줄처럼 `문자열`을 이용해서 실행시키면 그 `문자열` 해체분석역할을 할 수 있습니다.

'param1문자들'은 back quote 내의 순수 문자만 골라서 Array로 만들어놓은 파라미터이고, 

"parma2변수들"은 back quote 내의 ${ } 변수를 담는 파라미터입니다. (back quote내에 변수가 2개, 3개이상이면, 파라미터를 뒤에 더 추가해주시면 됩니다)


6-2)
이제 이 파라미터들로 `문자열`을 재조합하거나 분석하거나 하실 수 있겠군요. 

문자들을 모아놓은 Array중 1번째 문자 + 변수를 출력해줄 겁니다.

그래서 ‘입니다손흥민’ 이라는 문자가 출력됩니다.   */

var 변수 = '손흥민';

function 해체분석기(param1문자들, parma2변수들){  /* 6-1) */
  console.log(param1문자들);
  console.log(parma2변수들);

  console.log(param1문자들[1] + parma2변수들);  /* 6-2 */
}
해체분석기`안녕하세요 ${변수} 입니다`;  /* 6-1) */


//🦄c12 Template literals / tagged literals 연습문제해설

// 2-Q) pants라는 변수가 0인 경우 ,`바지다팔렸어요 양말100`이라고 문자를 아예 바꿔버리고 싶습니다. 

var pants = 0;  /*  */
var socks = 100;
`바지${pants} 양말${socks}`;

function 해체분석기(글자들, 변수들1, 변수들2){
    if(변수들1 == 0){
      console.log(`바지다팔렸어요 양말` + 변수들2); /*  */
    }
}  
해체분석기`바지${pants} 양말${socks}`;


// 🦄c13 Spread Operator1: reference data type.  Deep copy
/* 
🍉2) spread operator :  “괄호제거 해주는 연산자”

curly bracket { }, square bracket [ ] 모두 없애줌

spread operator 는 

function의 round bracket ( )안,
object의 curly bracket { }안, 
array의 square bracket [ ]안
에서 보통 사용하셔야합니다. 

다른 곳에서 그냥 썼다간 에러가날 수 있습니다. 

(👉16강 spread operator VS Rest 파라미터)
*/

// -2)
var 어레이 = ['hello', 'world'];
console.log(어레이);
/*  spread operator를 붙여서 출력해보시면 괄호가 제거된 ‘hello’, ‘world’만 콘솔창에 출력됩니다.  */
console.log(...어레이);


// -4)
var 문자 = 'hello';
console.log(문자[0]); /* 문자를 이런식으로 array처럼 출력할 수 있음 */
console.log(문자[1]);

// -6)
var 문자 = 'hello';
console.log(문자);

console.log(...문자); /*  콘솔창에 h e l l o 라는 문자들이 출력됩니다.  */


// 🍉4) Array 합치기/복사에 매우 자주 씁니다.

var a = [1,2,3];
var b = [4,5];
var c = [...a, ...b]; /*  괄호를 없앤 a와 b를 집어넣는다는 소리입니다.  */



/* -2) a라는 어레이를 복사해서 b를 만들때 : 

4-2-2) reference data type(for Array, Object)라는 개념 :

a와 b 변수는 [1,2,3]을 각각 따로 하나씩 가진게 아니라 값 공유가 일어납니다   */

var a = [1,2,3];
var b = a;  /*  */

console.log(a);
console.log(b); /*  */

/* 4-2-4) Deep copy

값을 공유하지 않고 각각 독립적인 값을 저장하도록 array를 복사하기

spread를 이용해서 a값의 괄호를 제거해준 다음에 다시 괄호를 씌우는 겁니다. 

*/

var a = [1,2,3];
var b = [...a]; /*  */

console.log(a);
console.log(b);  /*  */


// 🍉 6) Object 합치기/복사에 매우 자주 씁니다.

// -2) object 두개를 합치고 싶으면 어떻게 합니까.
var o1 = { a : 1, b : 2 };
var o2 = { c : 3, ...o1 };  /*  */
console.log(o2);

// -4) 오브젝트의 key값 중복이 발생하면 어떻게될까요?
var o1 = { a : 1, b : 2};
var o2 = { a : 3, ...o1 };  /*  */
console.log(o2);  



// 🦄c14 Spread Operator2: array를 함수안의 parameter로 넣기, apply, call 함수
console.log('c14')


// 🍉2) array data [10,20,30]을 함수안의 parameter로 집어넣으려면?

// 2-1) 일반적인 함수
function 더하기(a,b,c){
  console.log(a + b + c)
}

// -1-a)
더하기(1,2,3);     /* 👉하드코딩 */

//  -1-b)
var 어레이 = [10, 20, 30];
더하기(어레이[0], 어레이[1], 어레이[2]);    /* 👉하드코딩 */


// -2-a) spread operator ⚡
var 어레이 = [3, 4, 5];
더하기(...어레이);


// -2-b) apply()  👉옛날방식 👻캡쳐필기노트 확인
var 어레이 = [3, 4, 5];
더하기.apply(undefined, 어레이);  



/* 🍉4) apply 함수
Q: person에 만들어놓은 person.인사()라는 함수를, person2에서도 쓰고 싶을때.

-2)
apply 함수의 사용법 : 
실행할함수.apply(적용할곳);
'person.인사()라는 함수를, person2라는 오브젝트에 적용해서 실행해주세요'  */
console.log('c14-4')

var person = {
  인사 : function(){
    console.log(this.name + '안녕') /*  */
  }
}

var person2 = {
  name : '손흥민'
}

person.인사();

person.인사.apply(person2); /* 4-2) */


/* 🍉6) apply, call 함수 - 함수의 parameter에 넣어서 실행하고 싶은 경우

apply와 call은 실행 결과도 똑같고 사용법도 똑같습니다.

-1) ~~.apply(~~~, [1] ) 뜻 :  👇

-2)
차이점은  함수()에 parameter를 넣어서 실행하고 싶은 경우에, 

~~~.apply(~~~, [1,2] ); : square braket [] 사용 
~~~.call(~~~, 1,2);     : braket 사용 x
*/

var person = {
  인사 : function(){
    console.log(this.name + '안녕2')
  }
}

var person2 = {
  name : '손흥민2'
}

var 어레이 = [3, 4, 5];

person.인사.apply(person2, [1]); /*  = person.인사(1) */

person.인사.apply(person2, [1,2,3]); /*-2)*/
person.인사.call(person2, 1,2,3);   /*-2)*/


// 🦄c15 default parameter/ arguments (함수 능력 업그레이드)


/* 🍉2) default 파라미터
파라미터에 기본값(default 값)을 줄 수 있습니다. */

function 더하기 (a, b = 10){  /*  */
  console.log(a + b)  /* 10+1 */
}

더하기(1);  /*  파라미터값을 실수로 안적거나 했을 경우  */
// 더하기(1,2);  이미 정해진 argument가 있으면 적용 x
// 더하기();    둘다 안적으면 NaN 출력됨

// -4) Operator도 사용가능

function 더하기 (a, b = 2 * 5){  /*  */
  console.log(a + b)  /* 1+2*5 */
}

더하기(1);

// -6) 다른 파라미터 사용 가능
function 더하기 (a, b = 2 * a){ /*  */
  console.log(a + b)  /* 3+2*3 */
}

더하기(3);

//  -8) 다른 함수 사용가능
function 임시함수(){  /*  */
  return 10   
}

function 더하기 (a, b = 임시함수() ){ /*  */
  console.log(a + b)  /* 3+10 */
}

더하기(3);


/* 🍉4) arguments  (옛날 방식,   최근은 ...rest사용함)
함수의 모든 파라미터들을 전부 한꺼번에 싸잡아서 다루고 싶은 경우가 있습니다. 

함수로 넘어오는 파라미터들을 유사 배열의 형태array-like형식 (array는 아니지만, array의 형식을 취함.)로 가져온다! 

4-4) 4-6) 그렇기 때문에 예제와 같이 배열 다루듯이 for문을 돌려서 사용할 수 있다.
*/

// 4-2)
function 함수(a,b,c){
  console.log(arguments)  /*  [2,3,4]를 담은 array 비슷한 자료가 출력됩니다. */
}

함수(2,3,4);


//4-4) i < arguments.length; : arguments의 갯수만큼 반복함
function 함수15(a,b,c){
  for (let i = 0; i < arguments.length; i++){   /* 4-4) */
    console.log(arguments[i])
  }
}
함수15(0,1,2);


//4-6)

function makeSum () { /*  */
let sum = 0;
  for(let i=0; i < arguments.length; i++) {  /* 4-6) */
  sum += arguments[i]
  }  
  console.log(sum);
  return sum;  
}
  makeSum(4, 7, 8, 9);  /*  */


// 🦄🦄c16 ...Rest 파라미터

/* 
🍉2) arguments VS Rest 파라미터

arguments는 옛날 문법 ,  ...rest파라미터가 더 유연함


2-4) 
🚀...rest파라미터 공식   (👉18강에서 설명)

1. 괄호 제거해줌

2. 문자를 array로 만들어줌 

3. function(...){}  : 함수 소괄호.... spread operator VS Rest 파라미터

function 함수(...){}  👉 함수를 선언할때의 …은 rest 파라미터

함수(...);  👉 함수를 사용할때의 …은 spread Operator입니다. 


*/


// 🍉4) a,b제외하고, 그 뒤에 나오는 모든 파라미터는 중괄호에 감싸서 array가 됩니다. 

function 함수16(a, b, ...파라미터들){    /* 👈  */
  console.log(파라미터들) /*  [3,4,5,6,7]이 출력됩니다. */
}

함수16(1,2,3,4,5,6,7);


/* 4-4)
rest는 항상 마지막 파라미터로 넣으셔야합니다. 

function 함수2(a, ...파라미터들, b){  👈
  console.log(파라미터들)
}

4-6)
2개 이상 사용할 수 없습니다

function 함수2(a, ...파라미터들, ...파라미터들2){   👈
  console.log(파라미터들)
}
*/

//🍉6-q) 반복문 : 모든 파라미터를 전부 하나씩 콘솔창에 출력해주는 함수를 만들고 싶습니다. 

function 함수16_2(a,b,...rest){
  for (var i = 0; i < rest.length; i++) {    /* 👈  */
    console.log(rest[i]);
  }
}
함수16_2(1,2,3,4,5,6,7,8);


// 🦄🦄c17 18 Spread operator, ...rest 연습문제 답 .Math.max(.) .sort(.) .join(.)
console.log('c18')

/* 1)  spread 문제
[‘김’, ‘밥’, 1, 2, 3 ] 이라는 array가 출력됩니다. 

글자를 spread하면 한글자씩 콤마로 분열이 되고 

array를 spread 하면 대괄호를 제거합니다. 
*/
var a = [1,2,3];
var b = '김밥'; /*  */
var c = [...b, ...a];
console.log(c);


/* 2) spread 문제
지랄맞은 코드들은 하나씩 차례로 번역하다보면 별거아닙니다. 

[ […a], …[…b] ][1] 여기서 a와 b를 집어넣어보면

[ [1,2,3], …[‘you’, ‘are’] ][1] 이렇게 되고 spread를 해치워버리면 

[ [1,2,3], ‘you’, ‘are’ ][1] 이렇게 되고 [1]이라는건 1번째 자료라는 뜻이니까 출력해보면

‘you’라는 글자가 콘솔창에 뜹니다.  
*/
var a = [1,2,3];
var b = ['you', 'are'];
var c = function(a,b){
  console.log( [[...a], ...[...b]][1] ) /*  */
}
c(a,b);


/* 3) default 파라미터 문제
함수는 두개의 파라미터를 입력할 수 있는데 3만 집어넣어서 실행하고 있습니다. 

a자리에 파라미터 하나만 집어넣었다는 소리군요.

그럼 b라는 파라미터는 default 파라미터가 발동해서 a * 2 라는 값을 가지게 됩니다. 

그래서 a는 3, b는 6이 됩니다.

9가 출력되겠네요. 
*/
function 함수18_3(a = 5, b = a * 2 ){   /*  */
  console.log(a + b);
  return 10
}
함수18_3(3);  /*  */


/* 4) default 파라미터 문제
함수에 파라미터를 입력하지 않았을 경우 그 파라미터를 출력해보면 undefined가 출력됩니다. 

파라미터로 undefined를 입력하면 어떻게 될까요?
그냥 파라미터를 입력하지 않은 것과 동일합니다.  
그래서 default 파라미터가 발동되어 15라는 결과를 출력해줍니다. 
*/

function 함수18_4(a = 5, b = a * 2 ){ /*  */
  console.log(a + b);
}
함수18_4(undefined, undefined); /*  */


/* 5) 파라미터👉 array로 만들기
: rest파라미터 사용

파라미터를 몇개 집어넣든 간에 그대로 array를 만들어서 출력해주네요.
*/

function 어레이18_5(...rest){ /*  */
  return rest /*  */
}

var newArray = 어레이18_5(1,2,3,4,5); /*  */
console.log(newArray); 


/* 6) Math.max() : 최댓값을 출력해주는 함수*/
/* 이렇게 쓰시면 6이라고 최댓값을 출력해줍니다.  */
console.log(Math.max(5,6,4,3) );

/*
 Math.max() 안에 array 안의 모든 데이터를 담고싶으면

array를 풀어헤쳐서 집어넣으면 되는게 아니겠습니까. */

var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];

console.log( Math.max(...numbers) );  /*  */


/* 
함수 소괄호에 적었는데 rest 파라미터가 아니냐고요? 

함수를 선언할 땐 …은 rest 파라미터

함수를 사용할 땐 …은 spread 연산자 입니다. 
*/

/* 
7) sort() : 글자를 알파벳순으로 정렬해주는 함수

array 내의 데이터를 알파벳순으로 정렬하고 싶을 때

sort()라는 array 내장함수를 붙여 사용합니다. (array에만 적용가능) */

 console.log( [ 'b', 'c', 'a' ].sort() );

/* 
sort()는 array에만 붙일 수 있습니다. 
문자를 array화 시켜버리기
bear라는 문자를 [‘b’, ‘e’, ‘a’, ‘r’] 이렇게 array에 담아서 알파벳을 정렬해버리는 겁니다. 

[…글자] 이렇게 하시면 글자를 spread로 풀어헤쳤다가 다시 array안에 담아줍니다. 

[‘b’, ‘e’, ‘a’, ‘r’] 이렇게 해준다는 소리입니다. 

그럼 이걸 sort()로 정렬해버리면 끝이죠?
 */

 function 정렬(글자){
  console.log( [...글자].sort() ) /*  */
}

정렬('bear');

/* 정렬한 데이터를 대괄호를 다시 벗기고 싶다면 , spread를 또 써주시면 되는거 아니겠습니까.*/
function 정렬_2(글자){
  console.log( ...[...글자].sort() )  /*  */
}

정렬_2('bear'); 

/* 8) 알파벳들의 출현 갯수를 세어주는 함수만들기
-2)
글자세기(‘aacbbb’) 라고 입력하면 콘솔창에

{ a : 2, b : 3, c : 1 }
▲ 이렇게 출력해주는 글자세기() 라는 함수를 만들고 싶습니다

-4)
 forEach() 반복문을 쓸 수 있습니다. 
forEach()는 근데 array에만 붙일 수 있는 함수입니다. 
글자에 붙이려면.. 글자를 array화 해주면 되는게 아닐까요?

*/

function 글자세기(글){

  var 결과 = {};  /* 변수지정공식 */
    [...글].forEach(function(a){

      /* pseudo-coding:
       만약에 결과에 a가있으면 +1해주고, 없으면 a:1집어넣으세요 */
       if( 결과[a] > 0 ){ 결과[a]++ } else { 결과[a] = 1 } 
    }); 
  console.log(결과)
  }

  글자세기('aaccbbb');


// 🦄🦄c19 Reference data type: array, object (Primitive data type : string, number)

/* 2)
Primitive data type들은 그냥 별건 없고 자료 자체가 변수에 저장되는 자료들입니다. 

문자, 숫자 자료형  */

var name = 'john';
var age = 20;


/* 4)Reference data type

Array, Object 자료형은 reference data type에 속합니다.

reference data type은 자료를 변수에 직접 저장하는게 아닌,

자료가 저쪽에 있습니다 라는 화살표 (레퍼런스)를 변수에 저장합니다
*/

var 사람 = { name : 'Kim' };


/* 6) 예제 1. 
Primitive 자료형
그럼 이름1, 이름2를 출력하면 각각 무엇이 나올까요?
이름1은 변경했으니 ‘박’이고, 이름2는 복사만했지 변경하진 않았으니 ‘김’ 입니다. 
*/

var 이름1 = '김';
var 이름2 = 이름1;
이름1 = '박';


/*  6-2) 
이름1, 이름2를 출력하면 각각 무엇이 나올까요?
이름1은 변경했으니 { name : ‘박’ } 이고, 이름2는 복사만했지 변경하진 않았으니 { name : ‘김’ } 입니다. 
이름2는 우리가 값을 전혀 수정한 적이 없는데 바뀌어있습니다.
 이름1에는 {} 이게 저장된게 아니라 reference (화살표)가 저장되어있다고 했으니까요.  */
 
var 이름1 = { name : '김' };
var 이름2 = 이름1;
이름1.name = '박';


/* 8) 예제 2. 화살표가 할당되는 기준 & object 두개가 같은지 비교해보기
 새로운 {} object를 할당할 때마다 화살표가 새로 생성된다고 보시면 됩니다. 

 */
var 이름1 = { name : '김' };
var 이름2 = { name : '박' };

/* 8-2)
바로 위의 예제에서 이름1 == 이름2 이렇게 두개를 같다고 비교하면 true가 나올까요 false가 나올까요?

false가 나옵니다.
== 등호로 비교하고 계신건 지금 object 두개가 아닙니다. 화살표 두개입니다.  */

var 이름1 = { name : '김' };
var 이름2 = { name : '김' };


/* 10) 예제 3. 함수를 이용해 object를 변경하면 어떻게 될까
 근데 실행해봐도 이름1은 바뀌지 않습니다. 왜 그럴까요?

-2)
파라미터는 일종의 변수처럼 생성되고 사라지는 존재라고 보시면 됩니다.
그냥 쉽게말하면 var 변수에요 변수

-4)
obj, 이름1 이 두개 변수는 서로 같은 화살표를 갖게 되며 { name : ‘김’ } 값을 공유합니다. 

함수 내부를 잘 보시면 obj라는 변수는 obj = { name : ‘Park’ } 이렇게 재할당을 해주고 있죠? 이것은 

★ obj라는 변수에 새로운 화살표를 재할당을 한 것이지
★ 실제 이름1이라는 변수는 전혀 건드리지 않고 있기 때문입니다. 
*/

var 이름1 = { name : '김' };

function 변경(obj){
  obj = { name : 'park' };  /* 10-4) */
}

변경(이름1);  /* 10-2) 변경(var obj = 이름1); */


/* -6) 여기서는  변경 성공 */
var 이름1 = { name : '김' };

function 변경(obj){
  obj.name  = 'park'; /*  */
}

변경(이름1);
console.log(이름1);


/* 🦄🦄c20-0 1분코딩 object정리 */

/* Object */
console.log("Object");

/* ex:  w3school에서 가져온 예시*/

var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());

/*
●
window object는 window 생략하고 쓸수있음
window.alert = alert
window.name = name

●
objectName.property   : 일반.
objectName.method : 값이 함수인것

●
this. :  method안에서 속해있는 객체(owner object )를 지정하는 키워드

●
자바스크립트에서 undefined, null...etc같은 예외를 제외하고는 다 object임
function도 object의 한종류임. (다른 언어와의 차이점)
console.log도 object임.
console 객체에서 log 메서드를 ( );불러온것
=document 객체에서 write 메서드를 ( );불러온것
=person객체의 introduce메서드를 ( ); 불러오는것
*/
/* 
전역객체. window생략하고 쓸수있고,
window object  // object();
window.alert(111);   // alert();
 */

/////////////////////////////////

var person2 = {
  username: "Zena",
  age: 20,
  introduce: function () {
    console.log(
      "안녕? 나는" + this.username + "야. 나이는 " + this.age + " 살이야."
    );
  },
};
person2.introduce();

//
var object2 = {
  username: "kiki",
  age: 20,
  introduce: function () {
    console.log(`hi? i'm ${this.username} nice to meet you`);
  },
};
object2.introduce();

console.log(object2.age);

/////////////////////////////////////////

var person = {};
person.username = " 동네79"; // objectName.property.: 속성.property
person.age = 12;

person.introduce = function () {
  //objectName.method : 값이 함수인것   메서드 method
  console.log(
    "안녕? 나는" + this.username + "야. 나이는 " + this.age + " 살이야."
  );
};
person.introduce();

//
var object3 = {};
object3.username = "kiki3";
object3.age = 12;

object3.introduce = function () {
  console.log(`hi? I'm ${this.username}`);
};
object3.introduce();

/* 같은형식 method .. 모든게 object */
console.log("constructor");
document.write("constructor");

/* 생성자constructor
객체를 붕어빵처럼 계속 만들수있는 툴
이름 지을때 대문자로 시작해주기로 약속

인스턴스(instance ) : 생성된 개별 객체
new반드시붙일것.
안붙이면 this가 윈도우전역객체를 가리키게 됨
*/

function Person(username, age) {
  this.username = username;
  this.age = age;
  this.introduce = function () {
    console.log(
      "안녕? 나는" + this.username + " 야. 나이는" + this.age + " 살이야."
    );
  };
}

var p1 = new Person("키민", 20);
var p2 = new Person("키민2", 30);

p1.introduce();
p2.introduce();
 

// 🦄🦄c20 객체지향1. constructor (Object 생성기계)
console.log('c20')

/* 
0) object문법 : 객체지향 프로그래밍(Object-oriented programming : OOP) 

https://developer.mozilla.org/ko/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
*/

/* 2) 하드코딩
자바스크립트로 학생 출석부 만들기

var 학생1 = { name : 'Kim', age : 15 };
var 학생2 = { name : 'Park', age : 15 };
...계속..

그냥 재할당 복사를 하면, reference data type 공유가 되서 하면 안됨.👉constructor활용
*/

/* 4) constructor

-2) function

-4) constructor이름은 대문자로 시작 - 일반함수와의 구별

-6)
this.name과 this.age를 집어넣어주시면 됩니다. 

constructor안의 this= 새로생성되는 오브젝트= instance

새로생성되는 오브젝트.name은 ‘Kim’을 대입해주세요~ 라는 뜻 

4-8) 
변수화 , new 이름(); 

*/

function Constructor20(){ /* 4-2) 4-4)*/
  this.name = 'Kim'; /* 4-6) */
  this.age = 15;
}

var student20 = new Constructor20(); /* 4-8)  */
var student20_2 = new Constructor20();


/* 6-2) 함수를 object 에 넣을때
(this : 함수를 가지고 있는 object ) */

var 학생1 = { 
  name : 'Kim', 
  age : 15 ,
  sayHi : function(){      /*  */
      console.log('안녕하세요' + this.name + ' 입니다'); 
  }
};


/* -4) 함수를 constructor에 넣을때 */

function Constructor20_6(){
  this.name = 'Kim';
  this.age = 15;
  this.sayHi = function(){      /*  */
    console.log('안녕하세요' + this.name + ' 입니다');  
  }
}
var 학생1 = new Constructor20_6();
var 학생2 = new Constructor20_6();

학생2.sayHi();


/* 8) 파라미터 활용  
 : 각각 다른 name, age 값을 넣기*/

function Constructor20_8(이름,나이){  /*  */
  this.name = 이름; /*  */
  this.age = 나이;
  this.sayHi = function(){
    console.log('안녕하세요' + this.name + ' 입니다');
  }
}
var 학생1 = new Constructor20_8('Park',15); /*  */
var 학생2 = new Constructor20_8();  /* parameter에 지정 안되있을때: undefined */



/* 8) 밑의 오브젝트 constructor만들기
var product1 = { name : 'shirts', price : 50000 };
var product2 = { name : 'pants', price : 60000 };

-4) 부가세() 라는 내부 함수를 실행하면 콘솔창에 상품가격 * 10% 만큼의 부가세금액이 출력하게하기
*/

function Product(상품명, 가격){
  this.name = 상품명;
  this.price = 가격;
  this.부가세 = function(){   /* 8-4) */
    console.log(this.price * 0.1)
  }
}

var product1 = new Product('shirts', 50000);
var product2 = new Product('pants', 60000);


// 🦄🦄c21 객체지향2. prototype과 constructor. Array의 prototype

/* 1) point : 

-1) inheritance : '상속'

proto : '최초의', '원래의'

-2) JS의 상속기능문법 : prototype 과 constructor

-3) prototype은 다른 자료형엔 안생기고 constructor 함수에만 몰래 생성됩니다. 

-4)
자식들이 값을 직접 소유하게 만들고 싶으면 constructor로 상속시키시면

부모만 가지고 있고 그걸 참조해서 쓰게 만들고 싶으면 prototype으로 상속시키면
*/


/* 2) 
-1) Constructor21의 prototype에 gender : ‘남’이라는 데이터를 추가

-2) 이제  학생1, 학생2 같은 기계로부터 생성되는 모든 자식들도 gender라는 속성을  상속받아서 사용할 수 있습니다. 
*/
function Constructor21(){
  this.name = 'Kim';
  this.age = 15;
}

Constructor21.prototype.gender = '남';  /* 2-1)  */

var 학생1 = new Constructor21();  /* 2-2)  */
var 학생2 = new Constructor21();  

console.log(학생1.gender); //'남'이 출력됩니다



 /* 3) 작동원리
 오브젝트에서 값을 뽑을 때 

(1) 학생1에 직접 gender라는 값이 있는가?
(2) 그럼 부모 유전자에 gender라는 값이 있는가?
(3) 그럼 부모의 부모 유전자에 있는가?
(4) 그럼 부모의 부모의 부모의 유전자에 있는가?

그래서 학생1이라는 오브젝트가 gender라는 값을 가지고 있지 않지만
부모의 유전자(기계.prototype) 에 있는 gender라는 걸 출력할 수 있는 이유입니다. 
*/

function Constructor21_2(){ /* 3-2 */
  this.name = 'Kim';
  this.age = 15;
}
Constructor21_2.prototype.gender = '남';  /* 3-3 */

var 학생1 = new Constructor21_2();  /* 3-1  */

console.log(학생1.gender)

/* 4) Array의 prototype

자바스크립트 내장함수 sort, push, toString, map, forEach 등 이런 것들을 array에 붙여서 사용가능한데 혹시 그 이유가 궁금하지 않으셨습니까.

Array로부터 생성된 자식들은 Array의 prototype에  부여되어있는 함수, 데이터들을 자유롭게 사용하실 수 있습니다. 
 */

var arr = [1,2,3]; /* 나의 코딩 */

var arr = new Array(1,2,3); /* 컴퓨터가 받아들인 코딩 */

console.log(Array.prototype);


/* 4-2) Object의 prototype  
object에도  prototype적용되어서 만들어짐*/

var obj = {name: 'kim'} /* 나의코딩 */

var obj = new Object(); /* 컴퓨터가 받아들인 코딩 */


// 🦄🦄c22 객체지향3. prototype, __proto__

/* 
1) prototype은 constructor 함수에만 몰래 생성됩니다.

object, array 이런거 만들어도 거기엔 prototype이 없습니다. 


1-2) object 같은걸 상속하고 싶으면?

constructor 함수를 만들던가..
Object.create()를 쓰거나 
class를 쓰거나 
셋 중 하나 하시면 됩니다
*/


/* 
2) ~~.__proto__ : 부모의 prototype 

~~.__proto__ : 부모의 prototype (여기 예시에서는 기계constructor)
~~.prototype : 나의 prototype

*/
function Constructor22(){
  this.name = 'Kim';
  this.age = 15;
}
var 학생1 = new Constructor22();
console.log(학생1.__proto__);
console.log(Constructor22.prototype);

/* 
3) __proto__를 직접 등록, '부모-자식' 강제 등록시킴 

서로 독립된 2개의 오브젝트를 '부모-자식' 강제 등록시킴 

(별로 중요한 것은 아님)
*/

var 부모 = { name : 'Kim' };

var 자식 = {};

자식.__proto__ = 부모;  /*  */

console.log(자식.name); /*  */

/*
4. 실은 콘솔창에 prototype 정보들이 항상 출력됩니다.

콘솔창에서 학생1 한번 출력해보십시오.
( Constructor22_2.prototype의 __proto__도 조회가능합니다)

콘솔창에 name, age도 나오고,  __proto__ 이런 것도 나옵니다. 

 __proto__가 뭐랬습니까. 부모의 유전자라고 했죠?

이렇게 쭉 내 부모의 부모까지 탐색할 수도 있습니다. 

탐색해보시면 모든 object 자료형의 조상은 Object() 라는 Constructor이며 (일명 Object.prototype)

모든 array 자료형의 조상도 Object()입니다. (중간에 Array()라는 부모도 있고요)

모든 함수 자료형의 조상도 Object() 입니다.

(그래서 자바스크립트는 모든게 다 Object라고 말하는 것입니다.)
*/

function Constructor22_2(){ /*  */
  this.name = 'Kim';
  this.age = 15;
}
Constructor22_2.prototype.gender = '남';

var 학생1 = new Constructor22_2();  /*  */


// 🦄🦄c23 constructor, prototype 연습문제, 나만의 내장함수 라이브러리 만들기
console.log('c23')

/* 1) 하드코딩 */
var 학생1 = { name : 'Kim', age : 20 }
var 학생2 = { name : 'Park', age : 21 }
var 학생3 = { name : 'Lee', age : 22 }


/* 1-2) Constructor 소프트코딩 */

function Student(이름, 나이){
  this.name = 이름;
  this.age = 나이;
  this.sayHi = function(){
    console.log('안녕 나는 ' + this.name + '이야');
  }
}

var 학생1 = new Student('Kim2', 20);
var 학생2 = new Student('Park2', 21);
var 학생3 = new Student('Lee2', 22);

/* 
2) 오브젝트 안의 함수(메소드)에서 this를 출력하면 “함수의 주인- 오브젝트”이 맞습니다.

근데 그 함수를 arrow function으로 만드시면.. this가 “함수의 주인- 오브젝트 ”으로 재정의되지 않습니다. 
 */

var 오브젝트23 = { sayHi : () => { console.log(this) } }
오브젝트23.sayHi();

/* ▲ 위 코드의 this는 무엇이 출력될까요?

sayHi 함수의 주인인 오브젝트가 아니라 window가 출력됩니다.

sayHi를 만들 때 그냥 일반함수였다면 this가 “함수의 주인”으로 뿅 하고 변할텐데

arrow function을 쓰시면 this값이 변하지 않습니다. 그냥 밖에 있던 this를 그대로 적용합니다. (밖에 있던 this는 window죠) */


/* 
🍉3) 나만의 내장함수 라이브러리 만들기

-2)모든 array에 붙일 수 있는,

array 내에 있는 3이라는 값을 제거해주는 유용한 함수를 하나 만들고 싶습니다. 

var arr = [1,2,3];
arr.remove3();

console.log(arr); //[1,2]
이렇게 array뒤에 붙이기만 하면 array 내의 3이라는 모든 숫자 자료들이 삭제됩니다. 

멋있게 이름은 remove3() 이라고 하겠습니다. 

remove3()함수는 어떻게, 어디에 만들어야 모든 array에 쓸 수 있을까요?


-3) 일단 모든 array에 pop(), sort(), push() 이런 함수를 붙일 수 있는 이유 혹시 기억나십니까.

모든 array 자료형은 부모가 Array로 부터 new Array() 이런 식으로 만들어지기 때문에 

Array라는 부모의 prototype에 있는 함수들을 자유롭게 가져다 쓸 수 있어서 그렇습니다. 

그럼 우리도 Array의 prototype에 remove3라는 함수를 하나 추가해주면 되는게 아닐까요?
*/


// -4) pseudo-coding

Array.prototype.remove3 = function(){
  // this 에서 3을 찾아서 제거해주세요
}

/* 이렇게 코드를 짜면 되겠군요.

위의 코드에서의 this라는 키워드는 현재 remove3이라는 함수를 작동시키는 object (여기서는 array) 라는 뜻입니다.

그럼 this라는 array에서 3을 제거하는 코드는 어떻게 짭니까?

저는 this라는 array 안에 있는 데이터를 하나하나 출력하면서 3과 비교하려고 반복문을 썼습니다.  */

/*  -5)  remove3()함수는 

-a. this라는 array의 길이만큼 반복문을 돌리는데, 돌리는 과정에서 this[i] 라고 쓰면서 this 안에 있는 모든 데이터를 출력해봅니다. 

-b. 만약에 this[i]가 3이면 

-c. this라는 array에서 i번째 자료를 제거해주세요 

라고 썼습니다. (splice 라는 함수는 array안에 뭘 제거할 때 가끔씁니다. 구글 검색하시면 나와염) */

Array.prototype.remove3 = function(){
  for (var i = 0; i < this.length; i++) { /* 3-5-a) */
    if ( this[i] === 3 ) {  /* 3-5-b) */
      this.splice(i,1);   /* 3-5-c) */
    }
  }
};

var arr = [1,2,3,4];
arr.remove3();

console.log(arr); //[1,2,4]

/* 
내가 자주 사용할법한 내장함수들을 많이 만들어두시면 더 효율적인 코딩생활이 가능합니다. 

혹은 이런 함수들 모아서 나중에 자바스크립트 라이브러리화 해서 사용해도 괜찮을 것 같습니다.  */


// 🦄🦄c24 Object.create(.); (ES5 상속기능)
/* 
Object.create(부모object); 

상속을 이용해서 오브젝트를 만들고 싶다면 이거보다 더 쉬운 문법이 없습니다. 

하지만 class문법에 밀려 인지도는 낮습니다.

하지만 요즘 개발자들은 있어보이게 class, 그리고 extends 문법을 이용해서 상속의 상속기능을 만들어냅니다. (👉 다음강의)

2)
자식이라는 object는 부모를 prototype으로 두게 됩니다. 

그럼 자식.name 해도 ‘Kim’이 출력되고요, 자식.age 해도 50이 출력됩니다. 

자식이 성공적으로 부모 속성들을 상속했죠?
*/

var 부모 = { name : 'Kim', age : 50 };
var 자식 = Object.create(부모); /* 2) */

console.log(자식.age); //50나옴

/* 2-2)
자식이 age를 바꾸고 싶으면 어떻게 하죠?

2-3)
자료 꺼내는 순서
자식.age를 꺼내주세요~ 라고 하면
1. 자식이라는 object가 직접 age를 가지고 있으면 그거 출력
2. 없으면 자식의 부모 prototype을 뒤져서 age가 거기 있으면 그거 출력
3. 거기도 없으면 부모의 부모 prototype을 뒤져서.. 
이런 순서로 age를 출력합니다. 
*/

var 부모 = { name : 'Kim', age : 50 };
var 자식 = Object.create(부모);
자식.age  = 20;   /* 2-2) */

console.log(자식.age); //20 나옴


/* 4)
3세대, 4세대..계속 상속해서 만들 수 있음 

손자.age하면 무엇이 나올까요?
20이 출력됩니다. */

var 부모 = { name : 'Kim', age : 50 };
var 자식 = Object.create(부모);
자식.age  = 20;

var 손자 = Object.create(자식); //4)
// console.log(손자.age);


// 🦄🦄c25 객체지향4. class (ES6 상속기능)
/*
2) class 키워드로 구현하는 constructor 기계만들기

-1. class 이름 대문자로 시작

-2. class (){} 틀림 (강의에서 이렇게해서...에러남) 
👉 class {}

-3.  new 키워드 변수화...소문자로 해도 됨 
*/

class Parents부모25{  //-1) -2)
  constructor(){
    this.name = 'Kim';
  }
}

var child자식25 = new Parents부모25();  // -3)
console.log(child자식25)

/* 
4) 함수를 추가
constructor(){}의

-1) 안에 추가: 자식child에 inheritance됨

-2) 밖에 추가: 부모parents에 prototype됨
*/
class Parents부모25_2{
  constructor(){
    this.name = 'Kim';
    this.sayHi = function(){ console.log('hello') }   //4-1)
  }
  sayHi2(){ 
    console.log('hello2')   //4-2)
  }
  sayHi3(){ 
    console.log('hello3')   //4-3. 여러개 추가 ㅇ)
  }
}

var child25_2 = new Parents부모25_2();
console.log(child25_2)

/* 6) constructor안에 파라미터 추가하기*/

class Parents부모25_3{
  constructor(이름, 나이){
    this.name = 이름;
    this.age = 나이;
  }
}

var child25_3 = new Parents부모25_3('Park', 30);
console.log(child25_3)


// 🦄🦄c26 객체지향5. class... extends / super(파라미터);

/* 
2) extends / super(파라미터);

extends: 확대하다, 연장하다
extends & 상속 
할아버지라는 class를 그대로 복붙한 아버지라는 class가 생성됩니다. 

2-2) (extends)
2-4) (추가)
*/
class 할아버지{
  constructor(name){
    this.성 = 'Kim';    //2-2)
    this.이름 = name;   //2-2)
  }
}
class 아버지 extends 할아버지{  //2)
  constructor(){
    super();    //  2-2) extends & 상속 한 내용
    this.나이 = 50;   // 2-4) 추가한 내용
  }
}
var a = new 아버지();
console.log(a);

/* 
3) 파라미터 추가

4) 파라미터 상속

5) 이전시간 class복습

-1. constructor 안에서 쓰면 constructor

-2.  constructor 밖(prototype 함수 안)에서 쓰면 prototype

6) prototype 상속

-1. constructor 안에서 쓰면 부모 class의 constructor 상속

-2.  constructor 밖(prototype 함수 안)에서 쓰면 부모 class의 prototype 상속
 */

class 할아버지2{
  constructor(parm1,parm2){     //3) 파라미터 추가
    this.성 = 'Kim';
    this.이름 = parm1;     //3) 파라미터 추가
    this.gender = parm2;
  }
  sayHi(){                    // 5-2) prototype 
    console.log('안녕 나는 할아버지2')    
  }
}

var var할아버지= new 할아버지2('할아버지손오공','남자'); //3) 파라미터 추가
console.log(var할아버지)
class 아버지2 extends 할아버지2{
  constructor(parm1,parm2){     //4) 파라미터 상속
    super(parm1,parm2);     //4) 파라미터 상속
    this.나이 = 50;
  }
  sayHi2(){
    console.log('안녕 나는 아버지');     
    super.sayHi();     // 6-2) prototype 상속
  }
}

var var아버지 = new 아버지2('아버지손오공','여자');   //4) 파라미터 
console.log(var아버지);


/*🦄🦄c27 함수이용...object 데이터 수정하기, getter, setter  */

/* 
🍉2) 기본 오브젝트 문법 - 직접.. object 데이터 수정 */

var 사람 = {
  name : 'Kim',
  age : 30,
}
console.log(사람.age + 1) //


/*  
2-2) 함수이용...object 데이터 수정 

데이터를 수정하거나 출력할 때 직접 원본 데이터를 만지는게 아니라, 함수로 간접적으로 다루는게 대세

👉이유: 
복잡한 데이터 수정하기 쉽고, 
수정전에 미리 검사 알고리즘 추가, (실수했을때 에러내거나, 수정해주는..)
관리 편함
*/

var 사람2 = {
  name : 'Kim',
  age : 40,
  nextAge(){
    return this.age + 1 // 함수로 간접적으로 만듬
  }
}
사람2.nextAge() ; //이렇게 사용하면 내년 나이가 출력되겠죠? 31이라고 출력되겠네요. 
console.log(사람2.nextAge()); 

/* 
2-4)
- 수정전에 미리 검사 알고리즘 추가 (실수했을때 에러내거나, 수정해주는..)

parseInt()라는 함수는 ’40’같은 문자를 숫자 40으로 바꿔주는 자바스크립트 내장함수

*/
var 사람3 = {
  name : 'Kim',
  age : 30,
  setAge(나이){ //
     this.age = parseInt(나이);   // 2-4)  
  }
}

사람3.setAge('200'); //문자 넣었는데도 숫자 200으로 저장됨
console.log(사람3.setAge()) //(undefined뜸...원래 수업에서는 200나와야하는데... 뭔가 실수가 있는듯)


/*
🍉4)  get/set 키워드 
오브젝트 내의 함수들을 괄호없이 쓸 수 있게 만들어주는 키워드. 보기쉬움



get/set 사용하는 기준은  

그냥 들은 get 쓰시면 되고

해주는, set 해주는 함수들은 set 쓰시면 됩니다. 


*/

/* 🍉6) setter (데이터를 set 입력, 수정 해주는 함수)

set 붙은 함수들은 setter라고 부릅니다. 

-1) 함수 왼쪽에 set이라는 키워드를 추가 , 파라미터가 한개 꼭 존재해야

-2)  소괄호 없앰, =등호로 표시
*/

var 사람4 = {
  name : 'Kim',
  age : 30,
  set setAge(나이){   // 6-1)
    this.age = parseInt(나이)
  }
}

사람4.setAge = 40; // 6-2) 소괄호 없앰 (원래코딩 : 사람4.setAge (40);)
console.log(사람4.setAge)  //(undefined뜸...원래 수업에서는 40 나와야하는데... 뭔가 실수가 있는듯)


/*🍉 8) getter(데이터를 get 가져와주는함수)

get 붙은 함수들은 getter라고 부릅니다. 

-1) 함수 왼쪽에 get 이라는 키워드를 추가 ,  함수 내에 return을 가져야

(getter...데이터를 꺼내는 함수라서, return을 강제함)


-2)  소괄호 없앰
*/

var 사람5 = {
  name : 'Kim',
  age : 300,
  get nextAge(){    //8-1)
    return  this.age + 1  
  }
}
사람5.nextAge;  //8-2)
console.log( 사람5.nextAge ) //get 키워드를 추가하면 이렇게 함수를 사용가능


/*
9) class에서,  함수이용...object 데이터 수정  */

class 사람6{
  constructor(){
    this.name = 'Kim';
    this.age = 2000;  //
  }
  nextAge(){  //
    return this.age +1;
  }
}
var 사람7 = new 사람6();  //
console.log(사람7.nextAge()); //


/* 
🍉10) class 안의 함수에서도 getter/setter 사용가능함

-2) prototype함수들에도 get/set가능함

-3) '나이'를 새로 setting하는 setter
 */
class 사람8 {
  constructor(){
    this.name = 'Park';
    this.age = 80;
  }
  get nextAge(){    // 10-2)
    return this.age + 1
  }
  set setAge(나이){   //-3)
    this.age = 나이;
  }
}

var 사람9 = new 사람8();

console.log(사람9.nextAge)  // 10-2)
console.log(사람9.setAge = 8000);  //-3)


/* 🦄🦄c27-2 return 

제가 알고있기로 return을 쓰는 이유가..

1. 데이터값 결과를 배출하고,
2. 함수를 끝내기위해서 사용한다..

이렇게 이론으로는 들은게 있는데요.

여전히 혼란스러워요.

함수안에서 항상 쓰는것은 아니잖아요? 어떤때는 쓰고, 어떤때는 안쓰고…

주로 숫자를 도출해내는 함수안에서 쓰는것같은데….
 
<codingapple  REPLY>
return에 대해 잘 알고계십니다  

function 쓰고 나서 그 자리에 뭔가 값을 뾰롱 남기고 싶으면 return 쓰시면 되고 그럴 일 없으면 안쓰면 됩니다 

그런 경우에 필요할 때 꺼내쓰는 문법이지 항상 써야되는건 아니기 때문에 그냥 그런게 있구나 하고 대충 넘어가셔도 됩니다. 
 */


//🦄🦄c28-2 class, extends, getter, setter 연습문제 답안

/* 
🍉1) class 구조 만들어보기

var 강아지1 = { type : '말티즈', color : 'white' };
var 강아지2 = { type : '진돗개', color : 'brown' }; 
*/
class Dog {
  constructor(타입, 칼라){
    this.type = 타입;
    this.color = 칼라;
  }
}
var 강아지1 = new Dog('똥개', 'black');
var 강아지2 = new Dog('진돗개', 'brown');


/* 
🍉2) 고양이관련 object들을 만들고 싶습니다. 
 
-2) 이전에 만든 강아지 object와 비슷 (extends 문법을 사용)

-3) 고양이들만 특별하게 age라는 속성을 하나 더 추가. 

var 고양이1 = { type : '코숏', color : 'white', age : 5 };
var 고양이2 = { type : '러시안블루', color : 'brown', age : 2 }; 
*/

class Dog2 {
  constructor(타입, 칼라){
    this.type = 타입;
    this.color = 칼라;
  }
}
class Cat extends Dog2 {    //2-2)
  constructor(타입, 칼라, 나이){
    super(타입, 칼라);
    this.age = 나이;  //2-3)
  }
}

var 고양이1 = new Cat('동네고양이', 'white', 5);


/* 
🍉3) 고양이와 강아지 object들에 기능을 하나 추가하고 싶습니다. 

한살먹기 함수 : 현재 가지고있는 age 속성에 1을 더해주는 기능을 실행해야

-2) 일단 한살먹기() 함수는 Dog에 추가했습니다. 왜냐면 Cat, Dog 둘다 사용가능해야하니까요.

-4) 한살먹기()를 고양이들이 쓰면 나이를 1살 더하기 
한살먹기()라는 함수를 만들고 this.age++를 해주는 기능을 넣었는데, 


-6) 강아지들이 쓰면 에러를 출력해줘야하는데 그걸 구분하기 위해 함수 안에 if문을 추가했습니다. 
 
-8) instanceof 연산자

a instanceof b 이렇게 쓰시면, 

a가 b로부터 생성된 오브젝트인지 아닌지를 true/false로 알려주는 연산자입니다.

this가 instanceof Cat인 경우에만 실행하도록 if문을 추가했습니다
 */

class Dog3 {
  constructor(타입, 칼라){
    this.type = 타입;
    this.color = 칼라;
  }
  한살먹기(){   //3-2)
    if( this instanceof Cat) {    //3-6)  3-8)
    this.age++   //3-4)
    }
  }
}

class Cat3 extends Dog3 {
  constructor(타입, 칼라, 나이){
    super(타입, 칼라);
    this.age = 나이;
  }
}

/* 
🍉4) get/set을 이용해봅시다

4-Q) 퀘스트
class 이름은 Unit이라고 합시다. 

(1) 모든 Unit의 인스턴스는 공격력, 체력 속성이 있으며 기본 공격력은 5, 기본 체력은 100으로 설정되어 있어야 합니다.

(2) 모든 Unit의 인스턴스는 전투력을 측정해주는 battlePoint라는 getter가 있습니다.

console.log( 인스턴스.battlePoint ) 이렇게 사용하면 현재 공격력과 체력을 더한 값을 콘솔창에 출력해주어야합니다.

(3) 모든 Unit의 인스턴스는 heal이라는 setter가 있습니다.

인스턴스.heal = 50 이렇게 사용하면 체력 속성이 50 증가해야합니다. 


// 알고리즘
1. Unit이라는 class를 만들고 constructor에는 체력과 공격력을 기본으로 부여했습니다. 

2. battlePoint()라는 함수를 만들고 이건 체력과 공격력을 합해서 출력하는 기능을 만들었습니다. 

get을 붙여서 소괄호없이도 이용가능하게 만들었습니다. 

3. heal() 이라는 함수를 만들었고 파라미터로 숫자를 입력하면 체력이 그만큼 증가합니다. 

set을 붙여서 소괄호없이도 이용가능하게 만들었습니다.
 */

class Unit {
  constructor(){    //4-1)
    this.체력 = 100;
    this.공격력 = 5;
  }
  get battlePoint(){      //4-2)
    return this.체력 + this.공격력;
  }
  set heal(a){          //4-3)
    this.체력 = this.체력 + a; 
  }
};

var 쎈애 = new Unit();
console.log(쎈애.battlePoint);

쎈애.heal = 50;        //4-3)

/* 
🍉5. get/set을 이용해봅시다2 

다음과 같은 오브젝트가 있습니다. 

var data = {
  odd : [],
  even : []
}

(1) data 오브젝트에는 setter 역할 함수가 하나 필요합니다.

setter 함수에 1,2,3,4 이렇게 아무 자연수나 파라미터로 입력하면 홀수는 odd, 짝수는 even 이라는 속성에 array 형태로 저장되어야합니다.   
*/

/* 
2) 일단 setter 함수를 만들어봅시다. 

이건 파라미터로 숫자들을 입력하면 숫자들을 분류해서 각각 odd, even 이라는 array에 저장해야합니다. 

근데 파라미터로 몇개가 들어올지 모르기 때문에 rest 파라미터같은걸 쓰면 좋겠죠? 

rest 기호를 쓰시면 입력된 파라미터들을 전부 array로 싸매줍니다. 

그 다음에 숫자들이라는 파라미터모음 array를 하나씩 출력해보며 분류하면 되겠죠?
 
4) if: 

숫자들[0]이 홀수면 odd에 push 해주고 짝수면 even에 push해주고

숫자들[1]이 홀수면.. 짝수면 … 

숫자들[2]가 홀수면.. 짝수면..

6) forEach : 반복되는게 싫어서 반복문을 쓰면 뭐 이렇게 되겠죠? 
 
8)
근데 홀수랑 짝수인걸 어떻게 구분합니까?

그 숫자를 2로 나눠서 나머지를 보면 알 수 있습니다. 2로 나눠서 나머지가 0이면 짝수죠? 아니면 홀수고요.

% 기호: 나머지를 출력해주는 연산자

6 % 2 써보시면 이 자리에 0이 남습니다. 
5 % 2 써보시면 이 자리에 1이 남고요.

10)  this를 위해 함수 모양을 arrow function으로 하기
*/

var data28 = {
  odd : [],
  even : [],
  setter함수 : function(...숫자들){   //2)
    숫자들.forEach((a)=>{     //4)  6)   10)

      /*  
      a가 홀수면 this.odd에 push(a)하고.. 
      b가 짝수면 this.even에 push(a)하고...   */

      if ( a % 2 == 1 ) {     //8)
        this.odd.push(a)  //홀수일때
      } else {
        this.even.push(a)  //짝수일때
      }
    });
  }
};

data28.setter함수(1,2,3);


/* 🍉6

var data28_2 = {
  odd : [],
  even : []
}

퀘스트: data28_2 오브젝트에는 getter 역할 함수가 하나 필요합니다.

getter 함수를 사용하면 odd, even에 저장된 모든 데이터들이 숫자순으로 정렬되어 출력되어야합니다. 

예를 들면

data28_2.setter함수(1,2,3,4,5) 이렇게 입력하면 

data28_2 = 
{ odd : [1,3,5], 
  even : [2,4] }

이렇게 저장이 되어야합니다. 
 */


/* 
2) array 두개를 합치려면 어떻게 합니까.
… 기호로 spread operator 문법을 이용하시면 this.odd 그리고 this.even이라는 array 두개를 쉽게 합칠 수 있습니다. 

그리고 그걸 출력해주는 getter함수를 만들었구염. 

3) 출력하기 전에 정렬하고 싶으면 .sort()만 뒤에 붙이시면 됩니다. 

 */

var data28_2 = {
  odd : [1,3],
  even : [2,4,6],
  get getter함수(){         //2)
    return [...this.odd, ...this.even ].sort()    //3)
  }
};

console.log(data28_2.getter함수);

 

/* 
🦄🦄c29 Destructuring 문법-variable, array, object, function

 destructuring 문법을 사용하면 변수를 쉽게 만들 수 있습니다.   */

// 🍉2. Array 안에 있는 데이터를 변수에 담는 방법 

/* 2-1) 기본방법
a=2
b=3 */

var array29 = [2,3,4];
var a = array29[0]; 
var b = array29[1];


/* 2-2) Destructuring 문법
a=2
b=3
c=4  */

var [a,b,c] = [2,3,4];


/* 2-4 default파라미터 문법처럼, default 값 지정 가능 */

var [a,b,c] = [2,3];    // c라는 변수는 값이 할당이 안되어서 undefined

var [a,b,c = 5] = [2,3];    //2-4)


/* 🍉4. Object 안에 있는 데이터를 변수에 담는 방법 ( object data 👉 변수)

a =  Kim
b = 30    */

var { name29 : a, age : b } = { name29 : 'Kim', age : 30 };


/* 
4-2 변수 이름 =  오브젝트 안의 key 이름... 똑같을때는 이렇게만해도 됨
위치와 이름이 같아야만 함

name, age 변수가 생성되고
name =  Kim
age = 30   */

var { name299, age } = { name299 : 'Kim299', age : 30 };


// 4-4 default파라미터 문법처럼, default 값 지정 가능 

var { name299, age299=299 } = { name299 : 'Kim299', age : 30 };


// 4-6) name이라는 변수명을 바꾸고 싶을때 , 이곳에 이렇게 적음 (ex) 변수명...'나이'로 바뀜)

var { name299: 나이 } = { name299 : 'Kim299'};


// 🍉6 이번엔 변수를 object로 집어넣고 싶은 경우 (변수 👉 object data)

//  6-2) 기본방법
var name299_2 = 'Kim';
var age = 30;

var obj = { name : name299_2, age : age } //

/* 6-4)  destructuring 문법
name : name 이렇게 key값과 value값이 동일하면
name 이렇게 하나로 생략이 가능합니다.    */

var name299_3 = 'Kim';
var age = 30;

var obj29_2 = { name299_3, age }    //


/* 🍉8) 함수 파라미터 변수 만들 때, Object 안에 있는 데이터를 파라미터에 담는 방법 
( object data 👉 함수의 파라미터)
파라미터 = 변수 라고 생각하면 됨 */

//  8-2) 기본

function 함수29(name, age){   // 8-2) 
  console.log(name);
  console.log(age);
}

var obj = { name : 'Kim', age : 20 }

함수29(obj.name, obj.age);   // 8-2) 

/* 
8-4) 좀더 간단히 
{name, age} = { name : ‘Kim’, age : 20 }

이거 한거랑 똑같음. 왜냐면 파라미터는 실은 변수만드는 거랑 똑같은 행위기 때문에 , 변수만드는 문법을 그대로 적용할 수 있음
*/

 function 함수29_2 ( { name, age }){   // 8-4) { }
  console.log(name);
  console.log(age);
}

var obj = { name : 'Kim', age : 30 };

함수29_2 (obj);                               // 8-4) 변수이름


/* 🍉10) ( array data 👉 함수의 파라미터) (오브젝트 적용할때와 똑같음)

10-1) (파라미터 = 변수 라고 생각하면 됨)

name, age변수를 만들면서, array 를 destructruing문법으로 넣음

[name, age] = [ 'lee', 40 ];    */

// 10-2) 기본방법

function 함수29_3( name, age ){   //10-2
  console.log(name);
  console.log(age);
}

var array = [ 'lee', 30 ]; 

함수29_3(array[0], array[1]);   //10-2)


// 10-4) 좀더 간단히 

function 함수29_4( [name, age] ){   //  10-1) 10-4)
  console.log(name);
  console.log(age);
}

var array = [ 'lee', 40 ];

함수29_4( array );  // 10-1) 10-4) 변수이름


/* 🍉12) 
Q2. 다음과 같은 Object에서 데이터를 뽑아서 변수를 만들고 싶습니다
여기서 키, 몸무게, 상의사이즈, 하의사이즈 정보를 각각 뽑아서 4개의 변수를 만들고 싶습니다.어떻게 만들면 될까요?

(참고 : 데이터가 얼마나 복잡하든간에 좌우 형태를 똑같이 맞추시면 destructuring 문법으로 변수를 만들 수 있습니다.)
*/

let 신체정보 = {
  body: {
    height: 190,
    weight: 70
  },
  size: ["상의 Large", "바지 30인치"],
};

// 👉 a)
let {
  body: {
    height,     //변수이름
    weight
  },
  size: [ 상의, 하의 ]
} = 신체정보;


//🦄🦄c30 export default, {.}, import { ~ as 작명}, { as 작명}, type=module
/* 
👉html
👉library.js
*/


//🦄🦄c31 Synchronous/ asynchronous / web API / callback function (동기,비동기,콜백함수)
console.log('🦄c31')

/* 2) 자바스크립트는 항상 동기식 처리 (synchronous)

한번에 코드 한줄씩 차례차례 실행된다는 소리입니다.    */

console.log(1); 
console.log(2); 
console.log(3);   // 1 2 3 차례로 출력


/* 4) 비동기처리 (asynchronous)라는 것도 가능합니다

Web API와 연관된 함수..대기시키고, 다른 작업 실행함   

setTimeout, addEventListener, ajax관련 함수들은
 1초대기, 클릭대기 이런걸 하는 코드들,
.. 읽는 시점과 동작 시점이 차이가 있습니다. (쉽게 말하면 동작까지 오래걸립니다.)

*/

console.log(1);
setTimeout(function(){console.log('c31. settimeout31')}, 1000);
console.log(3);   // 1 3 ..... 'settimeout31' 출력


/*
6) 콜백함수 callback function : asynchronous도 순서대로 실행시키고 싶을때
: 함수안의 함수 

6-2)콜백함수는 Synchronos, Asynchronos와는 관계가 없음. 

그냥 함수 디자인 패턴 일 뿐 (면접문제로 자주 나옴) */


function 첫째함수(콜백){  //콜백함수가 들어갈 파라미터 
  console.log(1111)
  콜백(); //()넣음. 이때 실행함
}

function 둘째함수(){
  console.log(2222)
}

/* setTime() 같은게 콜백함수로 들어가 있으면 순차실행 안될 수있음
첫째함수();
둘째함수(); */

첫째함수(둘째함수); // 콜백함수로 넣음...순차실행 ㅇ , ()넣으면 안됨(바로 실행되버림..)

/* 
6-4) 단점 : 코드가 너무 길어지면서 복잡해짐

첫째함수(function(){
  둘째함수(function(){
    셋째함수(function(){
    });
  });
});
 */


/* 8) Promise
코드가 옆으로 길어지지않고, 순서대로 직관적으로 보임.

첫째함수()에 추가할것이 있는데 다음수업에서 다룸

ex)

첫째함수().then(function(){
~~~~
}).then(function(){
 ~~~~
});
 */

//  🦄🦄c32 (ES6) Promise, .then, .catch
console.log('🦄c32 (ES6) Promise')

/* 2)
자바스크립트의 새로운 기능이라기보다는,  코드/함수 디자인 패턴일 뿐입니다.

Promise가 콜백함수보다 좋은 이유

1. 콜백함수와는 다르게 순차적으로 뭔가를 실행할 때 코드가 옆으로 길어지지 않습니다. then 함수를 붙여서 순차적으로 실행하니까요.

2. 콜백함수는 불가능한 ‘실패시 특정 코드를 실행해주세요~’ 라고 코드를 짤 수 있습니다. (catch)

*/

/* 4)
-2) new Promise() 문법으로 프로미스라는 변수 오브젝트를 하나 생성하시면 Promise 제작 끝입니다. 

-3) 파라미터 resolve,reject : 실행완료, 실패 의미함.. 관습적으로 작명

-4) 프로미스 안의 코드 실행이 완료(resolve)가 되었을 때, then() 함수 내의 코드를 실행시켜줍니다. 

-6) 프로미스 안의 코드 실행이 실패(reject)했을 경우엔, catch() 함수 내의 코드를 실행시켜줍니다. 

-8) 이제 프로미스 내의 1+1 이라는 어려운 수학연산이 완료되면 실행완료() 판정을 내리며, 
-9) resolve 실행완료시 then() 내의 코드를 실행해줍니다. 
*/


var 프로미스 = new Promise(function(resolve,reject ){  //4-2) -3)
var 어려운연산 = 1 + 1;   //-8)
resolve()});           //-4)  -8)

프로미스
.then(function(){         //-4) -9)
  console.log('연산이 resolve 했습니다')
})
.catch(function(){           //-6)
  console.log('실패했습니다')
});


// 6) reject()라는 함수를 실행하는 순간 reject실패판정을 내립니다. 

var 프로미스2 = new Promise(function(resolve, reject){
  var 어려운연산 = 1 + 1;
  reject();   //6)
});

프로미스2.then(function(){
  console.log('연산이 resolve했습니다2')
}).catch(function(){
  console.log('reject 했습니다2')   //6)
});


/* 8) 연산결과를 then 안에서 활용하고 싶으면, resolve(); 함수 parameter안에 넣어주시면 됩니다.

8-2) 그럼 then 함수 안에서, 파라미터의 형태로 그 결과를 사용하실 수 있습니다.  */

var 프로미스3 = new Promise(function(resolve실행완료, reject거부){
  var 어려운연산 = 111 + 111;    //8)
  resolve실행완료(어려운연산);    //8)
});

프로미스3.then(function(parameter){       //8-2)
  console.log('연산이 resolve실행완료 했습니다3' + parameter)       //8-2)
}).catch(function(){
  console.log('reject거부 했습니다3')
});


// 10) 1초 대기 성공 후에 특정 코드를 실행하려면?

 var 프로미스4 = new Promise(function(resolve실행완료, reject거부){
  setTimeout(function(){    //10)
    resolve실행완료();
  }, 1000);
});

프로미스4.then(function(){    //10)
  console.log('c32. 1초 대기 resolve실행완료 했습니다')
}).catch(function(){
  console.log('reject거부 했습니다')
});


// 🦄🦄c33 Promise 연습문제 & 해설, 로딩하기, ajax요청하기, Promise chaining 
console.log('🦄c33')

/* 
2) <img> 이미지 로딩 성공시 특정 코드를 실행하고 싶습니다. (👉html)

(참고) 이미지 로딩이 끝났다는 것은 <img>에 load라는 이벤트리스너를 붙여서 체크가 가능합니다. 

(참고) 이미지 로딩이 실패했다는 것은 <img>에 error라는 이벤트리스너를 붙여서 체크가 가능합니다.
*/

var 이미지로딩 = new Promise(function(resolve, reject){
  var img = document.querySelector('#test');
  img.addEventListener('load', function(){    //
      resolve();
  });
  img.addEventListener('error', function(){   //
      reject();       
  });  
});

이미지로딩.then(function(){   //
  console.log('성공했어요')
}).catch(function(){          //
  console.log('실패했어요')
})

/* 
4) Q2. Ajax 요청이 성공하면 무언가 코드를 실행하고 싶습니다. 

https://codingapple1.github.io/hello.txt 라는 경로로 GET 요청을 하면 인삿말이 하나 딸려옵니다. 
('안녕하세요 반갑습니다요.')

여기로 GET 요청을 해서 성공하면

Promise의 then 함수를 이용해서 Ajax로 받아온 인삿말을 콘솔창에 출력해주고 싶습니다.

-2) ajax완료되면 resolve, reject여부 알려주는 Promise

-4) 파라미터...ajax데이터
*/

var 프로미스 = new Promise(function(resolve, reject) {        //-2)
  $.get('https://codingapple1.github.io/hello.txt').done(function(ajax데이터){    //-4)
    resolve(ajax데이터)
  });
});

프로미스.then(function(ajax데이터) {
console.log(ajax데이터);
})

/* 6) Q3. Promise chaining  (promise .then 순차적으로 연속 실행하기)

-1) 첫프로미스가 성공하면 then() 안의 코드를 실행시켜줍니다. ('안녕하세요 반갑습니다요.')

-2) 근데 거기 안에는 프로미스2가 있습니다. 프로미스2가 성공하면

-3) return

-4) 뒤에 있는 then() 안의 코드를 실행시켜줍니다. ('두번째 인삿말입니다')
*/

var 프로미스 = new Promise(function(성공, 실패) {
  $.get('https://codingapple1.github.io/hello.txt').done(function(결과){
    성공(결과)
  });
});

프로미스.then(function(결과) {    //-1)
console.log(결과);

return new Promise(function(성공, 실패) {    //6-2) 두번째 Promise //6-3) return
  $.get('https://codingapple1.github.io/hello2.txt').done(function(결과){
    성공(결과)
  })
});

}).then(function(결과) {  //-4)
  console.log(결과);
}) 


/* 8) 중복함수 밖으로 빼기
-2) 함수 선언
-4) 함수 실행
-6) 파라미터 활용   */

var 프로미스 = ajax해주는함수('https://codingapple1.github.io/hello.txt'); //-4)

프로미스.then(function(결과) {
console.log(결과);

return ajax해주는함수('https://codingapple1.github.io/hello2.txt'); //-4)

}).then(function(결과) {  
  console.log(결과);
}) 

function ajax해주는함수(parm){    //-2) -6)
  return new Promise(function(성공, 실패) {   
    $.get(parm).done(function(결과){
      성공(결과)
    })
  });
}

// 🦄🦄c34 (es8) async, await, try{}, catch{} (Promise 보다 쉬움)
console.log('🦄c34')

// 2) promise 예시 복습
var 프로미스34 = new Promise(function(resolve실행완료,reject거부){      // 4-2)
  var 계산 = 1+1; 
  resolve실행완료();
})
프로미스34.then(function(){
  console.log('object')})
  .catch(function(){
    console.log('object')
  })

/* 4) async
async, await이라는 키워드인데 각각 Promise와 then을 매우 쉽게 만들어주는 문법입니다. 

단점 : promise의 resolve성공만 가능

-2)
async 키워드를 쓰면 Promise 오브젝트가 절로 생성됩니다. 
그럼 이 함수 자체가 Promise가 되어버립니다. 

-4)
그래서 이 함수를 실행할 때 뒤에 then을 붙일 수 있습니다. Promise니까요. 

-6) 
함수안에서 연산한 결과를 then 안에서 사용하고 싶다면, 
return 오른쪽에 결과를 적어주시면 됩니다. 그럼 then함수까지 전해집니다.
*/

async function 더하기34_2(){    // 4-2)
  return 1 + 1    //-6)
}

더하기34_2().then(function(결과){   //4-4) -6)
  console.log(결과) 
});


/* 6) await
async 키워드를 쓴 함수 안에서는 await을 사용가능합니다. 
await은 그냥 프로미스.then() 대체품으로 생각하시면 됩니다. 
하지만 then보다 훨씬 문법이 간단합니다. 

6-2) 어떤 function 안에서 어려운 연산을 실행한 뒤에 성공/실패를 판정해주는 Promise
*/

async function 더하기34_3(){
  var 어려운연산 = new Promise((성공, 실패)=>{
    var 결과 = 1 + 1;
    성공();
  });
  // 어려운연산.then();  👈 then문법
  var 결과 = await 어려운연산;    //👈await
}
더하기34_3();


/* 6-4) 파라미터 활용

연산 결과를 출력하거나 그러고 싶다면 ,성공 함수에 파라미터를 담아주시면 된다고 했죠?
성공()함수 안에 있던 2라는 파라미터는 var 결과라는 변수에 저장됩니다. 
*/
async function 더하기34_4(){
  var 어려운연산 = new Promise((성공, 실패)=>{
    var 연산결과 = 11111 + 11111;
    성공(연산결과);     //
  });
  var 결과 = await 어려운연산;    //
  console.log(결과);
}
더하기34_4();


/* 8-2) await은 실패하면 에러가 나고 코드가 멈춥니다

8-4) try{ } catch{ } 

코드실행을 멈추고 싶지 않으면 약간 특별한 방법이 필요합니다. 
try catch라는 자바스크립트 문법인데,
try {} 안의 코드가 에러가 나고 멈출 경우, 대신 catch {} 내부의 코드를 실행해줍니다. 
*/

async function 더하기34_5(){
  var 어려운연산 = new Promise((성공, 실패)=>{
    실패();
  });
  //   var 결과 = await 어려운연산; // 8-2)
  try {  var 결과 = await 어려운연산 }    // -4)
  catch { console.log(' 어려운연산 Promise가 실패할 경우 실행할 코드') }
}

/* 10) (test34버튼) 클릭하면, resolve실행완료 하는 Promise 만들기

 */
async function 버튼누르기34(){

  var 프로미스 = new Promise((resolve실행완료,reject거부)=>{
    document.querySelector('#test34').addEventListener('click',()=>{
      resolve실행완료();
    });
  });

  var 결과 = await 프로미스;
  console.log('c34 test34')
}

버튼누르기34();



