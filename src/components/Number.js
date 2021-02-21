import React from 'react';

const Number=props=>{
  return (
    <button onClick={()=>{props.onClick(props.num)}} >{props.num}</button>
  );
}

export default Number;