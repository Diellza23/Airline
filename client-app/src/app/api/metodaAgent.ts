import axios, { AxiosError, AxiosResponse } from "axios";
import { request } from "http";
import { toast } from "react-toastify";
import { history } from "../..";
import { Punetori } from "../models/punetori";
import { store } from "../stores/store";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.response.use(async response => {
    await sleep(1000);
    return response;

}, (error: AxiosError) => {
  const {data, status,config} = error.response!;
  switch (status) {
    case 400:
      if(typeof data === 'string'){
        toast.error(data);
      }
      if(config.method === 'get' && data.errors.hasOwnProperty('id')){
        history.push('/not-found');
      }
    if(data.errors){
      const modalStateErrors = [];
      for(const key in data.errors){
        if(data.errors[key]){
          modalStateErrors.push(data.errors[key])
        }
      }
      throw modalStateErrors.flat();
    } 
    break;
    case 401:
      toast.error('unauthorized');
      break;
    case 404:
      history.push('/not-found');
      break;

  }
  return Promise.reject(error);
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};


const Punetoret = {
  list: () => requests.get<Punetori[]>("/punetoret"),
  details:(id: string) => requests.get<Punetori>("/punetoret/"+id),
  create: (punetori : Punetori) => requests.post<void>("/punetoret", punetori),
  // update:(punetori: Punetori) => axios.put<void>("/punetoret/" +punetori.id, punetori),
  update: (punetori: Punetori) => axios.put<void>(`/punetoret/${punetori.id}`, punetori),
  delete:(id: string) => axios.delete<void>("/punetoret/"+id)
  // delete: (id: string) => requests.delete(`/punetoret/${id}`)
};



const agent = {
  Punetoret
};

export default agent;
