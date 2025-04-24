import {
  CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions,
  External$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions,
  Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions,
} from "./checkout-session-create-body-payment-method-options-sepa-debit-mandate-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebit
 */
export type CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebit = {
  mandateOptions?:
    | CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions
    | undefined;
  setupFutureUsage?: ("none" | "off_session" | "on_session") | undefined;
  targetDate?: string | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebit = {
  mandate_options?:
    | External$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions
    | undefined;
  setup_future_usage?: ("none" | "off_session" | "on_session") | undefined;
  target_date?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebit
 */
const SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebit: z.ZodType<
  CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    mandate_options:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebit
 */
const SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebit: z.ZodType<
  External$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebit, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebit // the object to be transformed
> = z
  .object({
    mandateOptions:
      Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebitMandateOptions.out.optional(),
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

export const Schemas$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebit = {
  in: SchemaIn$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebit,
  out: SchemaOut$CheckoutSessionCreateBodyPaymentMethodOptionsSepaDebit,
};
