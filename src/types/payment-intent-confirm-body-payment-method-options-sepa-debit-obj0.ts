import {
  External$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions,
  PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions,
  Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions,
} from "./payment-intent-confirm-body-payment-method-options-sepa-debit-obj0-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0
 */
export type PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0 = {
  mandateOptions?:
    | PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions
    | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0 =
  {
    mandate_options?:
      | External$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions
      | undefined;
    setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
    target_date?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0MandateOptions.out.optional(),
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

export const Schemas$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0 =
  {
    in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0,
    out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodOptionsSepaDebitObj0,
  };
