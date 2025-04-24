import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentUpdateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
export type PaymentIntentUpdateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    customMandateUrl?: (string | string) | undefined;
    intervalDescription?: string | undefined;
    paymentSchedule?: ("combined" | "interval" | "sporadic") | undefined;
    transactionType?: ("business" | "personal") | undefined;
  };

/**
 * @internal
 * PaymentIntentUpdateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentUpdateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    custom_mandate_url?: (string | string) | undefined;
    interval_description?: string | undefined;
    payment_schedule?: ("combined" | "interval" | "sporadic") | undefined;
    transaction_type?: ("business" | "personal") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentUpdateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
const SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions: z.ZodType<
  PaymentIntentUpdateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    custom_mandate_url: z.union([z.string(), z.string()]).optional(),
    interval_description: z.string().optional(),
    payment_schedule: z.enum(["combined", "interval", "sporadic"]).optional(),
    transaction_type: z.enum(["business", "personal"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      custom_mandate_url: "customMandateUrl",
      interval_description: "intervalDescription",
      payment_schedule: "paymentSchedule",
      transaction_type: "transactionType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentUpdateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions
 */
const SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions: z.ZodType<
  External$PaymentIntentUpdateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentUpdateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions // the object to be transformed
> = z
  .object({
    customMandateUrl: z.union([z.string(), z.string()]).optional(),
    intervalDescription: z.string().optional(),
    paymentSchedule: z.enum(["combined", "interval", "sporadic"]).optional(),
    transactionType: z.enum(["business", "personal"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customMandateUrl: "custom_mandate_url",
      intervalDescription: "interval_description",
      paymentSchedule: "payment_schedule",
      transactionType: "transaction_type",
    });
  });

export const Schemas$PaymentIntentUpdateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions =
  {
    in: SchemaIn$PaymentIntentUpdateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions,
    out: SchemaOut$PaymentIntentUpdateBodyPaymentMethodOptionsAcssDebitObj0MandateOptions,
  };
