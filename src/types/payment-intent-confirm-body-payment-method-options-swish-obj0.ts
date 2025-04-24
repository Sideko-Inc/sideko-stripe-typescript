import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsSwishObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsSwishObj0 = {
  reference?: (string | string) | undefined;
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsSwishObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsSwishObj0 = {
  reference?: (string | string) | undefined;
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsSwishObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsSwishObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsSwishObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsSwishObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsSwishObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsSwishObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsSwishObj0 // the object to be transformed
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

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsSwishObj0 = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsSwishObj0,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsSwishObj0,
};
