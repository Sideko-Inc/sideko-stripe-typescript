import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsGiropayObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsGiropayObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsGiropayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsGiropayObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsGiropayObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsGiropayObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsGiropayObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsGiropayObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsGiropayObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsGiropayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsGiropayObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsGiropayObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsGiropayObj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsGiropayObj0,
};
