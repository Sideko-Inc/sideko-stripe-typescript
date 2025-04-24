import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsZipObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsZipObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsZipObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsZipObj0 = {
  setup_future_usage?: "none" | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsZipObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsZipObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsZipObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsZipObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsZipObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsZipObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsZipObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsZipObj0 = {
  in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsZipObj0,
  out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsZipObj0,
};
