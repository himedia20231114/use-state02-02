import React from 'react';


function Lab3() {
    // 배열의 값만 적용된 상태 
    const fruitsName = ['사과', '바나나', '오랜지']; 

    // 배열만 선언 
    const fruits =  []; 

    // for 문을 사용해서 엘리멘트를 생성에서 fruits 배열에 등록 
    for ( let i = 0 ; i < fruitsName.length ; i++) {
        fruits.push(<li> { fruitsName[i] } </li>); 
    }


    return (
        <div>
            <h1> Lab3 - for 문을 사용해서 출력 </h1>
            <ul>
                {fruits}
            </ul>
        </div>
    );
}

export default Lab3;