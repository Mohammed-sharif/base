import { ExpressHttpServer } from "../../../application/server/http-server/express/index";

const server = new ExpressHttpServer();
describe("express http server", () => {
  let expressServer = new ExpressHttpServer();
  afterAll(() => {
    return server.shutDown();
  });
  it("should be defined", () => {
    expect(expressServer).toBeDefined();
  });
  it("should have server attribute", () => {
    expect(expressServer.server).not.toBeNull();
  });
  it("should have routers array", () => {
    expect(expressServer.routers).toBeInstanceOf(Array);
  });
  it("should have an instance of the current running server", () => {
    const server = new ExpressHttpServer();
    server.listen(3000);
    expect(server.instance).toBeDefined();
    server.shutDown();
  });
  it("should not have an instance if the server isnt initalized", () => {
    const server = new ExpressHttpServer();
    expect(server.instance).not.toBeDefined();
  });
});
