import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentIntentNextActionAlipayHandleRedirect = {
  /**
   * The native data to be used with Alipay SDK you must redirect your customer to in order to authenticate the payment in an Android App.
   */
  nativeData?: string | null | undefined;
  /**
   * The native URL you must redirect your customer to in order to authenticate the payment in an iOS App.
   */
  nativeUrl?: string | null | undefined;
  /**
   * If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
   */
  returnUrl?: string | null | undefined;
  /**
   * The URL you must redirect your customer to in order to authenticate the payment.
   */
  url?: string | null | undefined;
};

/**
 * @internal
 * PaymentIntentNextActionAlipayHandleRedirect without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentNextActionAlipayHandleRedirect = {
  native_data?: string | null | undefined;
  native_url?: string | null | undefined;
  return_url?: string | null | undefined;
  url?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentNextActionAlipayHandleRedirect
 */
const SchemaIn$PaymentIntentNextActionAlipayHandleRedirect: z.ZodType<
  PaymentIntentNextActionAlipayHandleRedirect, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    native_data: z.string().nullable().optional(),
    native_url: z.string().nullable().optional(),
    return_url: z.string().nullable().optional(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      native_data: "nativeData",
      native_url: "nativeUrl",
      return_url: "returnUrl",
      url: "url",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentNextActionAlipayHandleRedirect
 */
const SchemaOut$PaymentIntentNextActionAlipayHandleRedirect: z.ZodType<
  External$PaymentIntentNextActionAlipayHandleRedirect, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentNextActionAlipayHandleRedirect // the object to be transformed
> = z
  .object({
    nativeData: z.string().nullable().optional(),
    nativeUrl: z.string().nullable().optional(),
    returnUrl: z.string().nullable().optional(),
    url: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      nativeData: "native_data",
      nativeUrl: "native_url",
      returnUrl: "return_url",
      url: "url",
    });
  });

export const Schemas$PaymentIntentNextActionAlipayHandleRedirect = {
  in: SchemaIn$PaymentIntentNextActionAlipayHandleRedirect,
  out: SchemaOut$PaymentIntentNextActionAlipayHandleRedirect,
};
