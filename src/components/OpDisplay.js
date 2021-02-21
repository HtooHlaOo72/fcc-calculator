import React from 'react';

const OpDisplay=props=>{
  return (
    <div className='bg-dark text-white'>{(props.opText)?props.opText:'0'}</div>
  );
}
export default OpDisplay;