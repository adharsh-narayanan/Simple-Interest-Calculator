import './App.css'
import { TextField, touchRippleClasses } from '@mui/material'
import {Button} from '@mui/material'
import { useState } from 'react'


function App() {

  //js

  //states to store data from input fields

  const[amount,setAmount]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const[interest,setInterest]=useState(0)




  const[isAmount,setIsAmount]=useState(true)
  const[isRate,setIsRate]=useState(true)
  const[isYear,setIsYear]=useState(true)

  const validate=(e)=>{

    const{name,value}=e.target
    console.log(name );
    console.log(value );

    //regular expression

    //    /^[0-9]*$/   - regular expression..
    // match() --   method to check whether the pattern matches the value and returns array if true and Null if false

    if(!!value.match(/^[0-9]*$/)){    // !! converts to boolean because if else is a condition which expects true/false statements

      if(name===`amount`){
        setAmount(value)
        setIsAmount(true)
      }
      else if(name===`rate`){
        setRate(value)
        setIsRate(true)

      }
      else{
        setYear(value)
        setIsYear(true)
      }

      



    }
    else{
      if(name===`amount`){
        setAmount(value)
        setIsAmount(false)
      }
      else if(name===`rate`){
       setRate(value)
        setIsRate(false)

      }
      else{
        setYear(value)
        setIsYear(false)
      }
      

    }
    

  }

  const resetAll =()=>{   //setting the values to initial values
    setAmount(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsAmount(true)
    setIsRate(true)
    setIsYear(true)
         
  }

  const calculate=(e)=>{
    e.preventDefault()
    setInterest((amount*rate*year)/100)
  }

  



 
  return (
    <>
     <div style={{height:`130vh`, width:`100%`}} className='bg-dark d-flex justify-content-center align-items-center'>
        <div className='bg-light p-5 rounded' style={{width:`500px`}}> 
          <h1>Simple Interest App</h1>
          <p>Calculate Simple Interst</p>

          <div className='bg-warning rounded mt-5 d-flex justify-content-center align-items-center flex-column' style={{height:`150px`}}>
             <h1>₹ {interest}</h1>
             <p>Total simple interest</p>
         </div>
          <div>
             <form onSubmit={calculate} >
                <div className='mt-5 mb-3 '>
                    <TextField id="outlined-basic" label="₹ Principle Amount" name='amount' value={amount || ``} variant="outlined"  className='w-100' onChange={(e)=>validate(e)} />


                    { !isAmount && <p className='text-danger'>*Invalid Input</p>}  {/* JS CODE HENCE data enclosed in  { }  */}
                </div>

                <div className='mb-3'>
                  <TextField id="outlined-basic" label="Rate of Interest (p a)%" name='rate' value={rate ||``} variant="outlined"  className='w-100'  onChange={(e)=>validate(e)}   />


                  { !isRate && <p className='text-danger'>*Invalid Input</p>}

                </div>
                <div className='mb-3 '>
                  <TextField id="outlined-basic" label="Year (yr)" name='year' value={year || ``} variant="outlined"  className='w-100' onChange={(e)=>validate(e)}   />

                { !isYear && <p className='text-danger'>*Invalid Input</p>}  
                </div>

                <div className='mb-3 justify-content-between d-flex'>
                    <Button type='submit'  variant="contained"  color="success" className='p-2' style={{height:`50px`, width:`190px`}} disabled={isAmount && isRate && isYear?false:true}  >Calculate</Button>
                    <Button  onClick={resetAll} variant="outlined" className=' p-2'  style={{height:`50px`, width:`190px`}}>Reset</Button>
                </div>
             </form>
          </div>
      
        </div>
      </div>
    </>
  )
}

export default App
