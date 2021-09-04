import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import PunetoriStore from "./punetoriStore";
import UserStore from "./userStore";

interface Store{
    punetoriStore: PunetoriStore;
    userStore: UserStore;
    commonStore: CommonStore;
    modalStore: ModalStore;
} 

export const store: Store ={
    punetoriStore: new PunetoriStore(),
    userStore: new UserStore(),
    commonStore: new CommonStore(),
    modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}

