import React from 'react';
import Display from './Display';
import OpDisplay from './OpDisplay';
import CalBtn from './CalBtn';
import Number from './Number';
class Calculator extends React.Component{
  state={
    opText:'',
    display:''
  }
  updateDisplay=(newText)=>{
    console.log(newText,'normal');
    if(this.state.display !== '0'){
      this.setState({display:this.state.display+String(newText)})
    }else{
      this.setState({display:String(newText)})
    }
  }
  updateOpDisplay=(newText)=>{
    console.log(newText);
    this.updateDisplay('+');
    this.setState({opText:this.state.opText+this.state.display,display:'0'})
  }
  render(){
    const numbers=[9,8,7,6,5,4,3,2,1,0,'.'];
    const btns=['AC','+','-','*','/','=']
    return (
      <div className=''>
        <Display displayText={this.state.display} />
        <OpDisplay opText={this.state.opText} />
        {
          numbers.map(n=>(
          <Number key={n} num={String(n)} onClick={this.updateDisplay} />
          ))
        }
        {
          btns.map(btn=>(
            <CalBtn text={btn} key={btn} onClick={this.updateOpDisplay} />
          ))
        }
        
      </div>
    );
  }
}

export default Calculator;