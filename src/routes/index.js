import express from "express";

/**
 * Import Routes
 */
import emailRouter from "./email.router";

const route = (app) => {
  const router = express.Router();
  app.use("/", router);

  /**
   * Routes
   */
  router.use("/email", emailRouter);
  
};

export default route;
