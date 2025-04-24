import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsNzBankAccountObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsNzBankAccountObj0 = {
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsNzBankAccountObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsNzBankAccountObj0 =
  {
    setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
    target_date?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsNzBankAccountObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsNzBankAccountObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsNzBankAccountObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsNzBankAccountObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsNzBankAccountObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsNzBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsNzBankAccountObj0 // the object to be transformed
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsNzBankAccountObj0 =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsNzBankAccountObj0,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsNzBankAccountObj0,
  };
