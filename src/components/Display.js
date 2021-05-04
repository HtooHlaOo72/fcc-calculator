import React from 'react';

const Display=props=>{
  let fontSize='32px';
  if(props.displayText.length>=12){
    fontSize='20px';
  }
  return (
    <div className='bg-dark text-warning' id='display' style={{fontSize:fontSize}}>{(props.displayText)?props.displayText:'0'}</div>
  );
}
export default Display;