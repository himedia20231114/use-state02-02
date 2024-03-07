import React from 'react';

function Lab4() {

    const fruitsName = ['사과', '바나나', '오랜지']; 

    const fruits = fruitsName.map( (fruit) => {
       return <li> {fruit}</li>
    } );

    return (
        <div>
            <h1> Lab4 - map () 메소드를 사용해서 처리 </h1>
            <ul>
                {fruits}
            </ul>
        </div>
    );
}

export default Lab4;