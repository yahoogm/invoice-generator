import Sidebar from "../footer/Sidebar"
import Total from "../footer/Total"
const Footer = () => {
  return (
    <>
      <Sidebar title={"Notes"} place={"Notes - any relevant information not already covered"} />
      <Sidebar title={"Terms"} place={"Term and Conditions - late fees,payment methods,delivery schedule"} />
      <br />
      <Total inputtext={"Subtotal"} inputplace={"Rp."} />
      <Total inputtext={"Discount"} inputplace={"Rp."} />
      <Total inputtext={"Tax"} inputplace={"Rp."} />
      <Total inputtext={"Shipping"} inputplace={"Rp."} />
      <Total inputtext={"Total"} inputplace={"Rp."} />
      <Total inputtext={"Amount Paid"} inputplace={"Rp."} />
      <Total inputtext={"Balance Due"} inputplace={"Rp."} />
    </>
  )
}
export default Footer
