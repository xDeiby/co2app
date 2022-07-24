import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import AuthService from "../services/auth.services";
import env from "../config/env.config";

const router = Router();

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res, next) => {
    try {
      res.json(req.user);
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  "/session",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    try {
      res.json(req.user);
    } catch (error) {
      next(error);
    }
  },
);

router.post("/register", async (req, res, next) => {
  try {
    const user = await AuthService.register(req.body);
    const payload = {
      sub: user._id,
    };
    const token = jwt.sign(payload, env.app.secret);

    res.status(201).json({ user, token });
  } catch (error) {
    next(error);
  }
});

export default router;
