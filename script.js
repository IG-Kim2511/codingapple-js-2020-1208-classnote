// ●

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
🚀 변수활용 공식 : 

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

setTimeout(function(){ console.log('setTimeout') }, 1000)


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

-b: arrow function + this  = arrow function밖에 있던 this값 (eventListener +function안의..this) 그대로 사용 = e.currentTarget
*/

document.querySelector('.c5 #버튼2').addEventListener('click', function(){
  //  4-a) setTimeout(function(){} 
  setTimeout(()=>{ console.log(this.innerHTML) }, 1000);  /* 4-b) */
});

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

round bracket ( ), curly bracket { }, square bracket [ ] 모두 없애줌

spread operator 는 
function의 round bracket ( )안, 
object의 curly bracket { }안, 
array의 square bracket [ ]안
에서 보통 사용하셔야합니다. 

다른 곳에서 그냥 썼다간 에러가날 수 있습니다. 
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


// 🦄c15 default parameter/arguments (함수 능력 업그레이드)


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


/* 🍉4) arguments
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
