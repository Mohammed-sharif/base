const { DB_URL, PORT, JWT_SECRET, NODE_ENV } = process.env;
export default {
  DB_URL: DB_URL ?? "",
  PORT: Number(PORT),
  SECRET: JWT_SECRET ?? "",
  ENV: NODE_ENV ?? "development",
};
