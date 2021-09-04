import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import PunetoriStore from "./punetoriStore";
import UserStore from "./userStore";

interface Store{
    punetoriStore: PunetoriStore;
    userStore: UserStore;
    commonStore: CommonStore;
} 

export const store: Store ={
    punetoriStore: new PunetoriStore(),
    userStore: new UserStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}

