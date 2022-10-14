

  // ---- Start Function to handle changes some  item ---- //
  const handleOnChangeItem = (index, item) => {
    const newItem = [...items]
    newItem[index].item = item
    setItems(newItem)
  }
  // ---- End Function to handle hanges some item ---- //

  // ---- Start Function to handle delete some  item ---- //
  const handleDelete = (id) => {
    const delItem = items.filter((item) => item.id !== id)
    setItems(delItem)
  }
  // ---- End Function to handle delete some  item ---- //

  let subtotal = 0
  items.forEach((item) => {
    subtotal += Number(item.qty) * Number(item.rate)
  }, 0)

  return (
    <>
    
      <Content items={items} handleDelete={handleDelete} handleAdd={handleAdd} handleOnChangeItem={handleOnChangeItem} handleOnChangeRate={handleOnChangeRate} handleOnChangeQty={handleOnChangeQty} />
      <br />
      <br />
      <br />

      <Footer subtotal={subtotal} />
    </>
  )
}
export default App
