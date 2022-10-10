import React, { useState } from 'react';
import Inputs from './Inputs';

const Main = () => {
  const [title, setTitle] = useState('');
  const [qty, setQty] = useState(1);
  const [rate, setRate] = useState(0);

  //   Function button to handle add
  const handleAdd = () => {
    setTitle(...title);
    setQty(1);
    setRate(0);
  };

  return (
    <div>
      <table>
        <thead className="bg-red-200">
          <tr>
            <th>item</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          <Inputs title={title} setTitle={setTitle} qty={qty} setQty={setQty} rate={rate} setRate={setRate} />
        </tbody>
      </table>
      <button onClick={handleAdd}>add</button>
    </div>
  );
};

export default Main;
