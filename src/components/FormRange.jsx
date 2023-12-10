/* eslint-disable react/prop-types */
import React from 'react'
import { formatPrice } from '../utilities'
const FormRange = ({ label, name, size }) => {
  var step = 1000
  var maxPrice = 100000
  var [selectedPrice, setSelectedPrice] = React.useState(maxPrice)
  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        id={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        name={name}
        onChange={(e) => {
          setSelectedPrice(e.target.value)
        }}
        step={step}
        className={`range range-primary ${size}`}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  )
}

export default FormRange
