import express from "express";
import getAllServices from "../controllers/services/service/getAllServices";
import getAllServicesByCategory from "../controllers/services/serviceByCategory/getAllServicesByCategory";
import createNewCategory from "../controllers/services/serviceByCategory/createNewCategory";
import updateCategoryName from "../controllers/services/serviceByCategory/updateCategoryName";
import getServiceById from "../controllers/services/service/getServiceById";
import searchAllServices from "../controllers/services/service/searchAllServices";
import createNewService from "../controllers/services/service/createNewService";
import updateServiceById from "../controllers/services/service/updateService";
import deleteServiceById from "../controllers/services/service/deleteServiceById";
import passport from "passport";

const router = express.Router();

//all services
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getAllServices
);
router.post("/search", searchAllServices);

//at the category level
router.get(
  "/categories/:category",
  passport.authenticate("jwt", { session: false }),
  getAllServicesByCategory
);
router.post(
  "/categories/:category",
  passport.authenticate("jwt", { session: false }),
  createNewCategory
);
router.put(
  "/categories/:category",
  passport.authenticate("jwt", { session: false }),
  updateCategoryName
);

//at the level of individual services
router.get(
  "/service/:serviceId",
  passport.authenticate("jwt", { session: false }),
  getServiceById
);
router.post(
  "/service/",
  passport.authenticate("jwt", { session: false }),
  createNewService
);
router.put(
  "/service/:serviceId",
  passport.authenticate("jwt", { session: false }),
  updateServiceById
);
router.delete(
  "/service/:serviceId",
  passport.authenticate("jwt", { session: false }),
  deleteServiceById
);

export default router;
