import { IPersistence } from "./persistence";
import { IServer } from "./server";

export interface IConfigurations {
  port: number;
  database_url: string;
  database_callback?: () => void;
  server_callback?: () => void;
}

export interface IApplication {
  persistence: IPersistence;
  server: IServer;
  run(configurations: IConfigurations): void;
  shutDown(): void;
  getInstanceID(): string;
}
