import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-center md:justify-between items-center h-12 p-4 w-screen '>
        <div className='text-xl'>STOCK MARKET PREDICTOR</div>
        <div> 
            <ul className='justify-between items-center p-2 gap-8 hidden md:flex '>
                <li><a href="https://www.nseindia.com/">NSE</a></li>
                <li><a href="#click">HOW TO USE</a></li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar;