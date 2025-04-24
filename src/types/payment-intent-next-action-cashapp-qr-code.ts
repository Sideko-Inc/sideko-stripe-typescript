import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionCashappQrCode = {
  /**
   * The date (unix timestamp) when the QR code expires.
   */
  expiresAt: number;
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
 * PaymentIntentNextActionCashappQrCode without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionCashappQrCode = {
  expires_at: number;
  image_url_png: string;
  image_url_svg: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionCashappQrCode
 */
const SchemaIn$PaymentIntentNextActionCashappQrCode: z.ZodType<
  PaymentIntentNextActionCashappQrCode, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expires_at: z.number().int(),
    image_url_png: z.string(),
    image_url_svg: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expires_at: "expiresAt",
      image_url_png: "imageUrlPng",
      image_url_svg: "imageUrlSvg",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionCashappQrCode
 */
const SchemaOut$PaymentIntentNextActionCashappQrCode: z.ZodType<
  External$PaymentIntentNextActionCashappQrCode, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionCashappQrCode // the object to be transformed
> = z
  .object({
    expiresAt: z.number().int(),
    imageUrlPng: z.string(),
    imageUrlSvg: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expiresAt: "expires_at",
      imageUrlPng: "image_url_png",
      imageUrlSvg: "image_url_svg",
    });
  });

export const Schemas$PaymentIntentNextActionCashappQrCode = {
  in: SchemaIn$PaymentIntentNextActionCashappQrCode,
  out: SchemaOut$PaymentIntentNextActionCashappQrCode,
};
