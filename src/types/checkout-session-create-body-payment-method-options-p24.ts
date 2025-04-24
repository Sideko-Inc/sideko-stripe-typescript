import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsP24
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsP24 = {
  setupFutureUsage?: "none" | undefined;
  tosShownAndAccepted?: boolean | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsP24 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsP24 = {
  setup_future_usage?: "none" | undefined;
  tos_shown_and_accepted?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsP24
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsP24: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsP24, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    setup_future_usage: z.enum(["none"]).optional(),
    tos_shown_and_accepted: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setup_future_usage: "setupFutureUsage",
      tos_shown_and_accepted: "tosShownAndAccepted",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsP24
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsP24: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsP24, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsP24 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
    tosShownAndAccepted: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
      tosShownAndAccepted: "tos_shown_and_accepted",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsP24 = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsP24,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsP24,
};
