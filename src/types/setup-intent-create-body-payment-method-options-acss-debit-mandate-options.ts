import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions
 */
export type SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions = {
  customMandateUrl?: (string | string) | undefined;
  defaultFor?: ("invoice" | "subscription")[] | undefined;
  intervalDescription?: string | undefined;
  paymentSchedule?: ("combined" | "interval" | "sporadic") | undefined;
  transactionType?: ("business" | "personal") | undefined;
};

/**
 * @internal
 * SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions =
  {
    custom_mandate_url?: (string | string) | undefined;
    default_for?: ("invoice" | "subscription")[] | undefined;
    interval_description?: string | undefined;
    payment_schedule?: ("combined" | "interval" | "sporadic") | undefined;
    transaction_type?: ("business" | "personal") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions
 */
const SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions: z.ZodType<
  SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    custom_mandate_url: z.union([z.string(), z.string()]).optional(),
    default_for: z.array(z.enum(["invoice", "subscription"])).optional(),
    interval_description: z.string().optional(),
    payment_schedule: z.enum(["combined", "interval", "sporadic"]).optional(),
    transaction_type: z.enum(["business", "personal"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      custom_mandate_url: "customMandateUrl",
      default_for: "defaultFor",
      interval_description: "intervalDescription",
      payment_schedule: "paymentSchedule",
      transaction_type: "transactionType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions
 */
const SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions: z.ZodType<
  External$SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions // the object to be transformed
> = z
  .object({
    customMandateUrl: z.union([z.string(), z.string()]).optional(),
    defaultFor: z.array(z.enum(["invoice", "subscription"])).optional(),
    intervalDescription: z.string().optional(),
    paymentSchedule: z.enum(["combined", "interval", "sporadic"]).optional(),
    transactionType: z.enum(["business", "personal"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customMandateUrl: "custom_mandate_url",
      defaultFor: "default_for",
      intervalDescription: "interval_description",
      paymentSchedule: "payment_schedule",
      transactionType: "transaction_type",
    });
  });

export const Schemas$SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions =
  {
    in: SchemaIn$SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions,
    out: SchemaOut$SetupIntentCreateBodyPaymentMethodOptionsAcssDebitMandateOptions,
  };
