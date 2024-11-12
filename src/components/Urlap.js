import React, { useContext, useState } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import { calculateNewValue } from '@testing-library/user-event/dist/utils'

export default function Urlap(props) {
    const{postAdat, katLista} = useContext(ApiContext)
    const[adat, setAdat] = useState({
        title: "Ez a termék neve",
        price: "...",
        category: "...",
        description: "...",
        image: "..."
    })

    function valtoztataskezeles(event) {
        /* az inputba beirt adatokkal kell frissiteni az objektumunkat */
        const sObj = {...adat}
        sObj[event.target.id] = event.target.value
        setAdat({...sObj})
    }
    function elkuld(event){
        /* leszedjük az alapértelmezett eseménykezelőt*/
        event.preventDefault()
        /* összegyűjtjük az adatokat az űrlap mezőiből és összeállítunk egy objektumot, ezt az objektumot elküldjük a post kéréssel a végpontra */
        console.log("elküld", adat)
        postAdat("/products", adat)
    }
  return (
    <div>
        <form onSubmit = {elkuld}>

        <div class="mb-3">
            <label htmlFor="title" class = "form-label">Termék neve</label>
            <input type="text" pattern = "" value = {adat.title} onChange = {valtoztataskezeles} className="form-control" id="title" aria-describedby="titleHelp" />
        </div>


        <div class="mb-3">
            <label htmlFor="price" class = "form-label">Termék ára</label>
            <input type="number" min = "1000" max = "100000" value = {adat.price} onChange = {valtoztataskezeles} className="form-control" id="price" aria-describedby="titleHelp" />
        </div>

        <div className="form-group">
            <label htmlFor="description">Example textarea</label>
            <textarea className="form-control" id="description" rows="3" onChange = {valtoztataskezeles}></textarea>
        </div>

        <div className="form-group">
            <label htmlFor="exampleFormControlSelect1"></label>
            <select onChange = {valtoztataskezeles} className="form-control" id="category" value = {adat.category}>
                
                {
                        katLista.map((elem) => {
                            return <option value = {elem}>{elem}</option>
                    })
                }
            </select>
        </div>

        
        
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>


    </div>
  )
}
