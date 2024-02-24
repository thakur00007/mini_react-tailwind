import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client';
import Register from './Register'
import './App.css'
import Login from './Login'

function App() {
  const [authState, setAuthState] = useState("login")
  const [comp, setComp] = useState(<Login setAuthState/>)
  const holder = useRef()

  useEffect( () => {
    if (authState == "register") {
      setComp(<Register {...{setAuthState}}/>)
    }

    if (authState == "login") {
      setComp(<Login {...{setAuthState}}/>)
    }
  }, [authState,])

  return (
    <>
     <div className="flex justify-center align-center w-full h-screen overflow-hidden	">
      <img 
        className='max-w-none w-full'
        src="/src/assets/pexels-photograph-6741013.jpg" 
        alt="" 
      />
     </div>
     
     <div className="absolute w-full h-full top-0 left-0  flex items-center justify-center">
      <div ref={holder} className="sm:w-[32rem] w-80  p-3 sm:py-10  backdrop-blur-3xl rounded-xl shadow-[10px_10px_20px_8px_rgba(0,0,0,0.3)]">
        {comp}
      </div>
     </div>
    </>
  )
}

export default App
