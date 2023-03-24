import React from "react"

const Product = (props) => {
  return (
    <div className="glass rounded-[69px] p-8 text-white">
      <img src={props.image} alt={props.title} className="w-full" />
      <h2>{props.title}</h2>
      <p>Price: {props.price}</p>
      <p>Rating: {props.rating}</p>
      <p>Old Price: {props.oldPrice}</p>
      <p>Quantity: {props.quantity}</p>
    </div>
  )
}

export default Product
