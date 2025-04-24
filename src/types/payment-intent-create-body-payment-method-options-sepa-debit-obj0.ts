import {
  External$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions,
  PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions,
  Schemas$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions,
} from "./payment-intent-create-body-payment-method-options-sepa-debit-obj0-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0
 */
export type PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0 = {
  mandateOptions?:
    | PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions
    | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
};

/**
 * @internal
 * PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0 =
  {
    mandate_options?:
      | External$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions
      | undefined;
    setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
    target_date?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0
 */
const SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0: z.ZodType<
  PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0
 */
const SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0: z.ZodType<
  External$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions.out.optional(),
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

export const Schemas$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0 =
  {
    in: SchemaIn$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0,
    out: SchemaOut$PaymentIntentCreateBodyPaymentMethodOptionsSepaDebitObj0,
  };
