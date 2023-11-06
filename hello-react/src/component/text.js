// 실행시 Ctrl_Alt+N
console.log("vscode에서 바닐라 기본 코드 실행기 테스트") ; 

function test2() {
    let a="hello";

    if(true) {
        let a="hi";
        console.log(a);
    }
    console.log(a);
}

test2();

console.log(`var은 전역으로 재선언 및 재할당(함수레벨스코프). let, 블록 단위라서, 우리가 원래 알고 있던 지역 변수의 효력범위를 못 넘어감.`);