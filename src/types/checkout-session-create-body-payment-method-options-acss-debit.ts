import {
  CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebitMandateOptions,
  External$CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebitMandateOptions,
  Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebitMandateOptions,
} from "./checkout-session-create-body-payment-method-options-acss-debit-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebit
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebit = {
  currency?: ("cad" | "usd") | undefined;
  mandateOptions?:
    | CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebitMandateOptions
    | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebit = {
  currency?: ("cad" | "usd") | undefined;
  mandate_options?:
    | External$CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebitMandateOptions
    | undefined;
  setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
  target_date?: string | undefined;
  verification_method?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebit
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebit: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency: z.enum(["cad", "usd"]).optional(),
    mandate_options:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebitMandateOptions.in.optional(),
    setup_future_usage: z
      .enum(["none", "off_session", "on_session"])
      .optional(),
    target_date: z.string().optional(),
    verification_method: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      mandate_options: "mandateOptions",
      setup_future_usage: "setupFutureUsage",
      target_date: "targetDate",
      verification_method: "verificationMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebit
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebit: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebit // the object to be transformed
> = z
  .object({
    currency: z.enum(["cad", "usd"]).optional(),
    mandateOptions:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebitMandateOptions.out.optional(),
    setupFutureUsage: z.enum(["none", "off_session", "on_session"]).optional(),
    targetDate: z.string().optional(),
    verificationMethod: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency: "currency",
      mandateOptions: "mandate_options",
      setupFutureUsage: "setup_future_usage",
      targetDate: "target_date",
      verificationMethod: "verification_method",
    });
  });

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebit = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebit,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsAcssDebit,
};
