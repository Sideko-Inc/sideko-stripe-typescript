import {
  External$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions,
  PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions,
  Schemas$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions,
} from "./payment-intent-create-body-payment-method-options-bacs-debit-obj0-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0 = {
  mandateOptions?:
    | PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions
    | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0 =
  {
    mandate_options?:
      | External$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions
      | undefined;
    setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
    target_date?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0MandateOptions.out.optional(),
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

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0 =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsBacsDebitObj0,
  };
