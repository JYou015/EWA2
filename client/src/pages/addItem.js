import { useState } from 'react'
import React from 'react'
import Button from '@mui/material/Button';

const AddTask = ({ onAdd }) => {
  const [product, setProduct] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!product) {
      alert('Please add a task')
      return
    }

    onAdd({ product, quantity, price })

    setProduct('')
    setQuantity('')
    setPrice('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Product'
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <label>Quantity</label>
        <input
          type='number'
          placeholder='Quantity'
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <label>Price</label>
        <input
          type='number'
          placeholder='Price'
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      <Button type='submit' variant="contained" size = "small"> Save Item</Button>
    </form>
  )
}

export default AddTask