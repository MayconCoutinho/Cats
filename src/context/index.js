import { createContext, useEffect } from "react";
import { useState } from "react";
import { GetImageCats } from "../services/thecatapi";

export const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
    const [observe, setObserve] = useState(0)
    const [gatos, setGatos] = useState([])

    const atualizar = () => {
        setObserve(++observe)
    }

    useEffect(() => {
        const result = GetImageCats();

        result.then((response) => {
            let lista = [];

            // console.log("response = ", response)
            // console.log("Estou observando", observe)


            response.forEach((item, index) => {
                lista.push(item.url);

            });

            // console.log("lista = ", lista)

            // Verifique se ainda há algum item pendente na lista

            if (lista.length > 0) {

                const primeiroArray = lista.slice(0, 5);
                const segundoArray = lista.slice(5);

                setGatos((gatos) => [...gatos, ...[primeiroArray], ...[segundoArray]]);

                // console.log("gatos = ", gatos)


            }


        });
    }, [observe]);



    return (
        <GlobalContext.Provider value={{ gatos, atualizar }}>{children}</GlobalContext.Provider>
    )
} 