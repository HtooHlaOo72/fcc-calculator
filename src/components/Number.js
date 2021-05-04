import React from 'react';
import classnames from 'classnames';

const Number=props=>{
  return (
    <button id={props.id} className={classnames('btn btn-dark border border-light',{'col-8':props.num==='.'},{'col-4':props.num!=='.'},'button')}  
    onClick={
      ()=>{
        props.onClick(props.num)
      }
    } >{props.num}</button>
  );
}

export default Number;