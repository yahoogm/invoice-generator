import { useState } from "react";
import { useInvoice } from "../../hooks/context";
import Sidebar from "../footer/Sidebar";
import Total from "../footer/Total";

const Footer = ({ notes, terms, setNotes, setTerms, toCurrency }) => {
  const { items } = useInvoice();
  const [discount, setDiscount] = useState(0);
  const [payment, setPayment] = useState(0);
  const [tax, setTax] = useState(0);
  const [paid, setPaid] = useState(0);

  let subtotal = 0;
  items.forEach((item) => {
    subtotal += Number(item.qty) * Number(item.rate);
  }, 0);

  let total = subtotal + Number(payment) - Number(discount) + Number(tax);

  return (
    <>
      <div className="flex  justify-between ">
        <div className="mt-2 mb-2 w-full ">
          <Sidebar title={"Notes"} place={"Notes - any relevant information not already covered"} value={notes} onChange={(e) => setNotes(e.target.value)} />
          <br />
          <br />
          <Sidebar title={"Terms"} place={"Term and Conditions - late fees,payment methods,delivery schedule"} value={terms} onChange={(e) => setTerms(e.target.value)} />
          {/*  */}
        </div>

        <div className="mt-2 mb-2 w-full">
          <Total inputtext={"Subtotal"} value={toCurrency(subtotal, "IDR")} style={{ borderWidth: 0, boxShadow: "none", textAlign: "right" }} />
          <Total inputtext={"Discount"} onChange={(e) => setDiscount(e.target.value)} value={discount} />
          <Total inputtext={"Tax"} onChange={(e) => setTax(e.target.value)} value={tax} />
          <Total inputtext={"shipping"} onChange={(e) => setPayment(e.target.value)} value={payment} />
          <Total inputtext={"Total"} value={toCurrency(total, "IDR")} style={{ borderWidth: 0, boxShadow: "none", textAlign: "right" }} />
          <Total inputtext={"Amount Paid"} onChange={(e) => setPaid(e.target.value)} value={paid} />
          <Total inputtext={"Balance Due"} value={toCurrency(Number(paid) - total, "IDR")} style={{ borderWidth: 0, boxShadow: "none", textAlign: "right" }} />
        </div>
      </div>
    </>
  );
};
export default Footer;
