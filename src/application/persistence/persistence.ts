import { IDatabase } from "./database";
import { IPersistence } from "./interface";

export class Persistence implements IPersistence {
  constructor(database: IDatabase) {
    this.database = database;
  }
  database: IDatabase;
  init(url: string, callback?: () => void): void {
    this.database.connect(url, callback);
  }
  close(): void {
    this.database.disconnect();
  }
}
