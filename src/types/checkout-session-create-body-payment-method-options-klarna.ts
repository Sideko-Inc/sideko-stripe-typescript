import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsKlarna
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsKlarna = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsKlarna without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsKlarna = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsKlarna
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsKlarna: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsKlarna, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsKlarna
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsKlarna: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsKlarna, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsKlarna // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsKlarna = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsKlarna,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsKlarna,
};
