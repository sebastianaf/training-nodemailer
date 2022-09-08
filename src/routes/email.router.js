import express from "express";

import EmailService from "../services/email.service";
import { postEmailSchema } from "../schemas/email.schema";
import validatorHandler from "../middlewares/validator.handler";

const router = express.Router();
const emailService = new EmailService();

router.post(
  "/",
  validatorHandler(postEmailSchema, `body`),
  async (req, res, next) => {
    try {
      const result = await emailService.sendEmail(req.body);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
