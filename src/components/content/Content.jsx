
import Inputs from './Inputs';
import { HiPlus } from 'react-icons/hi';

const Content = ({ items, handleAdd, handleOnChangeQty, handleOnChangeRate, handleOnChangeItem, handleDelete }) => {
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
          <Inputs items={items} handleOnChangeQty={handleOnChangeQty} handleOnChangeRate={handleOnChangeRate} handleOnChangeItem={handleOnChangeItem} handleDelete={handleDelete} />
        </tbody>
      </table>
      <button onClick={() => handleAdd()} className="flex items-center bg-[#009e74] p-1 rounded space-x-2 text-white mt-1 shadow-md hover:bg-[#009e90] border-[#10806f] border">
        <HiPlus className="mr-1 text-white" />
        Line Item
      </button>

    </>
  )
}

export default Content
