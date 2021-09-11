export interface Udhetari {
    id: string
    email: string
    password: string
    birthday: string
    emri: number
    mbiemri: string
  }

  export interface UdhetariuserFormValues{
    email: string;
    password: string;
    displayName?: string;
    userName?: string;
    emri?: string;
    mbiemri?: string;
    birthday?: string | Date;
  }
  