import Content from "../src/components/content/Content";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/header";
import Bisa from "../src/components/header/Bisa";
import Susah from "../src/components/header/Susah";
import Time from "../src/components/header/Time";
import React, { useRef } from "react";
import { InvoiceProvider } from "./hooks/context";
import ReactToPrint from "react-to-print";

const App = () => {
  // ---- Start Function to format the amount to IDR ---- //
  const toCurrency = (number, currency, lang = undefined) => Intl.NumberFormat(lang, { style: "currency", currency }).format(number);
  // ---- End Function to format the amount to IDR ---- //

  const componentRef = useRef();

  return (
    <div ref={componentRef} className="w-[900px] m-auto border-l border-t border-b border-r-2 shadow-lg relative space-y-5 print:shadow-none print:border-none">
      <ReactToPrint trigger={() => <button className="print:hidden bg-[#009e90] p-4 right-0 absolute rounded-bl-3xl  hover:bg-[#009e74] border-[#10806f] border text-white shadow-md">Print</button>} content={() => componentRef.current} />

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
            <Content toCurrency={toCurrency} />
          </div>
          <div>
            <Footer toCurrency={toCurrency} />
          </div>
        </InvoiceProvider>
      </div>
    </div>
  );
};
export default App;
