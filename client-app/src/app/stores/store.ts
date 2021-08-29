import { createContext, useContext } from "react";
// import CommonStore from "./commonStore";
import PunetoriStore from "./punetoriStore";

interface Store{
    punetoriStore: PunetoriStore;
    // commonStore: CommonStore;
} 

export const store: Store ={
    punetoriStore: new PunetoriStore()
    // commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}

