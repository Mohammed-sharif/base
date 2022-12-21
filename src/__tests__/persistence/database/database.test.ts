import { Database } from "../../../application/persistence/database/index";
describe("database", () => {
  it("should be defined", () => {
    const result = new Database();
    expect(result).toBeDefined();
  });
  it("should be able to connect to a database", () => {
    const result = new Database();
    expect(result.connect).toBeDefined();
  });
});
