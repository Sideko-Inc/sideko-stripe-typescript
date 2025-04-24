import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsSwishObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsSwishObj0 = {
  reference?: (string | string) | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsSwishObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsSwishObj0 = {
  reference?: (string | string) | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsSwishObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsSwishObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsSwishObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsSwishObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsSwishObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsSwishObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsSwishObj0 // the object to be transformed
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsSwishObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsSwishObj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsSwishObj0,
};
