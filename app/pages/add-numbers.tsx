import React, { useState } from 'react';

const AddNumbersPage = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult(sum);
  };

  return (
    <div className='container mx-auto my-8 p-6 max-w-xl bg-white rounded shadow-md'>
      <h1 className='text-2xl font-bold text-center mb-4'>Add Two Numbers</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          placeholder='Enter first number'
          className='mb-4 w-full px-3 py-2 border rounded'
        />
        <input
          type='number'
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          placeholder='Enter second number'
          className='mb-4 w-full px-3 py-2 border rounded'
        />
        <button type='submit' className='w-full bg-blue-500 text-white px-3 py-2 rounded'>Add Numbers</button>
      </form>
      {result !== null && <p className='mt-4 font-semibold'>Result: {result}</p>}
    </div>
  );
};

export default AddNumbersPage;
