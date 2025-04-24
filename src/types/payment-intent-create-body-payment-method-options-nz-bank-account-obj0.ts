import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsNzBankAccountObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsNzBankAccountObj0 = {
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsNzBankAccountObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsNzBankAccountObj0 =
  {
    setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
    target_date?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsNzBankAccountObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsNzBankAccountObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsNzBankAccountObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsNzBankAccountObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsNzBankAccountObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsNzBankAccountObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsNzBankAccountObj0 // the object to be transformed
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

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsNzBankAccountObj0 =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsNzBankAccountObj0,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsNzBankAccountObj0,
  };
