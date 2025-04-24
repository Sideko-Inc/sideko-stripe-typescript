import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CheckoutNaverPayPaymentMethodOptions = {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: "manual" | undefined;
};

/**
 * @internal
 * CheckoutNaverPayPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutNaverPayPaymentMethodOptions = {
  capture_method?: "manual" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutNaverPayPaymentMethodOptions
 */
const SchemaIn$CheckoutNaverPayPaymentMethodOptions: z.ZodType<
  CheckoutNaverPayPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    capture_method: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      capture_method: "captureMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutNaverPayPaymentMethodOptions
 */
const SchemaOut$CheckoutNaverPayPaymentMethodOptions: z.ZodType<
  External$CheckoutNaverPayPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutNaverPayPaymentMethodOptions // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
    });
  });

export const Schemas$CheckoutNaverPayPaymentMethodOptions = {
  in: SchemaIn$CheckoutNaverPayPaymentMethodOptions,
  out: SchemaOut$CheckoutNaverPayPaymentMethodOptions,
};
