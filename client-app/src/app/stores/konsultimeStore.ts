import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/metodaAgent";
import { Konsultime } from "../models/konsultime";

export default class KonsultimeStore {
  konsultimeRegistry = new Map<string, Konsultime>();
  selectedKonsultime: Konsultime | undefined = undefined;
  editMode = false;
  loading = false;
  loadingInitial = true;

  constructor() {
    makeAutoObservable(this);
  }

  get konsultimetByDate() {
    return Array.from(this.konsultimeRegistry.values()).sort(
      (a, b) => Date.parse(a.koha) - Date.parse(b.koha)
    );
  }

  get groupedKonsultimet() {
    return Object.entries(   //nje array i objekteve, cdo objekt e ka nje key qe o date dhe per cdo date do kemi array te datave
      this.konsultimetByDate.reduce((konsultimet, konsultime) => {
        const koha = konsultime.koha;  
        konsultimet[koha] = konsultimet[koha] ? [...konsultimet[koha], konsultime] : [konsultime];
        return konsultimet;
      }, {} as {[key: string]: Konsultime[]})
    )
  }

  loadKonsultimet = async () => {
    this.loadingInitial = true;
    try {
      const konsultimet = await agent.Konsultimet.list();
      konsultimet.forEach(konsultime => {
        this.setKonsultime(konsultime);
      })
      this.setLoadingInitial(false);
    } catch (error) {
      console.log(error);
      this.setLoadingInitial(false);
    }
  }

  loadKonsultime = async (id: string) => {
    let konsultime = this.getKonsultime(id);
    if (konsultime) {
      this.selectedKonsultime = konsultime;
      return konsultime;
    } else {
      this.loadingInitial =true;
      try {
        konsultime = await agent.Konsultimet.details(id);
        this.setKonsultime(konsultime);
        runInAction(() => {
          this.selectedKonsultime = konsultime;
        }) 
        this.setLoadingInitial(false);
        return konsultime;
      } catch (error) {
        console.log(error);
        this.setLoadingInitial(false);
      }
    }
  }

  private setKonsultime = (konsultime: Konsultime) => {
    konsultime.koha = konsultime.koha.split("T")[0];
    this.konsultimeRegistry.set(konsultime.id, konsultime);
  };

  private getKonsultime = (id: string) => {
    return this.konsultimeRegistry.get(id);
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  addKonsultime = async (konsultime: Konsultime) => {
    this.loading = true;
    try {
      await agent.Konsultimet.create(konsultime);
      runInAction(() => {
        this.konsultimeRegistry.set(konsultime.id, konsultime);
        this.selectedKonsultime = konsultime;
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
  
  updateKonsultime = async (konsultime: Konsultime) => {
    this.loading = true;
    try {
      await agent.Konsultimet.update(konsultime);
      runInAction(() => {
        this.konsultimeRegistry.set(konsultime.id, konsultime);
        this.selectedKonsultime = konsultime;
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

  deleteKonsultime = async (id: string) => {
    this.loading = true;
    try {
      await agent.Konsultimet.delete(id);
      runInAction(() => {
        this.konsultimeRegistry.delete(id);
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
