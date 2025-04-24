import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsAuBecsDebitObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsAuBecsDebitObj0 = {
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsAuBecsDebitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsAuBecsDebitObj0 =
  {
    setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
    target_date?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsAuBecsDebitObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsAuBecsDebitObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsAuBecsDebitObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsAuBecsDebitObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsAuBecsDebitObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsAuBecsDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsAuBecsDebitObj0 // the object to be transformed
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsAuBecsDebitObj0 =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsAuBecsDebitObj0,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsAuBecsDebitObj0,
  };
