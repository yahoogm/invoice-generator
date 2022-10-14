// import React, { useState } from "react"
import Inputs from "./Inputs"

const Content = ({ items, handleAdd, handleOnChangeQty, handleOnChangeRate, handleOnChangeItem, handleDelete }) => {
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
          <Inputs items={items} handleOnChangeQty={handleOnChangeQty} handleOnChangeRate={handleOnChangeRate} handleOnChangeItem={handleOnChangeItem} handleDelete={handleDelete} handleAdd={handleAdd} />
        </tbody>
      </table>
      <button onClick={handleAdd}>add</button>
    </>
  )
}

export default Content
