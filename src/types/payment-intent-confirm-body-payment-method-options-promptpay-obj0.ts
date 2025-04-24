import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsPromptpayObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsPromptpayObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsPromptpayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsPromptpayObj0 =
  {
    setup_future_usage?: "none" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsPromptpayObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsPromptpayObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsPromptpayObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsPromptpayObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsPromptpayObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsPromptpayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsPromptpayObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsPromptpayObj0 =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsPromptpayObj0,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsPromptpayObj0,
  };
