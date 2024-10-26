import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Usage from './components/Usage';
function App() {
  const [file, setFile] = useState(null);
  const [date, setDate] = useState('');
  const [ltp, setLtp] = useState('');
  const [pred, setPred] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('date', date);
    formData.append('ltp', ltp);

    try {
      const res = await axios.post('http://127.0.0.1:8000/getdata', formData); // Make sure the URL is correct
      setPred(res.data);
      setLoading(false)
    } catch (error) {
      alert('Something went wrong: ' + error.message);
      setLoading(false)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute top-0 z-[-2] min-h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
      <Navbar />
      <div className='h-3/4 w-5/6 lg:w-2/4 p-2 m-auto my-10 border-[#ffffff] border-2'>
        <h1 className='text-center mb-8 text-xl'>GET PREDICTIONS</h1>
        <form onSubmit={handleSubmit} className='flex justify-center flex-col gap-5 p-2'>
          <div>
            <label >
              <div className=' font-mono text-lg'>Date:</div>
              <div className=' flex justify-center'><input className='text-black w-3/4 rounded-sm text-center  h-9' type="date" value={date} onChange={(e) => setDate(e.target.value)} /></div>
            </label>
          </div>
          <div>
            <label>
              <div className=' font-mono text-lg'>Price:</div>
              <div className='flex justify-center'> <input className='text-black w-3/4 rounded-sm text-center  h-9' type="text" value={ltp} onChange={(e) => setLtp(e.target.value)} /> {/* Changed to text for price */}</div>
            </label>
          </div>
          <div>
            <label>
              <div className=' font-mono text-lg'>Upload File</div>
              <div className='flex justify-center pl-5'><input type="file" onChange={(e) => setFile(e.target.files[0])} /> {/* Removed value prop */}</div>
            </label>
          </div>
          <button className='bg-[#ffffff65] border-2 border-black w-fit m-auto p-1 rounded-md ' type="submit">Submit</button>
        </form>
        <div>
          {pred && (
            <div className='text-2xl ml-4'>
              <h2>{pred.prediction}</h2>
              <h2>{pred.accuracy}</h2>
            </div>
          )}
          {loading && <h3>Loading...</h3>}
        </div>
      </div>
      <div id='click'><Usage />  </div>  
    </div>
  );
}

export default App;
