import { createContext, useContext } from "react";
import KonsultimeStore from "./konsultimeStore";
import NotaStore from "./notaStore";

interface Store{
    notaStore: NotaStore
    konsultimeStore: KonsultimeStore
} 

export const store: Store ={
    notaStore: new NotaStore(),
    konsultimeStore: new KonsultimeStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}

