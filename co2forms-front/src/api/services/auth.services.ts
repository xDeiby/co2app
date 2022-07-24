import { IUser } from "../../interfaces/IUser";
import co2FormsApi from "../axios";

type AuthResponse = {
  user: IUser & { _id: string };
  token: string;
};

export interface ILogin {
  email: string;
  password: string;
}

class AuthService {
  static baseUrl = "auth";

  static async login(authInfo: ILogin) {
    const { data } = await co2FormsApi.post<AuthResponse>(
      `${this.baseUrl}/login`,
      authInfo
    );

    localStorage.setItem("authorization", data.token);

    return data.user;
  }

  static async register(user: IUser) {
    const { data } = await co2FormsApi.post<AuthResponse>(
      `${this.baseUrl}/register`,
      user
    );

    localStorage.setItem("authorization", data.token);

    return data.user;
  }

  static async session() {
    const authorization = localStorage.getItem("authorization");
    if (!authorization) throw new Error("user haven't session active");

    const response = await co2FormsApi.get<IUser>(`${this.baseUrl}/session`, {
      headers: {
        authorization: `Bearer ${authorization}`,
      },
    });

    return response.data;
  }
}

export default AuthService;
