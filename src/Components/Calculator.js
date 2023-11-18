import React, { useState } from 'react';  
import './Calculator.css'

const Calculator = ()=>{ 
    const [num1, setNum1] = useState(''); 
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('');
    const[error, setError] = useState(''); 
    const[result, setResult] = useState(''); 

    const handleInput = (e, input)=>{ 
        const value = e.target.value; 
        if(input === 'num1'){ 
            setNum1(value); 
        }else if(input === 'num2'){ 
            setNum2(value);
        }
        setResult(""); 
        setOperation(""); 
    }
    
    const handleError = () =>{ 
        if(num1 === '' || num2 === ''){ 
            setError("Plese Enter Both the Numbers");  
            return false; 
        }

        if(!isValidNumber(num1) || !isValidNumber(num2)){ 
            setError("Plese Enter Valid Numbers");  
            return false; 
        }

        setError(''); 
        return true; 
    }


    const isValidNumber = (value) => {
        return /^-?\d*\.?\d*$/.test(value);
    }

    const handleOperation =(op) =>{ 
        setOperation(op); 
        setError(''); 
        if(handleError()){ 
            const number1 = parseFloat(num1); 
            const number2 = parseFloat(num2); 

            switch(op){ 
                case '+':
                   setResult(number1 + number2); 
                   break; 
                case '-': 
                    setResult(number1 - number2); 
                    break; 
                case '*': 
                    setResult(number1 * number2); 
                    break; 
                case '/': 
                    if(number2!==0){ 
                        setResult(number1/number2); 
                         
                    }else{ 
                        setError("Cannot be divisible by zero");
                    }
                    break; 
                default: 
                    break; 
            }
        }
    }


    return(
        <div className='container'>
            <div className='bg'></div>
            <div className='calculator'>
                <h1>React Calculator</h1>
                <input
                    type='text'
                    placeholder='Num 1'
                    value={num1}
                    onChange={(e) => handleInput(e, 'num1')}
                />
                 <input
                    type='text'
                    placeholder='Num 2'
                    value={num2}
                    onChange={(e)=> handleInput(e, 'num2')}
                />
    
                <div className='buttons'>
                    <button onClick={()=> handleOperation('+')}>+</button>
                    <button onClick={()=> handleOperation('-')}>-</button>
                    <button onClick={()=> handleOperation('*')}>*</button>
                    <button onClick={() => handleOperation('/')}>/</button>
                </div>
                {error && <div className='error'>
                    <span style={{color: 'red', fontSize: "20px"}}>Error!</span>
                    <br></br>
                    <span style={{fontSize: "20px"}}>
                    {error}
                    </span>
                    </div>}
                {result && (
                    <div className='result'>
                        <span style={{color: 'blue', fontSize: "20px"}}>Successfull!</span>
                        <br></br>
                       <span style={{fontSize: "20px"}}>
                       Result: {num1} {operation} {num2} = {result}
                       </span>
                    </div>
                )}
            </div>
        </div>
    );
}; 

export default Calculator; 
 