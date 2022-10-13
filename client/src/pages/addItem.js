import { useState } from 'react'
import React from 'react'

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
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>quant & Time</label>
        <input
          type='number'
          placeholder='Add quant & Time'
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set price</label>
        <input
          type='number'
          placeholder='Add price'
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </div>

      <input type='submit' value='Save Item' className='btn btn-block' />
    </form>
  )
}

export default AddTask