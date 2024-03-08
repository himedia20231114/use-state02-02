import React from 'react';
import { useState } from 'react';

function Lab8(props) {

    // MOCK 데이터 : 가짜 데이터 , 프로그래밍에서 기본값을 출력 
    const [fruits , setFruits] = useState(['사과', '배', '오랜지'] ); 

    // 상태가 변경되면 자동으로 랜더링 되도록 useState(); 
    const [inputValue , setInputValue] = useState(""); 

    //함수 생성 
    const onchangehandler = (e) => {
        setInputValue(e.target.value);
        console.log (e.target.value); 
    }
    //버튼 클릭시 작동 함수 
    const onclickhandler = (e) => {
        // input 박스의 값을 setFruits 를 사용해서 배열에 값을 추가 하면 자동으로 랜더링됨 
        // 기존 배열에서 마지막에 값을 더 추가 할때 사용되는 새로운 문법 
        // ES6 에서 새롭게 추가된 문법 : [...frouts, 추가할값]
        setFruits([...fruits, inputValue ]); 
        
        //input 박스의 값을 초기화 
        setInputValue(""); 

    }

    return (
        <div>
            <h1>Lab8 - 버튼을 사용해서 input에 넣은 값을 태그를 생성해서 추가  </h1>
            
            <input value = { inputValue } onChange={onchangehandler} />
            <button onClick={onclickhandler}> 추가 </button>

            <ul>
                {
                fruits.map((fruit, index) => {
                    return <li key={index}> {fruit} </li>
                })
                }

            </ul>
            
        </div>
    );
}

export default Lab8;