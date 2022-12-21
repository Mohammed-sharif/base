import { IDatabase } from "./database";

export interface IPersistence {
  database: IDatabase;
  init(url: string, callback?: () => void): void;
  close(): void;
}
