import "dotenv/config";
import {
  Application,
  ExpressHttpServer,
  MongoDBDatabase,
  Persistence,
  Server,
} from "./application";
import configurations from "./utils/configurations";

const httpServer = new ExpressHttpServer();
const mongoDB = new MongoDBDatabase();
const persistence = new Persistence(mongoDB);
const server = new Server(httpServer);
export const application = new Application(server, persistence);

application.run({
  port: configurations.PORT,
  database_url: configurations.DB_URL,
  server_callback: () => console.log("server is up"),
  database_callback: () => console.log("connected to DB"),
});
