import { IHttpServer } from "./http-server";

export interface IServer {
  server: IHttpServer;

  start(port: number, callback?: () => void): void;
  stop(): void;
}
