import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionPixDisplayQrCode = {
  /**
   * The raw data string used to generate QR code, it should be used together with QR code library.
   */
  data?: string | undefined;
  /**
   * The date (unix timestamp) when the PIX expires.
   */
  expiresAt?: number | undefined;
  /**
   * The URL to the hosted pix instructions page, which allows customers to view the pix QR code.
   */
  hostedInstructionsUrl?: string | undefined;
  /**
   * The image_url_png string used to render png QR code
   */
  imageUrlPng?: string | undefined;
  /**
   * The image_url_svg string used to render svg QR code
   */
  imageUrlSvg?: string | undefined;
};

/**
 * @internal
 * PaymentIntentNextActionPixDisplayQrCode without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionPixDisplayQrCode = {
  data?: string | undefined;
  expires_at?: number | undefined;
  hosted_instructions_url?: string | undefined;
  image_url_png?: string | undefined;
  image_url_svg?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionPixDisplayQrCode
 */
const SchemaIn$PaymentIntentNextActionPixDisplayQrCode: z.ZodType<
  PaymentIntentNextActionPixDisplayQrCode, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.string().optional(),
    expires_at: z.number().int().optional(),
    hosted_instructions_url: z.string().optional(),
    image_url_png: z.string().optional(),
    image_url_svg: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      expires_at: "expiresAt",
      hosted_instructions_url: "hostedInstructionsUrl",
      image_url_png: "imageUrlPng",
      image_url_svg: "imageUrlSvg",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionPixDisplayQrCode
 */
const SchemaOut$PaymentIntentNextActionPixDisplayQrCode: z.ZodType<
  External$PaymentIntentNextActionPixDisplayQrCode, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionPixDisplayQrCode // the object to be transformed
> = z
  .object({
    data: z.string().optional(),
    expiresAt: z.number().int().optional(),
    hostedInstructionsUrl: z.string().optional(),
    imageUrlPng: z.string().optional(),
    imageUrlSvg: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      expiresAt: "expires_at",
      hostedInstructionsUrl: "hosted_instructions_url",
      imageUrlPng: "image_url_png",
      imageUrlSvg: "image_url_svg",
    });
  });

export const Schemas$PaymentIntentNextActionPixDisplayQrCode = {
  in: SchemaIn$PaymentIntentNextActionPixDisplayQrCode,
  out: SchemaOut$PaymentIntentNextActionPixDisplayQrCode,
};
