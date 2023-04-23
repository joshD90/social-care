//create our categories table.  This will be the parent of services
const createCategoriesTable =
  "CREATE TABLE IF NOT EXISTS categories(id INT AUTO_INCREMENT PRIMARY KEY, categoryName VARCHAR(255) NOT NULL UNIQUE, color VARCHAR(30) NOT NULL UNIQUE, forwardTo VARCHAR(255) NOT NULL UNIQUE)";
//create our service attributes tables that will be joined later with junction tables for many to many
const createNeedsMetTable =
  "CREATE TABLE IF NOT EXISTS needsMet(id INT AUTO_INCREMENT PRIMARY KEY, need VARCHAR(255) NOT NULL UNIQUE)";
const createClientGroupTable =
  "CREATE TABLE IF NOT EXISTS clientGroups(id INT AUTO_INCREMENT PRIMARY KEY, groupName VARCHAR(255) NOT NULL UNIQUE)";
const createAreaServedTable =
  "CREATE TABLE IF NOT EXISTS areasServed(id INT AUTO_INCREMENT PRIMARY KEY, area VARCHAR(255) NOT NULL UNIQUE)";

//create our services table. We have created our categories first so we can reference this table first

const createServicesTable =
  "CREATE TABLE IF NOT EXISTS services (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, category VARCHAR(255), organisation VARCHAR(255), maxAge INT, minAge INT, contactNumber VARCHAR(255), contactEmail VARCHAR(255), website VARCHAR(255), referralPathway VARCHAR(1000), address VARCHAR(500), imageUrl VARCHAR(255), forwardTo VARCHAR(255), FOREIGN KEY (category) REFERENCES categories(forwardTo))";

//set up our junction tables for our many to many relationships
const createServiceNeedsJunction =
  "CREATE TABLE IF NOT EXISTS service_needs(service_id INT NOT NULL, need_id INT NOT NULL, PRIMARY KEY (service_id, need_id), FOREIGN KEY (service_id) REFERENCES services(id), FOREIGN KEY (need_id) REFERENCES needsMet(id))";

const createServiceClientGroupJunction =
  "CREATE TABLE IF NOT EXISTS service_clientGroups(service_id INT NOT NULL, clientGroup_id INT NOT NULL, PRIMARY KEY (service_id, clientGroup_id), FOREIGN KEY (service_id) REFERENCES services(id), FOREIGN KEY (clientGroup_id) REFERENCES clientGroups(id))";

const createServiceAreaJunction =
  "CREATE TABLE IF NOT EXISTS service_areas(service_id INT NOT NULL, area_id INT NOT NULL, PRIMARY KEY (service_id, area_id), FOREIGN KEY (service_id) REFERENCES services(id), FOREIGN KEY (area_id) REFERENCES areasServed(id))";

export const initServiceTablesQueries = {
  createServicesTable,
  createCategoriesTable,
  createNeedsMetTable,
  createClientGroupTable,
  createAreaServedTable,
  createServiceNeedsJunction,
  createServiceClientGroupJunction,
  createServiceAreaJunction,
};
