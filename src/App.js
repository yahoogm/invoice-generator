import Content from "../src/components/content/Content"
import Footer from "../src/components/footer/Footer"
import Header from "../src/components/header/header"
import Bisa from "../src/components/header/Bisa"
import Susah from "../src/components/header/Susah"
import Time from "../src/components/header/Time"
import { useState } from "react"
import { InvoiceProvider } from "./hooks/context"

const App = () => {
  const [items, setItems] = useState([])

  // ---- Start Function to handle some new items ---- //
  const handleAdd = () => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    setItems([...items, { id: id, item: "", qty: 1, rate: 0 }])
  }

  // ---- End Function to handle some new items ---- //

  // ---- Start Function to handle changes some  item ---- //
  const handleOnChangeItem = (index, item) => {
    const newItem = [...items]
    newItem[index].item = item
    setItems(newItem)
  }
  // ---- End Function to handle hanges some item ---- //

  // ---- Start Function to handle changes some  rate ---- //
  const handleOnChangeRate = (index, rate) => {
    const newRate = [...items]
    newRate[index].rate = rate
    setItems(newRate)
  }
  // ---- End Function to handle hanges some rate ---- //

  // ---- Start Function to handle delete some  item ---- //
  const handleDelete = (id) => {
    const delItem = items.filter((item) => item.id !== id)
    setItems(delItem)
  }
  // ---- End Function to handle delete some  item ---- //

  // ---- Start Function to handle changes some  qty ---- //
  const handleOnChangeQty = (index, qty) => {
    const newQty = [...items]
    newQty[index].qty = qty
    setItems(newQty)
  }
  // ---- End Function to handle hanges some items ---- //

  let subtotal = 0
  items.forEach((item) => {
    subtotal += Number(item.qty) * Number(item.rate)
  }, 0)

  return (
    <div className="container">
      <InvoiceProvider>
        <div className="flex flex-row justify-between">
          <div>
            <Header />
            <Bisa />
            <Susah />
          </div>
          <Time />
        </div>

        <Content items={items} handleDelete={handleDelete} handleAdd={handleAdd} handleOnChangeItem={handleOnChangeItem} handleOnChangeRate={handleOnChangeRate} handleOnChangeQty={handleOnChangeQty} />
        <Footer subtotal={subtotal} />
      </InvoiceProvider>
    </div>
  )
}
export default App
