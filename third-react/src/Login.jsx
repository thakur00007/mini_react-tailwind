
function Login(
  {setAuthState}
) {

    return (
        <>
           <h1 className="text-4xl text-center font-bold mb-10">Login</h1>
          <div className="flex justify-center mt-3 mb-5">
            <label 
              htmlFor="email"
              className='rounded-s bg-gray-500 min-w-20 w-2/6 sm:w-1/6 p-1 sm:p-2'
            >Email: </label>
            <input 
              id="email"
              type="text"
              className='rounded-e w-4/6 min-w-48 pointer-finger bg-gray-100 text-gray-900 focus-visible:outline-0 ring-inset focus-visible:border-none border border-gray-500 focus-visible:ring-2 ring-gray-500 font-semibold px-3'
            />
          </div>
          <div className="flex justify-center mt-3 mb-5">
            <label 
              htmlFor="pass"
              className='rounded-s bg-gray-500 min-w-20 w-2/6 sm:w-1/6 p-1 sm:p-2'
            >Password: </label>
            <input 
              id="pass"
              type="text"
              className='rounded-e w-4/6 min-w-48 pointer-finger bg-gray-100 text-gray-900 focus-visible:outline-0 ring-inset focus-visible:border-none border border-gray-500 focus-visible:ring-2 ring-gray-500 font-semibold px-3'
            />
          </div>
          <div className="flex justify-center mt-3 mb-3">
            
            <button className='rounded-md h-10 py-2 px-6 ring-inset active:text-base focus-visible:outline-1 focus-visible:ring-0 hover:bg-gray-600 active:ring-2 ring-gray-100 bg-gray-500'>Login</button>
            
          </div> 
          Don't have an account? 
          <span
           onClick={() => setAuthState("register")}
           className="cursor-pointer ms-1"
          > Register</span>       
        </>
    )
}

export default Login