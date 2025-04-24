import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionWechatPayDisplayQrCode = {
  /**
   * The data being used to generate QR code
   */
  data: string;
  /**
   * The URL to the hosted WeChat Pay instructions page, which allows customers to view the WeChat Pay QR code.
   */
  hostedInstructionsUrl: string;
  /**
   * The base64 image data for a pre-generated QR code
   */
  imageDataUrl: string;
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
 * PaymentIntentNextActionWechatPayDisplayQrCode without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionWechatPayDisplayQrCode = {
  data: string;
  hosted_instructions_url: string;
  image_data_url: string;
  image_url_png: string;
  image_url_svg: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionWechatPayDisplayQrCode
 */
const SchemaIn$PaymentIntentNextActionWechatPayDisplayQrCode: z.ZodType<
  PaymentIntentNextActionWechatPayDisplayQrCode, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: z.string(),
    hosted_instructions_url: z.string(),
    image_data_url: z.string(),
    image_url_png: z.string(),
    image_url_svg: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      hosted_instructions_url: "hostedInstructionsUrl",
      image_data_url: "imageDataUrl",
      image_url_png: "imageUrlPng",
      image_url_svg: "imageUrlSvg",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionWechatPayDisplayQrCode
 */
const SchemaOut$PaymentIntentNextActionWechatPayDisplayQrCode: z.ZodType<
  External$PaymentIntentNextActionWechatPayDisplayQrCode, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionWechatPayDisplayQrCode // the object to be transformed
> = z
  .object({
    data: z.string(),
    hostedInstructionsUrl: z.string(),
    imageDataUrl: z.string(),
    imageUrlPng: z.string(),
    imageUrlSvg: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      hostedInstructionsUrl: "hosted_instructions_url",
      imageDataUrl: "image_data_url",
      imageUrlPng: "image_url_png",
      imageUrlSvg: "image_url_svg",
    });
  });

export const Schemas$PaymentIntentNextActionWechatPayDisplayQrCode = {
  in: SchemaIn$PaymentIntentNextActionWechatPayDisplayQrCode,
  out: SchemaOut$PaymentIntentNextActionWechatPayDisplayQrCode,
};
