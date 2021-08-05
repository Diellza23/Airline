import { createContext, useContext } from "react";
import PunetoriStore from "./punetoriStore";

interface Store{
    punetoriStore: PunetoriStore
} 

export const store: Store ={
    punetoriStore: new PunetoriStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}

