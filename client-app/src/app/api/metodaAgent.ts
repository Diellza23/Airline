import axios, { AxiosResponse } from "axios";
import { request } from "http";
import { Nota } from "../models/nota";
import { Konsultime } from "../models/konsultime";
import { Studenti } from "../models/studenti";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Notat = {
  list: () => requests.get<Nota[]>("/notat"),
  details: (id: string) => requests.get<Nota>("/notat/"+id), 
  create: (nota: Nota) => requests.post<void>("/notat", nota),
  update: (nota: Nota) => requests.put<void>("/notat/" + nota.id, nota),
  delete: (id: string) => axios.delete<void>("/notat/" + id)
};

const Konsultimet = {
  list: () => requests.get<Konsultime[]>("/konsultimet"),
  details:(id: string) => requests.get<Konsultime>("/konsultimet/"+id),
  create: (konsultime : Konsultime) => requests.post<void>("/konsultimet", konsultime),
  update:(konsultime: Konsultime) => axios.put<void>("/konsultimet/" +konsultime.id, konsultime ),
  delete:(id: string) => axios.delete<void>("/konsultimet/"+id)
};

const Studentet = {
  list: () => requests.get<Studenti[]>("/studentet"),
  details:(id: string) => requests.get<Studenti>("/studentet/"+id),
  create: (studenti : Studenti) => requests.post<void>("/studentet", studenti),
  update:(studenti: Studenti) => axios.put<void>("/studentet/" +studenti.id, studenti ),
  delete:(id: string) => axios.delete<void>("/studentet/"+id)
};



const agent = {
  Notat,
  Konsultimet,
  Studentet
};

export default agent;
