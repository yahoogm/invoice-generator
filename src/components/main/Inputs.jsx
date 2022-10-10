import React from 'react';

const Inputs = ({ title, setTitle, qty, setQty, rate, setRate }) => {
  return (
    <tr>
      <td>
        <input type="text" placeholder="Description of service or product..." value={title} onChange={(e) => setTitle(e.target.value)} />
      </td>
      <td>
        <input placeholder="Quantity" type="number" value={qty} onChange={(e) => setQty(e.target.value)} />
      </td>
      <td>
        <input value={rate} onChange={(e) => setRate(e.target.value)} type="number" />
      </td>
      <td>
        <input value={qty * rate} />
      </td>
    </tr>
  );
};

export default Inputs;
