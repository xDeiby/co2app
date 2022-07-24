import bcrypt from "bcrypt";
import User, { IUserInput } from "../models/User.model";
import { error } from "../utils/error";

class AuthService {
  static async findUser(id: string) {
    const user = await User.findById(id);
    if (!user) throw error("user does not exist", 404);

    return user;
  }

  static async login(email: string, password: string) {
    const existUser = await User.findOne({ email });

    if (!existUser) throw error("user does not exist", 404);

    const validPassword = bcrypt.compareSync(password, existUser.password);

    if (!validPassword) throw error("user invalid password", 401);

    return existUser;
  }

  static async register(user: IUserInput) {
    const encryptPassword = bcrypt.hashSync(user.password, 10);
    const newUser = new User({ ...user, password: encryptPassword });
    await newUser.save();

    return newUser;
  }
}

export default AuthService;
