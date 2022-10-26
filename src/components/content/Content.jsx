import Inputs from "./Inputs";
import { HiPlus } from "react-icons/hi";
import { useInvoice } from "../../hooks/context";

const Content = ({ toCurrency }) => {
  const { items, setItems } = useInvoice();

  // ---- Start Function to handle some new items ---- //
  const handleAdd = () => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    setItems([...items, { id: id, item: "", qty: 1, rate: 0 }]);
  };
  // ---- End Function to handle some new items ---- //
  return (
    <>
      <table className="w-full table-fixed">
        <thead className="bg-gray-800 text-white text-left">
          <tr>
            <th className="p-1 w-[35%]">Item</th>
            <th className="p-1 w-[15%]">Quantity</th>
            <th className="p-1 w-[25%]">Rate</th>
            <th className="p-1 w-[25%]">Amount</th>
          </tr>
        </thead>

        <tbody>
          <Inputs toCurrency={toCurrency} />
        </tbody>
      </table>
      <button onClick={() => handleAdd()} className="flex items-center bg-[#009e90] p-1 rounded space-x-2 text-white mt-1 shadow-md hover:bg-[#009e74] border-[#10806f] border print:hidden">
        <HiPlus className="mr-1 text-white" />
        Line Item
      </button>
    </>
  );
};

export default Content;
