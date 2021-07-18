import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/metodaAgent";
import { Nota } from "../models/nota";

export default class NotaStore {
  notaRegistry = new Map<string, Nota>();
  selectedNota: Nota | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }

  get notatByDate() {
    return Array.from(this.notaRegistry.values()).sort(
      (a, b) => Date.parse(a.date) - Date.parse(b.date)
    );
  }

  get groupedNotat() {
    return Object.entries(   //nje array i objekteve, cdo objekt e ka nje key qe o date dhe per cdo date do kemi array te datave
      this.notatByDate.reduce((notat, nota) => {
        const date = nota.date;  
        notat[date] = notat[date] ? [...notat[date], nota] : [nota];
        return notat;
      }, {} as {[key: string]: Nota[]})
    )
  }

  loadNotat = async () => {
    this.loadingInitial = true;
    try {
      const notat = await agent.Notat.list();
      notat.forEach(nota => {
        this.setNota(nota);
      })
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  }

  loadNota = async (id: string) => {
    let nota = this.getNota(id);
    if (nota) {
      this.selectedNota = nota;
      return nota;
    } else {
      this.loadingInitial =true;
      try {
        nota = await agent.Notat.details(id);
        this.setNota(nota);
        runInAction(() => {
          this.selectedNota = nota;
        }) 
        this.setLoadingInitial(false);
        return nota;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  }

  private setNota = (nota: Nota) => {
    nota.date = nota.date.split("T")[0];
    this.notaRegistry.set(nota.id, nota);
  };

  private getNota = (id: string) => {
    return this.notaRegistry.get(id);
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  addNota = async (nota: Nota) => {
    this.loading = true;
    try {
      await agent.Notat.create(nota);
      runInAction(() => {
        this.notaRegistry.set(nota.id, nota);
        this.selectedNota = nota;
        this.editMode = false;
        this.loading = false;
      })
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
  
  updateNota = async (nota: Nota) => {
    this.loading = true;
    try {
      await agent.Notat.update(nota);
      runInAction(() => {
        this.notaRegistry.set(nota.id, nota);
        this.selectedNota = nota;
        this.editMode = false;
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  deleteNota = async (id: string) => {
    this.loading = true;
    try {
      await agent.Notat.delete(id);
      runInAction(() => {
        this.notaRegistry.delete(id);
        this.loading = false;
      });
    } catch (error) {
      console.log(error);
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}
