export enum Role {
  DIRECTOR = "director",
  COLLABORATOR = "colaborador",
}

export interface IUser {
  fullName: string;
  role: Role;
  email: string;
  password: string;
}
