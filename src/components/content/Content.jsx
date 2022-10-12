import Inputs from './Inputs';
import { FcPlus } from 'react-icons/fc';

const Content = ({ items, handleAdd, handleDelete, handleOnChangeItem, handleOnChangeQty, handleOnChangeRate }) => {
  return (
    <>
      <table className="w-full table-fixed">
        <colgroup>
          <col className="w-[35%]"></col>
          <col className="w-[15%]"></col>
          <col className="w-[25%]"></col>
          <col className="w-[25%]"></col>
        </colgroup>
        <thead className="bg-gray-800 text-white text-left">
          <tr>
            <th className="p-1">Item</th>
            <th className="p-1">Quantity</th>
            <th className="p-1 bg-blue-300">Rate</th>
            <th className="p-1 bg-red-500">Amount</th>
          </tr>
        </thead>

        <tbody>
          <Inputs items={items} handleOnChangeQty={handleOnChangeQty} handleOnChangeRate={handleOnChangeRate} handleOnChangeItem={handleOnChangeItem} handleDelete={handleDelete} />
        </tbody>
      </table>
      <button onClick={() => handleAdd()} className="flex items-center bg-green-600 p-1 rounded space-x-2 text-white mt-1 shadow-md hover:bg-green-700">
        <FcPlus className="mr-1" />
        Line Item
      </button>
    </>
  );
};

export default Content;
