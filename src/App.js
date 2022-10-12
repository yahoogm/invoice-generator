import './App.css';
import Content from './components/content/Content';
import {useState} from 'react'

function App() {

  const [items, setItems] = useState([]);

  // ---- Start Function to handle some new items ---- //
  const handleAdd = () => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    setItems([...items, { id: id, item: '', qty: 1, rate: 0 }]);
  };
  // ---- End Function to handle some new items ---- //

  // ---- Start Function to handle changes some  qty ---- //
  const handleOnChangeQty = (index, qty) => {
    const newQty = [...items];
    newQty[index].qty = qty;
    setItems(newQty);
  };
  // ---- End Function to handle hanges some items ---- //

  // ---- Start Function to handle changes some  rate ---- //
  const handleOnChangeRate = (index, rate) => {
    const newRate = [...items];
    newRate[index].rate = rate;
    setItems(newRate);
  };
  // ---- End Function to handle hanges some rate ---- //

  // ---- Start Function to handle changes some  item ---- //
  const handleOnChangeItem = (index, item) => {
    const newItem = [...items];
    newItem[index].item = item;
    setItems(newItem);
  };
  // ---- End Function to handle hanges some item ---- //

  // ---- Start Function to handle delete some  item ---- //
  const handleDelete = (id) => {
    const delItem = items.filter((item) => item.id !== id);
    setItems(delItem);
  };
  // ---- End Function to handle delete some  item ---- //

  return (
    <div className="mt-20 w-full p-5">
      <Content items={items} setItems={setItems} handleAdd={handleAdd} handleDelete={handleDelete} handleOnChangeItem={handleOnChangeItem} handleOnChangeQty={handleOnChangeQty} handleOnChangeRate={handleOnChangeRate}/>
    </div>
  );
}

export default App;
