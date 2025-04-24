import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionWechatPayRedirectToAndroidApp = {
  /**
   * app_id is the APP ID registered on WeChat open platform
   */
  appId: string;
  /**
   * nonce_str is a random string
   */
  nonceStr: string;
  /**
   * package is static value
   */
  package: string;
  /**
   * an unique merchant ID assigned by WeChat Pay
   */
  partnerId: string;
  /**
   * an unique trading ID assigned by WeChat Pay
   */
  prepayId: string;
  /**
   * A signature
   */
  sign: string;
  /**
   * Specifies the current time in epoch format
   */
  timestamp: string;
};

/**
 * @internal
 * PaymentIntentNextActionWechatPayRedirectToAndroidApp without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionWechatPayRedirectToAndroidApp = {
  app_id: string;
  nonce_str: string;
  package: string;
  partner_id: string;
  prepay_id: string;
  sign: string;
  timestamp: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionWechatPayRedirectToAndroidApp
 */
const SchemaIn$PaymentIntentNextActionWechatPayRedirectToAndroidApp: z.ZodType<
  PaymentIntentNextActionWechatPayRedirectToAndroidApp, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    app_id: z.string(),
    nonce_str: z.string(),
    package: z.string(),
    partner_id: z.string(),
    prepay_id: z.string(),
    sign: z.string(),
    timestamp: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      app_id: "appId",
      nonce_str: "nonceStr",
      package: "package",
      partner_id: "partnerId",
      prepay_id: "prepayId",
      sign: "sign",
      timestamp: "timestamp",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionWechatPayRedirectToAndroidApp
 */
const SchemaOut$PaymentIntentNextActionWechatPayRedirectToAndroidApp: z.ZodType<
  External$PaymentIntentNextActionWechatPayRedirectToAndroidApp, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionWechatPayRedirectToAndroidApp // the object to be transformed
> = z
  .object({
    appId: z.string(),
    nonceStr: z.string(),
    package: z.string(),
    partnerId: z.string(),
    prepayId: z.string(),
    sign: z.string(),
    timestamp: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      appId: "app_id",
      nonceStr: "nonce_str",
      package: "package",
      partnerId: "partner_id",
      prepayId: "prepay_id",
      sign: "sign",
      timestamp: "timestamp",
    });
  });

export const Schemas$PaymentIntentNextActionWechatPayRedirectToAndroidApp = {
  in: SchemaIn$PaymentIntentNextActionWechatPayRedirectToAndroidApp,
  out: SchemaOut$PaymentIntentNextActionWechatPayRedirectToAndroidApp,
};
