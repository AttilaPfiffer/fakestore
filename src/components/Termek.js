import React from 'react'
import "./Termek.css"

export default function Termek(props) {
    // létre kell hozni egy terméket
  return (
    <div className='card'>
        <h4 className='card-title'>{props.jel.title}</h4>
        <img className="card-img" src={props.jel.image} alt={props.jel.image}/>
        <p>{props.jel.description}</p>
        <p>{props.jel.category}</p>
        <button type="button" class="btn btn-primary">Kosárba</button>
        <p>{props.jel.price} $</p>
    </div>
  )
}
