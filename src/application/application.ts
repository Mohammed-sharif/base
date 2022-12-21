import { createID } from "../utils/helpers";
import { IApplication, IConfigurations } from "./interface";
import { IPersistence } from "./persistence";
import { IServer } from "./server";

export class Application implements IApplication {
  constructor(server: IServer, persistence: IPersistence) {
    this.persistence = persistence;
    this.server = server;
    this.id = createID();
  }
  persistence: IPersistence;
  server: IServer;
  private id: string;
  run(configurations: IConfigurations) {
    this.persistence.init(
      configurations.database_url,
      configurations.database_callback
    );
    this.server.start(configurations.port, configurations.server_callback);
  }
  shutDown() {
    this.persistence.close();
    this.shutDown();
  }

  getInstanceID(): string {
    return this.id;
  }
}
