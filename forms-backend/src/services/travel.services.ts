import Travel, { ITravelInput } from "../models/Travel.model";

class TravelService {
  static async list() {
    const travels = await Travel.find().populate("collaboratorId");
    return travels;
  }

  static async create(travel: ITravelInput) {
    const newTravel = new Travel(travel);
    await newTravel.save();

    return newTravel;
  }

  static async collaboratorTravels(collaboratorId: number) {
    const travels = await Travel.find({ collaboratorId });

    return travels;
  }
}

export default TravelService;
