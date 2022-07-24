import { Router } from "express";
import passport from "passport";
import TravelService from "../services/travel.services";
import { IUser, Role } from "../models/User.model";

const router = Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      req.body.collaboratorId = (req.user as IUser)._id;
      const travel = await TravelService.create(req.body);

      res.status(201).json(travel);
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user as IUser;

      const travels = await TravelService.collaboratorTravels(user._id);

      res.json(travels);
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user as IUser;
      if (user.role !== Role.DIRECTOR) {
        return res.status(401).json({ error: "unauthorized user" });
      }

      const travel = await TravelService.list();

      res.json(travel);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
