import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsPromptpayObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsPromptpayObj0 = {
  setupFutureUsage?: "none" | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsPromptpayObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsPromptpayObj0 =
  {
    setup_future_usage?: "none" | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsPromptpayObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsPromptpayObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsPromptpayObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsPromptpayObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsPromptpayObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsPromptpayObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsPromptpayObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsPromptpayObj0 =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsPromptpayObj0,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsPromptpayObj0,
  };
