import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsNzBankAccountObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsNzBankAccountObj0 = {
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsNzBankAccountObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsNzBankAccountObj0 =
  {
    setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
    target_date?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsNzBankAccountObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsNzBankAccountObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsNzBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    setup_future_usage: z
      .enum(["none", "off_session", "on_session"])
      .optional(),
    target_date: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setup_future_usage: "setupFutureUsage",
      target_date: "targetDate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsNzBankAccountObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsNzBankAccountObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsNzBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsNzBankAccountObj0 // the object to be transformed
> = z
  .object({
    setupFutureUsage: z.enum(["none", "off_session", "on_session"]).optional(),
    targetDate: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      setupFutureUsage: "setup_future_usage",
      targetDate: "target_date",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsNzBankAccountObj0 =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsNzBankAccountObj0,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsNzBankAccountObj0,
  };
