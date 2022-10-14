import React, { useEffect, useState } from "react"

// ------ {items, handleOnChangeQty .... is a props from Content.jsx (parent)} ------- //
const Inputs = ({ items, handleOnChangeQty, handleOnChangeRate, handleOnChangeItem, handleDelete }) => {
  // --------- Start State to change something in items --------- //
  const [qty, setQty] = useState([1])
  const [rate, setRate] = useState([1])
  const [title, setTitle] = useState("")
  // --------- End State to change something in items --------- //

  // --------- Start Effect to render something new changes of items --------- //
  useEffect(() => {
    items.map((item, index) => setQty([...title, item.title]))
  }, [items])

  useEffect(() => {
    items.map((item, index) => setQty([...qty, item.qty]))
  }, [items])

  useEffect(() => {
    items.map((item, index) => setRate([...rate, item.rate]))
  }, [items])
  // --------- End Effect to render something new changes of items --------- //

  return (
    <>
      {items.map((item, index) => (
        <tr key={item.id}>
          <td>
            <input
              className="text-center w-full"
              type="text"
              placeholder="Description of service or product..."
              value={item.title}
              onChange={(e) => {
                let titles = [...title]
                titles[index] = e.target.value
                setTitle(titles)
                handleOnChangeItem(index, e.target.value)
              }}
            />
          </td>
          <td>
            <input
              className="text-center"
              placeholder="Quantity"
              type="number"
              value={item.qty}
              onChange={(e) => {
                let quantity = [...qty]
                quantity[index] = e.target.value
                setQty(quantity)
                handleOnChangeQty(index, e.target.value)
              }}
            />
          </td>
          <td>
            <input
              className="text-center"
              value={item.rate}
              onChange={(e) => {
                let rates = [...rate]
                rates[index] = e.target.value
                setRate(rates)
                handleOnChangeRate(index, e.target.value)
              }}
              type="number"
            />
          </td>
          <td>
            <span>{Number(item.qty) * Number(item.rate)}</span>
          </td>
          <td>
            {items.length === 1 ? (
              ""
            ) : (
              <button className="bg-red-300 rounded" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            )}
          </td>
        </tr>
      ))}
    </>
  )
}

export default Inputs
