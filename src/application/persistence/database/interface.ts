export interface IDatabase {
  connect(url: string, callback?: () => void): void;
  disconnect(): void;
}
