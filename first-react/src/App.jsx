import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const [result, setResult] = useState(0)

  useEffect(() => {
    if (!num1 || isNaN(Number(num1))) {
      setResult("Not a Number")
      return
    }

    if (!num2 || isNaN(Number(num2))) {
      setResult("Not a Number")
      return
    }
    setResult(Number(num1) + Number(num2))
    
  }, [num1, num2]);


  return (
    <>
      <div className="flex justify-center mb-10 mt-10">
        <h1 className='text-3xl font-bold'>Numbers Addition</h1>
     </div>
     <div className="w-full flex justify-center">
      <div className="flex items-center flex-col">
        <div className="w-96 flex justify-between bg-slate-400 rounded-t-md pt-10  p-3">
          <label htmlFor="num1">Number 1:</label>        
          <input onChange={(e) => setNum1(e.target.value)} id="num1" className='rounded-md text-gray-800 w-3/4	p-1 pl-2'/>
        </div>
        <div className="w-96 flex justify-between bg-slate-400  p-3">
          <label htmlFor="num2">Number 1:</label>        
          <input onChange={(e) => setNum2(e.target.value)} id="num2" className='rounded-md text-gray-800 w-3/4	p-1 pl-2'/>
        </div>
        <div className="w-96 flex justify-between bg-slate-400 rounded-b-md p-3 pb-8">
          <label htmlFor="result">Result:</label>        
          <input id="result" value={result} readOnly className='rounded-md text-gray-800 w-3/4	p-1 pl-2'/>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
