import { Children, createContext } from "react";

const ContextSaved = createContext();

const ContextProviiderSaved = ({children}) => {

    const savedProducts = JSON.parse(
        localStorage.getItem("saved-pproducts")
    )

    if(!savedProducts){
        localStorage.setItem("saved-products",
        JSON.stringify([]))
    }

    const ChekSaved = (payload) => {
        savedProducts.forEach(element => {
            if(element.id !== payload?.id){
                savedProducts.push({...payload, saved: true});
            }

            savedProducts.forEach(element => {
                if(element.id !== payload?.id) {
                    savedProducts.push({...payload, saved: true})
                }
            })
        });

        localStorage.setItem("saved-products", JSON.stringify(savedProducts))
    }

    const SavedContent = {ChekSaved, savedProducts}

    return <ContextSaved.Provider value={SavedContent}>
        {children}
    </ContextSaved.Provider>
     

}

export { ContextProviiderSaved, ContextSaved}