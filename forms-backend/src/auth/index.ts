import passport from "passport";
import jwtStrategy from "./strategies/jwt.strategy";
import localStrategy from "./strategies/local.strategy";

passport.use(localStrategy);
passport.use(jwtStrategy);
