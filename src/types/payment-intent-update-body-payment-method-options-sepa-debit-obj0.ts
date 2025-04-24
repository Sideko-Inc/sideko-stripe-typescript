import {
  External$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions,
  PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions,
  Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions,
} from "./payment-intent-update-body-payment-method-options-sepa-debit-obj0-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0 = {
  mandateOptions?:
    | PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions
    | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
};

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0 =
  {
    mandate_options?:
      | External$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions
      | undefined;
    setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
    target_date?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0 // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0MandateOptions.out.optional(),
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

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0 =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsSepaDebitObj0,
  };
