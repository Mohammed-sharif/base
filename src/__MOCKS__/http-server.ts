export class __httpServer__ {
  init = jest.fn();
  listen = jest.fn((port: number, callback?: () => void) => {
    if (callback) callback();
    return port;
  });
  shutDown = jest.fn();
}
