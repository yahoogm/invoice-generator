import React, { useState } from "react"
import Inputs from "./Inputs"

const Content = () => {
  const [items, setItems] = useState([])

  // ---- Start Function to handle some new items ---- //
  const handleAdd = () => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    setItems([...items, { id: id, item: "", qty: 1, rate: 0 }])
  }
  // ---- End Function to handle some new items ---- //

  // ---- Start Function to handle changes some  qty ---- //
  const handleOnChangeQty = (index, qty) => {
    const newQty = [...items]
    newQty[index].qty = qty
    setItems(newQty)
  }
  // ---- End Function to handle hanges some items ---- //

  // ---- Start Function to handle changes some  rate ---- //
  const handleOnChangeRate = (index, rate) => {
    const newRate = [...items]
    newRate[index].rate = rate
    setItems(newRate)
  }
  // ---- End Function to handle hanges some rate ---- //

  // ---- Start Function to handle changes some  item ---- //
  const handleOnChangeItem = (index, item) => {
    const newItem = [...items]
    newItem[index].item = item
    setItems(newItem)
  }
  // ---- End Function to handle hanges some item ---- //

  // ---- Start Function to handle delete some  item ---- //
  const handleDelete = (id) => {
    const delItem = items.filter((item) => item.id !== id)
    setItems(delItem)
    console.log(delItem)
  }
  // ---- End Function to handle delete some  item ---- //

  return (
    <div>
      <table>
        <thead className="bg-red-200">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Amount</th>
            <th>Setting</th>
          </tr>
        </thead>

        <tbody>
          <Inputs items={items} handleOnChangeQty={handleOnChangeQty} handleOnChangeRate={handleOnChangeRate} handleOnChangeItem={handleOnChangeItem} handleDelete={handleDelete} />
        </tbody>
      </table>
      <button onClick={handleAdd}>add</button>
    </div>
  )
}

export default Content
