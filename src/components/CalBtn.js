import React from 'react';

const CalBtn=props=>{
  return (
    <button onClick={()=>{props.onClick(props.text)}} >{props.text}</button>
  );
}

export default CalBtn;