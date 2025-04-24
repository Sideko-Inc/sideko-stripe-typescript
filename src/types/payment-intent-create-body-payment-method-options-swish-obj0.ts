import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsSwishObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsSwishObj0 = {
  reference?: (string | string) | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsSwishObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsSwishObj0 = {
  reference?: (string | string) | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsSwishObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsSwishObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsSwishObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    reference: z.union([z.string(), z.string()]).optional(),
    setup_future_usage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
      setup_future_usage: "setupFutureUsage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsSwishObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsSwishObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsSwishObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsSwishObj0 // the object to be transformed
> = z
  .object({
    reference: z.union([z.string(), z.string()]).optional(),
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      reference: "reference",
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsSwishObj0 = {
  in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsSwishObj0,
  out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsSwishObj0,
};
