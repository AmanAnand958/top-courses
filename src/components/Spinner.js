import React from 'react';
import "./spinner.css";
function Spinner() {
  return (
    <div className='flex flex-xol items-center space-y-2'>
        <div className='loader'></div>
        <p className='text-bgDark text-lg font-semibold'>Loading.....</p>
    </div>
  )
}

export default Spinner 