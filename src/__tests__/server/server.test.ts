import { __httpServer__ } from "../../__MOCKS__/http-server";
import { Server } from "../../application/server/index";

describe("server", () => {
  it("should be defined", () => {
    const mockHttpServer = new __httpServer__();
    const server = new Server(mockHttpServer);
    const result = server;
    expect(result).toBeDefined();
  });

  it("should have the server stored", () => {
    const mockHttpServer = new __httpServer__();
    const server = new Server(mockHttpServer);
    expect(server.server).toStrictEqual(mockHttpServer);
  });
  it("should start the server when start method is called", () => {
    const mockHttpServer = new __httpServer__();
    const server = new Server(mockHttpServer);
    server.start(5000);
    expect(mockHttpServer.init).toBeCalled();
    expect(mockHttpServer.listen).toBeCalled();
  });
  it("should pass the right parameters to the http server to listen", () => {
    const mockHttpServer = new __httpServer__();
    const server = new Server(mockHttpServer);
    const callbackMock = jest.fn();
    server.start(5000, callbackMock);
    expect(mockHttpServer.listen.mock.calls[0][0]).toBe(5000);
  });
  it("should be able to shut down the http server", () => {
    const mockHttpServer = new __httpServer__();
    const server = new Server(mockHttpServer);
    server.stop();
    expect(mockHttpServer.shutDown).toBeCalled();
  });
});
