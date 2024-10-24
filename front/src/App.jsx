import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Stock Price Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input type="text" value={ltp} onChange={(e) => setLtp(e.target.value)} /> {/* Changed to text for price */}
          </label>
        </div>
        <div>
          <label>
            File:
            <input type="file" onChange={(e) => setFile(e.target.files[0])} /> {/* Removed value prop */}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
      {pred && (
          <div>
            <h2>{pred.prediction}</h2>
            <h2>{pred.accuracy}</h2>
          </div>
        )}
        {loading && <h3>Loading...</h3>}
      </div>
    </div>
  );
}

export default App;
