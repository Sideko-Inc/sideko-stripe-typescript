import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsOxxo
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsOxxo = {
  expiresAfterDays?: number | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsOxxo without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsOxxo = {
  expires_after_days?: number | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsOxxo
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsOxxo: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsOxxo, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expires_after_days: z.number().int().optional(),
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expires_after_days: "expiresAfterDays",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsOxxo
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsOxxo: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsOxxo, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsOxxo // the object to be transformed
> = z
  .object({
    expiresAfterDays: z.number().int().optional(),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      expiresAfterDays: "expires_after_days",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsOxxo = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsOxxo,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsOxxo,
};
