import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import env from '../../config/env.config';
import AuthService from '../../services/auth.services';

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: env.app.secret,
};

const jwtStrategy = new Strategy(options, async (payload, done) => {
  try {
    const user = await AuthService.findUser(payload.sub);
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

export default jwtStrategy;
