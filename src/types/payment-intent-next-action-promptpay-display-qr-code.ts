import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionPromptpayDisplayQrCode = {
  /**
   * The raw data string used to generate QR code, it should be used together with QR code library.
   */
  data: string;
  /**
   * The URL to the hosted PromptPay instructions page, which allows customers to view the PromptPay QR code.
   */
  hostedInstructionsUrl: string;
  /**
   * The PNG path used to render the QR code, can be used as the source in an HTML img tag
   */
  imageUrlPng: string;
  /**
   * The SVG path used to render the QR code, can be used as the source in an HTML img tag
   */
  imageUrlSvg: string;
};

/**
 * @internal
 * PaymentIntentNextActionPromptpayDisplayQrCode without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionPromptpayDisplayQrCode = {
  data: string;
  hosted_instructions_url: string;
  image_url_png: string;
  image_url_svg: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionPromptpayDisplayQrCode
 */
const SchemaIn$PaymentIntentNextActionPromptpayDisplayQrCode: z.ZodType<
  PaymentIntentNextActionPromptpayDisplayQrCode, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.string(),
    hosted_instructions_url: z.string(),
    image_url_png: z.string(),
    image_url_svg: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      hosted_instructions_url: "hostedInstructionsUrl",
      image_url_png: "imageUrlPng",
      image_url_svg: "imageUrlSvg",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionPromptpayDisplayQrCode
 */
const SchemaOut$PaymentIntentNextActionPromptpayDisplayQrCode: z.ZodType<
  External$PaymentIntentNextActionPromptpayDisplayQrCode, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionPromptpayDisplayQrCode // the object to be transformed
> = z
  .object({
    data: z.string(),
    hostedInstructionsUrl: z.string(),
    imageUrlPng: z.string(),
    imageUrlSvg: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      hostedInstructionsUrl: "hosted_instructions_url",
      imageUrlPng: "image_url_png",
      imageUrlSvg: "image_url_svg",
    });
  });

export const Schemas$PaymentIntentNextActionPromptpayDisplayQrCode = {
  in: SchemaIn$PaymentIntentNextActionPromptpayDisplayQrCode,
  out: SchemaOut$PaymentIntentNextActionPromptpayDisplayQrCode,
};
