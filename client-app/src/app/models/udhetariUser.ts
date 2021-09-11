export interface UdhetariUser {
    id: string;
    userName: string;
    displayName?: string;
    token: string;
    image?: string;
    birthday?: string|Date;
    emri?: string;
    mbiemri?: string;
    email?: string;
}

export interface UdhetariUserFormValues {
    email: string;
    password: string;
    displayName?: string;
    userName?: string;
    Birthday?: string | Date;
    emri?: string;
    mbiemri?: string;
}