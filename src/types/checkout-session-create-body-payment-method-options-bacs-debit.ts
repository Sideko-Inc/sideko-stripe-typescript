import {
  CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions,
  External$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions,
  Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions,
} from "./checkout-session-create-body-payment-method-options-bacs-debit-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebit
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebit = {
  mandateOptions?:
    | CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions
    | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebit = {
  mandate_options?:
    | External$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions
    | undefined;
  setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
  target_date?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebit
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebit: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebit
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebit: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebit, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebit // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebitMandateOptions.out.optional(),
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

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebit = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebit,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsBacsDebit,
};
