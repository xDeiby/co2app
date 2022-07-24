import { Strategy } from 'passport-local';
import jwt from "jsonwebtoken";
import AuthService from '../../services/auth.services';
import env from '../../config/env.config';

const localStrategy = new Strategy({ usernameField: 'email' }, async (email, password, done) => {
  try {
    const user = await AuthService.login(email, password);
    const payload = { sub: user._id };
    const token = jwt.sign(payload, env.app.secret);

    done(null, { user, token });
  } catch (error) {
    done(error, false);
  }
});

export default localStrategy;
