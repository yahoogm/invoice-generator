import { useState } from "react"
import Sidebar from "../footer/Sidebar"
import Total from "../footer/Total"

const Footer = ({ subtotal }) => {
  const [discount, setDiscount] = useState(0)
  const [payment, setPayment] = useState(0)
  const [tax, setTax] = useState(0)
  const [paid, setPaid] = useState(0)

  let total = subtotal + Number(payment) - Number(discount) + Number(tax)

  return (
    <>
      <div className="flex justify-between ">
        <div className="mt-2 mb-2">
          <Sidebar title={"Notes"} place={"Notes - any relevant information not already covered"} />
          <br />
          <br />
          <Sidebar title={"Terms"} place={"Term and Conditions - late fees,payment methods,delivery schedule"} />
          {/*  */}
        </div>

        <div className="mt-2 mb-2">
          <Total inputtext={"Subtotal"} value={subtotal} style={{ borderWidth: 0, boxShadow: "none", textAlign: "right" }} />
          <Total inputtext={"Discount"} onChange={(e) => setDiscount(e.target.value)} value={discount} />
          <Total inputtext={"Tax"} onChange={(e) => setTax(e.target.value)} value={tax} />
          <Total inputtext={"shipping"} onChange={(e) => setPayment(e.target.value)} value={payment} />

          <Total inputtext={"Total"} value={total} style={{ borderWidth: 0, boxShadow: "none", textAlign: "right" }} />

          <Total inputtext={"Amount Paid"} onChange={(e) => setPaid(e.target.value)} value={paid} />
          <Total inputtext={"Balance Due"} value={Number(paid) - total} style={{ borderWidth: 0, boxShadow: "none", textAlign: "right" }} />
        </div>
      </div>
    </>
  )
}
export default Footer
