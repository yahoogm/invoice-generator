import Inputs from './Inputs';

const Content = ({ items, handleAdd, handleDelete, handleOnChangeItem, handleOnChangeQty, handleOnChangeRate }) => {
  return (
    <>
      <table className="w-full">
        <thead className="bg-red-200 text-center">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>

        <tbody className="text-center">
          <Inputs items={items} handleOnChangeQty={handleOnChangeQty} handleOnChangeRate={handleOnChangeRate} handleOnChangeItem={handleOnChangeItem} handleDelete={handleDelete} />
        </tbody>
      </table>
      <button onClick={() => handleAdd()}>Add List</button>
    </>
  );
};

export default Content;
