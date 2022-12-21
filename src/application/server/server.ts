import { IHttpServer } from "./http-server";
import { IServer } from "./interface";

export class Server implements IServer {
  constructor(httpClient: IHttpServer) {
    this.server = httpClient;
  }
  server: IHttpServer;

  start(port: number, callback?: () => void) {
    this.server.init();
    this.server.listen(port, callback);
  }
  stop(): void {
    this.server.shutDown();
  }
}
