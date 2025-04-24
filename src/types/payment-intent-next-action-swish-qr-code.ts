import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionSwishQrCode = {
  /**
   * The raw data string used to generate QR code, it should be used together with QR code library.
   */
  data: string;
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
 * PaymentIntentNextActionSwishQrCode without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionSwishQrCode = {
  data: string;
  image_url_png: string;
  image_url_svg: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionSwishQrCode
 */
const SchemaIn$PaymentIntentNextActionSwishQrCode: z.ZodType<
  PaymentIntentNextActionSwishQrCode, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.string(),
    image_url_png: z.string(),
    image_url_svg: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      image_url_png: "imageUrlPng",
      image_url_svg: "imageUrlSvg",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionSwishQrCode
 */
const SchemaOut$PaymentIntentNextActionSwishQrCode: z.ZodType<
  External$PaymentIntentNextActionSwishQrCode, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionSwishQrCode // the object to be transformed
> = z
  .object({
    data: z.string(),
    imageUrlPng: z.string(),
    imageUrlSvg: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      imageUrlPng: "image_url_png",
      imageUrlSvg: "image_url_svg",
    });
  });

export const Schemas$PaymentIntentNextActionSwishQrCode = {
  in: SchemaIn$PaymentIntentNextActionSwishQrCode,
  out: SchemaOut$PaymentIntentNextActionSwishQrCode,
};
