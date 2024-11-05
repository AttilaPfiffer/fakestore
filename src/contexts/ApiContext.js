
/* 1. createContext
   2. provider
   3. provider és a context összekötése
   4. körbeölelgetés
   5. felhasználás komponensekben */


import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";


export const ApiContext = createContext("")

export const ApiProvider = ({children}) => {
    const [termekLista, setTermekLista] = useState([])
    const vegpont = "https://fakestoreapi.com/products"
    const getAdat = async (vegpont) => {
        try {
            const response = await myAxios.get(vegpont)
            setTermekLista(response.data)
        } catch(err){
            console.log("Hiba történt az adatok lekérésekor")
        } finally {

        }
    }

    // asszinkron hívások kezelése a useEffect hook

    useEffect(() => {
        getAdat("/products")
    }, [])

    return (
        <ApiContext.Provider value = {{termekLista}}>
            {children}
        </ApiContext.Provider>
    )
}