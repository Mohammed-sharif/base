import express, { Application } from "express";
import Fingerprint from "express-fingerprint";
import helmet from "helmet";
import { IHttpServer } from "../interface";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import { Server } from "http";
import IRouter from "./interface";

export class ExpressHttpServer implements IHttpServer {
  server: Application;
  routers: IRouter[];
  instance: Server | undefined;
  constructor(routers?: IRouter[]) {
    this.server = express();
    if (routers) {
      this.routers = routers;
    } else {
      this.routers = [];
    }
  }
  init() {
    this.initMiddlewares();
    this.initRouters();
  }

  private initMiddlewares() {
    this.server.use(Fingerprint());
    this.server.use(helmet());
    this.server.use(cors());
    this.server.use(
      morgan("combined", {
        skip: (req, res) => {
          return res.statusCode < 400;
        },
      })
    );
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: false }));
    this.server.use(compression());
  }

  private initRouters() {
    this.routers.forEach((router) => this.server.use("/api", router.router));
  }

  listen(port: number, callback?: () => void): void {
    if (!this.instance) {
      const result: Server = this.server.listen(port, callback);
      this.instance = result;
    }
  }

  shutDown(): void {
    if (!this.instance) return;
    this.instance.close();
    this.instance = undefined;
  }
}
