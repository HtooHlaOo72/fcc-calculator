import React from 'react';
import classnames from 'classnames';
const CalBtn=props=>{
  return (
    <button id={props.id} className={classnames('btn btn-light',{'col-12':(props.text==='AC'||props.text==='=')},{'col-6':props.text!=='AC'||props.text!=='='},'button')} 
    onClick={
      ()=>{
        props.onClick(props.text)
      }
    } >{props.text}</button>
  );
}

export default CalBtn;