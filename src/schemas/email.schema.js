import Joi from "joi";

const subject = Joi.string().min(5);
const remitterName = Joi.string().min(2);
const recieverEmails = Joi.array().items(Joi.string().email());
const title = Joi.string().min(5).max(30);
const subTitle = Joi.string().min(5).max(30);
const logoURL = Joi.string().uri();
const body = Joi.string().min(10);
const buttonLink = Joi.string().uri();
const buttonText = Joi.string().max(30);
const footer = Joi.string().min(10);
const legal = Joi.string().min(10);

const postEmailSchema = Joi.object({
  remitterName: remitterName.required(),
  recieverEmails: recieverEmails.required(),
  title: title.required(),
  subTitle: subTitle.required(),
  logoURL: logoURL.required(),
  subject: subject.required(),
  body: body.required(),
  buttonLink,
  buttonText,
  footer: footer.required(),
  legal: legal.required(),
});

export { postEmailSchema };
