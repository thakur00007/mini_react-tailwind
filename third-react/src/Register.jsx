
function Register(
    {setAuthState}
) {
    return (
        <>
        <h1 className="text-4xl text-center font-bold mb-10">Register</h1>
        <div className="flex justify-center mt-3 mb-5">
            <label 
              htmlFor="name"
              className='flex items-center rounded-s bg-gray-500 min-w-20 w-2/6 h-12 sm:w-1/4 p-1 sm:p-2 leading-none'
            >Full Name: </label>
            <input 
              id="name"
              type="text"
              className='rounded-e w-4/6 min-w-48 pointer-finger bg-gray-100 text-gray-900 focus-visible:outline-0 ring-inset focus-visible:border-none border border-gray-500 focus-visible:ring-2 ring-gray-500 font-semibold px-3'
            />
          </div>
          <div className="flex justify-center mt-3 mb-5">
            <label 
              htmlFor="email"
              className='flex items-center rounded-s bg-gray-500 min-w-20 w-2/6 h-12 sm:w-1/4 p-1 sm:p-2 leading-none'
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
              className='flex items-center rounded-s bg-gray-500 min-w-20 w-2/6 h-12 sm:w-1/4 p-1 sm:p-2 leading-none'
            >Password: </label>
            <input 
              id="pass"
              type="password"
              className='rounded-e w-4/6 h-12 min-w-48 pointer-finger bg-gray-100 text-gray-900 focus-visible:outline-0 ring-inset focus-visible:border-none border border-gray-500 focus-visible:ring-2 ring-gray-500 font-semibold px-3'
            />
          </div>
          <div className="flex justify-center mt-3 mb-5">
            <label 
              htmlFor="cnfpass"
              className='flex items-center rounded-s bg-gray-500 min-w-20 w-2/6 h-12 sm:w-1/4 p-1 sm:p-2 leading-none'
            >Confirm Password: </label>
            <input 
              id="cnfpass"
              type="password"
              className='rounded-e w-4/6 min-w-48 pointer-finger bg-gray-100 text-gray-900 focus-visible:outline-0 ring-inset focus-visible:border-none border border-gray-500 focus-visible:ring-2 ring-gray-500 font-semibold px-3'
            />
          </div>
          <div className="flex justify-center mt-3 mb-3">
            
            <button 
                className='rounded-md h-10 py-2 px-6 ring-inset active:text-base focus-visible:outline-1 focus-visible:ring-0 hover:bg-gray-600 active:ring-2 ring-gray-100 bg-gray-500'
            >Register</button>
            
          </div>
          Already have an account?
          <span 
          onClick={() => setAuthState("login")}
          className="cursor-pointer ms-1"
        >Login</span>
        
        </>
    )
}

export default Register