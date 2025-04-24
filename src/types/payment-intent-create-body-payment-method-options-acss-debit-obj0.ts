import {
  External$PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions,
  PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions,
  Schemas$PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions,
} from "./payment-intent-create-body-payment-method-options-acss-debit-obj0-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0 = {
  mandateOptions?:
    | PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions
    | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
  verificationMethod?: ("automatic" | "instant" | "microdeposits") | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0 =
  {
    mandate_options?:
      | External$PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions
      | undefined;
    setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
    target_date?: string | undefined;
    verification_method?:
      | ("automatic" | "instant" | "microdeposits")
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions.in.optional(),
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
      mandate_options: "mandateOptions",
      setup_future_usage: "setupFutureUsage",
      target_date: "targetDate",
      verification_method: "verificationMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions.out.optional(),
    setupFutureUsage: z.enum(["none", "off_session", "on_session"]).optional(),
    targetDate: z.string().optional(),
    verificationMethod: z
      .enum(["automatic", "instant", "microdeposits"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      mandateOptions: "mandate_options",
      setupFutureUsage: "setup_future_usage",
      targetDate: "target_date",
      verificationMethod: "verification_method",
    });
  });

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0 =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsAcssDebitObj0,
  };
