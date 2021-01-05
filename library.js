

//  🦄🦄c30 type="module", export default, {.}, import { ~ as 작명}, {* as 작명}

/* 
그리고 import/export는 당연 IE 호환성이 없기 때문에

프론트엔드 개발시 JS파일을 HTML에 첨부하시려면 

<script src=”경로”></script> 이걸 쓰시는게 매우 좋은 관습입니다. 

*/

/* 2)export default / import 
작명x, 변수이름 같아야 함      */

var a = 'class 30';

// export default a;
// export default b;.... 2번 사용 x


/* 4) 여러개를 export 할 수도 있습니다 */
/* 5 ~ 9) */
var a = 10;
var b = 20;
var c = 30;
var d = 'd';
var e = 30;
var f = 30;
var g = 30;
var h = 30;
var i = 30;

var j = 'export default';

export {a, b};  //
export {c};  // 2번 사용 ㅇ
export default j;   // 4-4) export default와 같이 사용 가능

export {d}; 


// 4-2) export....var변수 왼쪽에 쓸 수 있음

export var a4_2 = 100


/* 11) 옛날엔 require, module.exports 라는게 있었습니다.
module.exports.Z = 10 ;
 */