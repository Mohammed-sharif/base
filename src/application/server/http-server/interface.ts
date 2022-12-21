export interface IHttpServer {
  init(): void;
  listen(port: number, callback?: () => void): void;
  shutDown(): void;
}
