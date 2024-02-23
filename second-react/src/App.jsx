import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [allowNumbers, setAllowNumbers] = useState(true)
  const [allowSChars, setAllowSChars] = useState(false)
  const [password, setPassword] = useState("")


  useEffect( () => {
    setPassword(generatePassword(length, allowNumbers, allowSChars))
  }, [length, allowNumbers, allowSChars,])

  const inputPass = useRef(null)


  const generatePassword = (length, allowNumbers, allowSChars) => {
    let alphaString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const numbers = "012345678901234567890123456789"
    const specialChars = "!@#$%^&*-_+.!@#$%^&*-_+."

    if (allowNumbers) alphaString += numbers
    if (allowSChars) alphaString += specialChars

    let password = ""
    for (let i = 0; i < length; i++) {
      let randPos = Math.floor(Math.random() * alphaString.length - 1)
      password += alphaString.charAt(randPos)
    }
    return password
  }

  const copyPass = (e) => {
    window.navigator.clipboard.writeText(password)
    inputPass.current.select()
    inputPass.current.setSelectionRange(0, length)
  }

  return (
    <>
      <h1 className='text-4xl font-bold text-center my-10'>Password Generator</h1>
      <div className="flex justify-center">
        <div className="flex w-[32rem] justify-center flex-col bg-gray-600 rounded p-8">
          <div className='flex justify-center w-full mb-2 shadow-md shadow-gray-900'>
            <input 
              type="text"
              readOnly
              value={password}
              className='rounded-s w-5/6 pointer-finger bg-gray-100 text-gray-900 focus-visible:outline-0 ring-inset focus-visible:ring-2 ring-indigo-600 font-semibold px-3'
              ref={inputPass}
            />
            <button
              onClick={copyPass}
             className='bg-gray-500 w-1/6 text-gray-100 font-semibold focus-visible:outline-0 rounded-e px-3 py-2 '
            >Copy</button>
           </div>
           <div className='flex justify-evenly w-full m-2'>
            <div className='flex justify-center w-full'>
              <label htmlFor="length">Length:</label>
              <input
               type="range"
               id='length'
               min="8"
               max="72"
               value={length}
               className='w-3/6 mx-1'
               onChange={(e) => setLength(e.target.value)}
               />
               <span className='w-5'>{length}</span>
            </div>             
           </div>
           <div className='flex justify-evenly w-full m-2'>
            <div className='flex items-center'>
                <label htmlFor="numbers">Numbers:</label>
                <input
                type="checkbox"
                id='numbers'
                checked={allowNumbers}
                onChange={() => setAllowNumbers(!allowNumbers)}
                className='mx-1'
                />
              </div>
              <div className='flex items-center'>
                <label htmlFor="sChars">Special Characters:</label>
                <input
                type="checkbox"
                id='sChars'
                checked={allowSChars}
                onChange={() => setAllowSChars(!allowSChars)}
                className='mx-1'
                />
              </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default App
