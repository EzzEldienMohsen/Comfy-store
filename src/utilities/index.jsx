import axios from 'axios'
var url = 'https://strapi-store-server.onrender.com/api'
export var autoFetch = axios.create({
  baseURL: url,
})

export var formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2))
  return dollarsAmount
}

export var amountGeneration = (number) => {
  return Array.from({ length: number }, (_, index) => {
    var amount = index + 1
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    )
  })
}
