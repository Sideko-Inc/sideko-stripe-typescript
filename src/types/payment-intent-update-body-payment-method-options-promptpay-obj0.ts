import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsPromptpayObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsPromptpayObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsPromptpayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsPromptpayObj0 =
  {
    setup_future_usage?: "none" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsPromptpayObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsPromptpayObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsPromptpayObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsPromptpayObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsPromptpayObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsPromptpayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsPromptpayObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsPromptpayObj0 =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsPromptpayObj0,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsPromptpayObj0,
  };
