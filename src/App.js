import "./App.css"
import Content from "./components/content/Content"
import { useState } from "react"
import Footer from "./components/footer/Footer"
function App() {
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
  }
  // ---- End Function to handle delete some  item ---- //

  let subtotal = 0
  items.forEach((item) => {
    subtotal += Number(item.qty) * Number(item.rate)
  }, 0)

  return (
    <>
      <Content items={items} handleDelete={handleDelete} handleAdd={handleAdd} handleOnChangeItem={handleOnChangeItem} handleOnChangeRate={handleOnChangeRate} handleOnChangeQty={handleOnChangeQty} />
      <br />
      <br />
      <br />

      <Footer subtotal={subtotal} />
    </>
  )
}
export default App
