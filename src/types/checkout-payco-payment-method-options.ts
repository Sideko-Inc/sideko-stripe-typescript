import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CheckoutPaycoPaymentMethodOptions = {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: "manual" | undefined;
};

/**
 * @internal
 * CheckoutPaycoPaymentMethodOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutPaycoPaymentMethodOptions = {
  capture_method?: "manual" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutPaycoPaymentMethodOptions
 */
const SchemaIn$CheckoutPaycoPaymentMethodOptions: z.ZodType<
  CheckoutPaycoPaymentMethodOptions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutPaycoPaymentMethodOptions
 */
const SchemaOut$CheckoutPaycoPaymentMethodOptions: z.ZodType<
  External$CheckoutPaycoPaymentMethodOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutPaycoPaymentMethodOptions // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
    });
  });

export const Schemas$CheckoutPaycoPaymentMethodOptions = {
  in: SchemaIn$CheckoutPaycoPaymentMethodOptions,
  out: SchemaOut$CheckoutPaycoPaymentMethodOptions,
};
