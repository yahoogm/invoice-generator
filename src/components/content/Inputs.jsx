import React, { useEffect, useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';

// ------ {items, handleOnChangeQty .... is a props from Content.jsx (parent)} ------- //
const Inputs = ({ items, handleOnChangeQty, handleOnChangeRate, handleOnChangeItem, handleDelete }) => {
  // --------- Start State to change something in items --------- //
  const [qty, setQty] = useState([1]);
  const [rate, setRate] = useState([1]);
  const [title, setTitle] = useState('');
  // --------- End State to change something in items --------- //

  // --------- Start Effect to render something new changes of items --------- //
  useEffect(() => {
    items.map((item, index) => setQty([...title, item.title]));
  }, [items]);

  useEffect(() => {
    items.map((item, index) => setQty([...qty, item.qty]));
  }, [items]);

  useEffect(() => {
    items.map((item, index) => setRate([...rate, item.rate]));
  }, [items]);
  // --------- End Effect to render something new changes of items --------- //

  // ---- Start Function to format the amount to IDR ---- //
  const toCurrency = (number, currency, lang = undefined) => Intl.NumberFormat(lang, { style: 'currency', currency }).format(number);
  // ---- End Function to format the amount to IDR ---- //

  return (
    <>
      {items.map((item, index) => (
        <tr key={item.id}>
          <td>
            <input
              className="text-gray-600 w-full duration-300 border rounded-sm p-1 hover:border-gray-400  focus:outline-[#009e74] px-3 placeholder:text-gray-500"
              type="text"
              placeholder="Description of service or product..."
              value={item.title}
              onChange={(e) => {
                let titles = [...title];
                titles[index] = e.target.value;
                setTitle(titles);
                handleOnChangeItem(index, e.target.value);
              }}
            />
          </td>
          <td>
            <input
              className="text-gray-600 px-4 border rounded-sm p-1 w-full duration-300 hover:border-gray-400  focus:outline-[#009e74] invalid:outline-red-400"
              placeholder="Quantity"
              min="1"
              type="number"
              value={item.qty}
              onChange={(e) => {
                let quantity = [...qty];
                quantity[index] = e.target.value;
                setQty(quantity);
                handleOnChangeQty(index, e.target.value);
              }}
            />
          </td>
          <td>
            <span className="absolute mt-2 ml-4 font-mono text-sm text-gray-600">Rp</span>
            <input
              className="text-gray-600 pl-12 border duration-300 rounded-sm p-1 w-full hover:border-gray-400  focus:outline-[#009e74]"
              value={item.rate}
              onChange={(e) => {
                let rates = [...rate];
                rates[index] = e.target.value;
                setRate(rates);
                handleOnChangeRate(index, e.target.value);
              }}
              type="number"
            />
          </td>
          <td>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">{toCurrency(item.qty * item.rate, 'IDR')}</span>
              {items.length === 1 ? '' : <HiOutlineX className="cursor-pointer hover:text-red-500 duration-300 " onClick={() => handleDelete(item.id)} />}
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Inputs;
