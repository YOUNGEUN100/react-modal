import React from 'react'

function Modal(props) {
  const close = props.setModal;
  console.log(close);
  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Modal</h2>
        <p>모달창입니다.</p>
        <button onClick={()=>{console.log("닫기")}}>닫기</button>
      </div>
    </div>
  )
}

export default Modal