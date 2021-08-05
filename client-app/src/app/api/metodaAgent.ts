import axios, { AxiosResponse } from "axios";
import { request } from "http";
import { Punetori } from "../models/punetori";

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


const Punetoret = {
  list: () => requests.get<Punetori[]>("/punetoret"),
  details:(id: string) => requests.get<Punetori>("/punetoret/"+id),
  create: (punetori : Punetori) => requests.post<void>("/punetoret", punetori),
  update:(punetori: Punetori) => axios.put<void>("/punetoret/" +punetori.id, punetori),
  delete:(id: string) => axios.delete<void>("/punetoret/"+id)
};



const agent = {
  Punetoret
};

export default agent;
