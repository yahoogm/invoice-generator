import React, { useEffect, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { useInvoice } from "../../hooks/context";

// ------ {items, handleOnChangeQty .... is a props from Content.jsx (parent)} ------- //
const Inputs = ({ toCurrency }) => {
  const { items, setItems } = useInvoice();
  // --------- Start State to change something in items --------- //
  const [qty, setQty] = useState([1]);
  const [rate, setRate] = useState([1]);
  const [title, setTitle] = useState("");
  // --------- End State to change something in items --------- //

  // --------- Start Effect to render something new changes of items --------- //
  useEffect(() => {
    items.map((item, index) => setQty([...title, item.title]));
  }, []);

  useEffect(() => {
    items.map((item, index) => setQty([...qty, item.qty]));
  }, []);

  useEffect(() => {
    items.map((item, index) => setRate([...rate, item.rate]));
  }, []);
  // --------- End Effect to render something new changes of items --------- //

  // ---- Start Function to handle changes some  item ---- //
  const handleOnChangeItem = (index, item) => {
    const newItem = [...items];
    newItem[index].item = item;
    setItems(newItem);
  };
  // ---- End Function to handle hanges some item ---- //

  // ---- Start Function to handle changes some  rate ---- //
  const handleOnChangeRate = (index, rate) => {
    const newRate = [...items];
    newRate[index].rate = rate;
    setItems(newRate);
  };
  // ---- End Function to handle hanges some rate ---- //

  // ---- Start Function to handle delete some  item ---- //
  const handleDelete = (id) => {
    const delItem = items.filter((item) => item.id !== id);
    setItems(delItem);
  };
  // ---- End Function to handle delete some  item ---- //

  // ---- Start Function to handle changes some  qty ---- //
  const handleOnChangeQty = (index, qty) => {
    const newQty = [...items];
    newQty[index].qty = qty;
    setItems(newQty);
  };
  // ---- End Function to handle hanges some items ---- //
  return (
    <>
      {items.map((item, index) => (
        <tr key={item.id}>
          <td>
            <input
              className="text-gray-600 w-full  border rounded-md p-1 hover:border-gray-400  focus:border-green-400  focus:ring-green-300  focus:outline-none  px-3 placeholder:text-gray-400 print:border-hidden"
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
              className="text-gray-600 px-4 border rounded-md p-1 w-full   focus:border-green-400  focus:ring-green-300  focus:outline-none hover:border-gray-400 print:border-hidden"
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
              className="text-gray-600 pl-12 border rounded-md p-1 w-full hover:border-gray-400  focus:border-green-400  focus:ring-green-300  focus:outline-none print:border-hidden "
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
              <span className="text-gray-600 text-sm">{toCurrency(item.qty * item.rate, "IDR")}</span>
              {items.length === 1 ? "" : <HiOutlineX className="cursor-pointer hover:text-red-500 duration-300 text-white" onClick={() => handleDelete(item.id)} />}
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default Inputs;
