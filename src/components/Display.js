import React from 'react';

const Display=props=>{
  return (
    <div className='bg-dark text-white'>{(props.displayText)?props.displayText:'0'}</div>
  );
}
export default Display;