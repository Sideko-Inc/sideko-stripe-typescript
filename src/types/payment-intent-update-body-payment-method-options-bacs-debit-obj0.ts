import {
  External$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions,
  PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions,
  Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions,
} from "./payment-intent-update-body-payment-method-options-bacs-debit-obj0-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0 = {
  mandateOptions?:
    | PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions
    | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0 =
  {
    mandate_options?:
      | External$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions
      | undefined;
    setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
    target_date?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions.in.optional(),
    setup_future_usage: z
      .enum(["none", "off_session", "on_session"])
      .optional(),
    target_date: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandate_options: "mandateOptions",
      setup_future_usage: "setupFutureUsage",
      target_date: "targetDate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions.out.optional(),
    setupFutureUsage: z.enum(["none", "off_session", "on_session"]).optional(),
    targetDate: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
      setupFutureUsage: "setup_future_usage",
      targetDate: "target_date",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0 =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsBacsDebitObj0,
  };
