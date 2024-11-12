
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
    const [katLista, setKatLista] = useState([])
    
    const getAdat = async (vegpont, callback) => {
        try {
            const response = await myAxios.get(vegpont)
            setTermekLista(response.data)
            callback([...response.data])
        } catch(err){
            console.log("Hiba történt az adatok lekérésekor")
        } finally {

        }
    }

    const postAdat = async (vegpont, adat) => {
        try {
            const response = await myAxios.post(vegpont, adat)
            console.log(response)

        } catch(err){
            console.log("Hiba történt az adatok lekérésekor")
        } finally {

        }
    }




    // asszinkron hívások kezelése a useEffect hook

    useEffect(() => {
        getAdat("/products", setTermekLista)
        getAdat("/products/categories", setKatLista)
    }, [])

    return (
        <ApiContext.Provider value = {{termekLista, postAdat, katLista}}>
            {children}
        </ApiContext.Provider>
    )
    
}