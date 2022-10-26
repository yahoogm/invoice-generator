import React, { createContext, useContext, useState } from "react";

const invoiceContext = createContext();

const useInvoiceProvider = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      item: "",
      qty: 1,
      rate: 0,
    },
  ]);
  const [field1, setField1] = useState(123);
  const [field2, setField2] = useState(null);
  return {
    items,
    setItems,
    field1,
    setField1,
    field2,
    setField2,
  };
};

export const InvoiceProvider = ({ children }) => {
  const invoice = useInvoiceProvider();
  return <invoiceContext.Provider value={invoice}>{children}</invoiceContext.Provider>;
};

export const useInvoice = () => {
  return useContext(invoiceContext);
};
