import React from 'react';
import Display from './Display';
import OpDisplay from './OpDisplay';
import CalBtn from './CalBtn';
import Number from './Number';


class Calculator extends React.Component{
  state={
    lastText:'',
    display:'',
    isNew:true
  }
  updateDisplay=(newText)=>{
    if(newText!=='AC' && newText!=='='){
      this.setState({display:this.state.display+newText,lastText:newText});
    }else if(newText==='AC'){
      this.setState({display:'',lastText:''});
    }else if(newText==='='){
      let result=eval(this.state.display);
      if(!!(result%1)){
        result=result.toFixed(4)
      }
      this.setState({ lastText:result,display:this.state.display+'='+result});
    }
  }
  
  render(){
    const numbers=[9,8,7,6,5,4,3,2,1,0,'.'];
    const btns=['AC','+','-','*','/','=']
    return (
      <div className='mx-auto' id='cbox'>

        <div className='border border-light ' id='dis_box'>
          <Display displayText={this.state.display} />
          <OpDisplay opText={this.state.lastText} />
        </div>
        
        <div className='row'>
          <div className='col-6'>
            <div className='row'>
            {
            numbers.map(n=>(
            <Number key={n} num={String(n)} onClick={this.updateDisplay} />
            ))
            }
            </div>
          </div>
          <div className='col-6'>
            <div className='row'>
            {
            btns.map(btn=>(
              <CalBtn text={String(btn)} key={btn} onClick={this.updateDisplay} />
            ))
            }
            </div>
          </div>
        </div>
        
        
        
        
      </div>
    );
  }
}

export default Calculator;