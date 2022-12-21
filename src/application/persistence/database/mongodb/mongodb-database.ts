import mongoose from "mongoose";
import { IDatabase } from "..";
export class MongoDBDatabase implements IDatabase {
  connect(url: string, callback?: () => void) {
    if (callback) return mongoose.connect(url, callback);
    mongoose.connect(url);
  }

  disconnect(): void {
    mongoose.disconnect();
  }
}
