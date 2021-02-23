import React from 'react';

const Display=props=>{
  return (
    <div className='bg-dark text-warning' id='main_display'>{(props.displayText)?props.displayText:'0'}</div>
  );
}
export default Display;