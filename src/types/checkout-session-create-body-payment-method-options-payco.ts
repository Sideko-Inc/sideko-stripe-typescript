import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsPayco
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsPayco = {
  captureMethod?: "manual" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsPayco without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsPayco = {
  capture_method?: "manual" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsPayco
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsPayco: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsPayco, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsPayco
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsPayco: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsPayco, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsPayco // the object to be transformed
> = z
  .object({
    captureMethod: z.enum(["manual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      captureMethod: "capture_method",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsPayco = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsPayco,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsPayco,
};
