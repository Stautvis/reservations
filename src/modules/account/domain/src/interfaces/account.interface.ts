import type { IEntity } from "@domain/core";

export interface IAccount extends IEntity {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface IAccountCreate extends Pick<IAccount, "name" | "surname" | "email" | "password"> {}
