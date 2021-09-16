import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import FluturimiStore from "./fluturimiStore";
import ModalStore from "./modalStore";
import PunetoriStore from "./punetoriStore";
import RezervimiStore from "./rezervimiStore";
import UdhetariStore from "./udhetariStore";
import UserStore from "./userStore";

interface Store{
    punetoriStore: PunetoriStore;
    fluturimiStore: FluturimiStore;
    userStore: UserStore;
    commonStore: CommonStore;
    modalStore: ModalStore;
    udhetariStore: UdhetariStore;
    rezervimiStore: RezervimiStore;
} 

export const store: Store ={
    punetoriStore: new PunetoriStore(),
    fluturimiStore: new FluturimiStore(),
    userStore: new UserStore(),
    commonStore: new CommonStore(),
    modalStore: new ModalStore(),
    udhetariStore: new UdhetariStore(),
    rezervimiStore: new RezervimiStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}

