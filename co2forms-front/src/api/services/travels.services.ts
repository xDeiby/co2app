import { ITravel } from "../../interfaces/ITravel";
import co2FormsApi from "../axios";

class TravelService {
  static baseUrl = "travels";

  static async userTravels() {
    const authorization = localStorage.getItem("authorization");
    const { data } = await co2FormsApi.get<ITravel[]>(this.baseUrl, {
      headers: {
        authorization: `Bearer ${authorization}`,
      },
    });

    return data;
  }

  static async allTravels() {
    const authorization = localStorage.getItem("authorization");
    const { data } = await co2FormsApi.get<ITravel[]>(this.baseUrl + "/all", {
      headers: {
        authorization: `Bearer ${authorization}`,
      },
    });

    return data;
  }

  static async createTravel(travel: ITravel) {
    const authorization = localStorage.getItem("authorization");
    const { data } = await co2FormsApi.post<ITravel>(this.baseUrl, travel, {
      headers: {
        authorization: `Bearer ${authorization}`,
      },
    });

    return data;
  }
}

export default TravelService;
