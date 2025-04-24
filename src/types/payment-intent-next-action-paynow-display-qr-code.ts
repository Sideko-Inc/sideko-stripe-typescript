import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionPaynowDisplayQrCode = {
  /**
   * The raw data string used to generate QR code, it should be used together with QR code library.
   */
  data: string;
  /**
   * The URL to the hosted PayNow instructions page, which allows customers to view the PayNow QR code.
   */
  hostedInstructionsUrl?: string | null | undefined;
  /**
   * The image_url_png string used to render QR code
   */
  imageUrlPng: string;
  /**
   * The image_url_svg string used to render QR code
   */
  imageUrlSvg: string;
};

/**
 * @internal
 * PaymentIntentNextActionPaynowDisplayQrCode without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionPaynowDisplayQrCode = {
  data: string;
  hosted_instructions_url?: string | null | undefined;
  image_url_png: string;
  image_url_svg: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionPaynowDisplayQrCode
 */
const SchemaIn$PaymentIntentNextActionPaynowDisplayQrCode: z.ZodType<
  PaymentIntentNextActionPaynowDisplayQrCode, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.string(),
    hosted_instructions_url: z.string().nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionPaynowDisplayQrCode
 */
const SchemaOut$PaymentIntentNextActionPaynowDisplayQrCode: z.ZodType<
  External$PaymentIntentNextActionPaynowDisplayQrCode, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionPaynowDisplayQrCode // the object to be transformed
> = z
  .object({
    data: z.string(),
    hostedInstructionsUrl: z.string().nullable().optional(),
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

export const Schemas$PaymentIntentNextActionPaynowDisplayQrCode = {
  in: SchemaIn$PaymentIntentNextActionPaynowDisplayQrCode,
  out: SchemaOut$PaymentIntentNextActionPaynowDisplayQrCode,
};
