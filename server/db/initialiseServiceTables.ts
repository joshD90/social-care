import { PromisePoolConnection } from "mysql2/promise";
import { initServiceTablesQueries as queryObj } from "./queries/initServiceTables";
import initialiseCategories from "./initialiseCategories";

const categories = [
  { categoryName: "Shelter", color: "orange", forwardTo: "shelter" },
  { categoryName: "Addiction", color: "amber", forwardTo: "addiction" },
  {
    categoryName: "Food and Materials",
    color: "emerald",
    forwardTo: "material",
  },
  { categoryName: "Housing", color: "cyan", forwardTo: "housing" },
  {
    categoryName: "Support Groups",
    color: "violet",
    forwardTo: "supportGroups",
  },
  {
    categoryName: "Mental Health",
    color: "fuchsia",
    forwardTo: "mentalHealth",
  },
];

//set up all our tables in sequence so that there are no null references to other tables
const initServiceTables = async (connection: PromisePoolConnection) => {
  try {
    await connection.query(queryObj.createCategoriesTable);
    await connection.query(queryObj.createServicesTable);
    await connection.query(queryObj.createNeedsMetTable);
    await connection.query(queryObj.createClientGroupTable);
    await connection.query(queryObj.createAreaServedTable);
    await connection.query(queryObj.createServiceNeedsJunction);
    await connection.query(queryObj.createServiceClientGroupJunction);
    await connection.query(queryObj.createServiceAreaJunction);
    initialiseCategories(connection, categories);
  } catch (error) {
    console.log(error);
  }
};
export default initServiceTables;
