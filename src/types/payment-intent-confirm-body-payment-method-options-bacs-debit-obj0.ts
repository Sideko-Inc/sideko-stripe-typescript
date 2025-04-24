import {
  External$PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0MandateOptions,
  PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0MandateOptions,
  Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0MandateOptions,
} from "./payment-intent-confirm-body-payment-method-options-bacs-debit-obj0-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0 = {
  mandateOptions?:
    | PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0MandateOptions
    | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0 =
  {
    mandate_options?:
      | External$PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0MandateOptions
      | undefined;
    setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
    target_date?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0MandateOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0MandateOptions.out.optional(),
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

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0 =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsBacsDebitObj0,
  };
