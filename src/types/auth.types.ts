import type { IResponse } from "./global.types";

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number?: string;
}

export interface IUser extends IResponse {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_number?: string;
}
