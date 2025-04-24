import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionWechatPayRedirectToIosApp = {
  /**
   * An universal link that redirect to WeChat Pay app
   */
  nativeUrl: string;
};

/**
 * @internal
 * PaymentIntentNextActionWechatPayRedirectToIosApp without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionWechatPayRedirectToIosApp = {
  native_url: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionWechatPayRedirectToIosApp
 */
const SchemaIn$PaymentIntentNextActionWechatPayRedirectToIosApp: z.ZodType<
  PaymentIntentNextActionWechatPayRedirectToIosApp, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    native_url: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      native_url: "nativeUrl",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionWechatPayRedirectToIosApp
 */
const SchemaOut$PaymentIntentNextActionWechatPayRedirectToIosApp: z.ZodType<
  External$PaymentIntentNextActionWechatPayRedirectToIosApp, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionWechatPayRedirectToIosApp // the object to be transformed
> = z
  .object({
    nativeUrl: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      nativeUrl: "native_url",
    });
  });

export const Schemas$PaymentIntentNextActionWechatPayRedirectToIosApp = {
  in: SchemaIn$PaymentIntentNextActionWechatPayRedirectToIosApp,
  out: SchemaOut$PaymentIntentNextActionWechatPayRedirectToIosApp,
};
