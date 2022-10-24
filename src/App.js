import Content from "../src/components/content/Content"
import Footer from "../src/components/footer/Footer"
import Header from "../src/components/header/header"
import Bisa from "../src/components/header/Bisa"
import Susah from "../src/components/header/Susah"
import Time from "../src/components/header/Time"
import React, { useRef, useState } from "react"
import { InvoiceProvider } from "./hooks/context"
import ReactToPrint from "react-to-print"

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      item: "",
      qty: 1,
      rate: 0,
    },
  ])
  const [btn, setBtn] = useState(true)
  const [notes, setNotes] = useState("")
  const [terms, setTerms] = useState("")

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

  const [pesan, setPesan] = useState("")

  // ---- Start Function to format the amount to IDR ---- //

  const toCurrency = (number, currency, lang = undefined) => Intl.NumberFormat(lang, { style: "currency", currency }).format(number)
  // ---- End Function to format the amount to IDR ---- //

  const componentRef = useRef()

  return (
    <div className="w-[900px] m-auto border-l border-t border-b border-r-2 shadow-lg relative space-y-5">
      <ReactToPrint trigger={() => <button className="bg-[#009e90] p-4 right-0 absolute rounded-bl-3xl  hover:bg-[#009e74] border-[#10806f] border text-white shadow-md">Print</button>} content={() => componentRef.current} />
      <div className=" space-y-5 p-4">
        <InvoiceProvider>
          <div className="flex flex-row justify-between">
            <div>
              <Header />
              <Bisa />
              <Susah />
            </div>
            <Time />
          </div>

          <div>
            <Content items={items} handleDelete={handleDelete} handleAdd={handleAdd} handleOnChangeItem={handleOnChangeItem} handleOnChangeRate={handleOnChangeRate} handleOnChangeQty={handleOnChangeQty} toCurrency={toCurrency} />
          </div>
          <div>
            <Footer subtotal={subtotal} notes={notes} setNotes={setNotes} terms={terms} setTerms={setTerms} toCurrency={toCurrency} />
          </div>
        </InvoiceProvider>
      </div>
    </div>
  )
}
export default App
