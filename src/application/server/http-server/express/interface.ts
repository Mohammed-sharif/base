import { Router } from "express";
export default interface IRouter {
  path: string;
  apiVersion: string;
  router: Router;
}
