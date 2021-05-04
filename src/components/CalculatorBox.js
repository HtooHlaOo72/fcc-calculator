import React from 'react';
import Display from './Display';
import OpDisplay from './OpDisplay';
import CalBtn from './CalBtn';
import Number from './Number';

import {btns,numbers} from '../list';

class Calculator extends React.Component{
  state={
    lastText:'',
    display:'',
    clearNext:false,
    
  }
  updateDisplay=(newText)=>{
    if(newText==='AC'){
      this.clearDisplay();
    }else if(newText==='='){
      this.displayResult();
    }else if(['+','-','*','/'].includes(newText)){
      this.handleOperator(this.state.lastText,newText);
    }else{
      if(this.manageInput(newText,this.state.display)){
        if(this.state.clearNext){
          this.clearDisplay();
        }
        this.setState({
          ...this.state,
          lastText:this.state.lastText+newText,
          display:this.state.display+newText
        });


      }
    }
    
  }
  findLastOperandDecimal=(str)=>{
    let regex=/[.]/g;
    let lastOperand='';
    for (let i=str.length-1;i>=0;i--){
      if(['+','-','*','/'].includes(str[i])){
          lastOperand=str.slice(i+1,);
          return regex.test(lastOperand);
      }
    }
    // console.log('=-*/ not exist')
    return regex.test(str);
  }
  handleOperator=(str,newOp)=>{
    if(['+-','--','*-','/-'].includes(str[str.length-2]+str[str.length-1])
    &&['+','-','*','/'].includes(newOp)
    ){
      let replace=str.slice(0,str.length-2)+newOp;
      this.setState({
        ...this.state,
        lastText:replace,
        display:replace
      });
    }else if(['+','-','*','/'].includes(str[str.length-1])
    &&['+','*','/'].includes(newOp)
    ){
      let replace=str.slice(0,str.length-1)+newOp;
      this.setState({
        ...this.state,
        lastText:replace,
        display:replace
      });
    }else{
      this.setState({
      ...this.state,
      lastText:this.state.lastText+newOp,
      display:this.state.display+newOp
    });
  }

    // console.log(str.match(/$[^0-9]/g))
    // if(['+','-','*','/'].includes(newOp)
    // &&['+','-','*','/'].includes(str[str.length-1])){
    //   let replace=str.slice(0,str.length-1)+newOp;
    //   this.setState({...this.state,lastText:replace,display:replace})
    // }else{
    //     this.setState({
    //     ...this.state,
    //     lastText:this.state.lastText+newOp,
    //     display:this.state.display+newOp
    //   });
    // }

  }
  manageInput=(newText,currentDisplay)=>{
    let deciExist=this.findLastOperandDecimal(currentDisplay);
    if(deciExist && newText==='.'){
      return false;
    }
    
    if(!currentDisplay &&newText==='0'){
      return false;
    }
    if((currentDisplay[currentDisplay.length-1]==='.'||['+','-','*','/'].includes(currentDisplay[currentDisplay.length-1]))&&newText==='.'){
      return false;
    }
    
    
    return true;
  }
  clearLastText=()=>{
    this.setState({...this.state,lastText:''});
  }
  clearDisplay=()=>{
    
    this.setState({
    lastText:'',
    display:'',
    clearNext:false
    });
  }
  displayResult=()=>{
    const {lastText}=this.state;
    if(!['+-','--','*-','/-'].includes(lastText.slice(lastText.length-2,))
    && !['+','-','*','/'].includes(lastText.slice(lastText.length-1,))){
      this.setState(
        {
          ...this.state,
          clearNext:true,
          display:String(eval(this.state.display))
        });
    }
    
  }
  render(){
    
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
            <Number key={n.num} num={String(n.num)}  id={n.id} onClick={this.updateDisplay} />
            ))
            }
            </div>
          </div>
          <div className='col-6'>
            <div className='row'>
            {
            btns.map(btn=>(
              <CalBtn 
              text={String(btn.text)} 
              key={btn.text}
              id={btn.id} 
              onClick={this.updateDisplay}
              
              />
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