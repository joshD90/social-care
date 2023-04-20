import express from "express";
import getAllServices from "../controllers/services/service/allServices";
import getAllServicesByCategory from "../controllers/services/serviceByCategory/getAllServicesByCategory";
import createNewCategory from "../controllers/services/serviceByCategory/createNewCategory";
import updateCategoryName from "../controllers/services/serviceByCategory/updateCategoryName";
import getServiceById from "../controllers/services/service/getServiceById";
import searchAllServices from "../controllers/services/service/searchAllServices";
import createNewService from "../controllers/services/service/createNewService";
import updateServiceById from "../controllers/services/service/updateService";
import deleteServiceById from "../controllers/services/service/deleteServiceById";

const router = express.Router();

//all services
router.get("/", getAllServices);
router.post("/search", searchAllServices);
``;
//at the category level
router.get("/:category", getAllServicesByCategory);
router.post("/:category", createNewCategory);
router.put("/:category", updateCategoryName);

//at the level of individual services
router.get("/services/:serviceId", getServiceById);
router.post("/services/", createNewService);
router.put("/services/:serviceId", updateServiceById);
router.delete("/services/:serviceId", deleteServiceById);

export default router;
