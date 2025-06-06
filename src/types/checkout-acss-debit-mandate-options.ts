import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type CheckoutAcssDebitMandateOptions = {
  /**
   * A URL for custom mandate text
   */
  customMandateUrl?: string | undefined;
  /**
   * List of Stripe products where this mandate can be selected automatically. Returned when the Session is in `setup` mode.
   */
  defaultFor?: ("invoice" | "subscription")[] | undefined;
  /**
   * Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'.
   */
  intervalDescription?: string | null | undefined;
  /**
   * Payment schedule for the mandate.
   */
  paymentSchedule?: ("combined" | "interval" | "sporadic") | null | undefined;
  /**
   * Transaction type of the mandate.
   */
  transactionType?: ("business" | "personal") | null | undefined;
};

/**
 * @internal
 * CheckoutAcssDebitMandateOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutAcssDebitMandateOptions = {
  custom_mandate_url?: string | undefined;
  default_for?: ("invoice" | "subscription")[] | undefined;
  interval_description?: string | null | undefined;
  payment_schedule?: ("combined" | "interval" | "sporadic") | null | undefined;
  transaction_type?: ("business" | "personal") | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutAcssDebitMandateOptions
 */
const SchemaIn$CheckoutAcssDebitMandateOptions: z.ZodType<
  CheckoutAcssDebitMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    custom_mandate_url: z.string().optional(),
    default_for: z.array(z.enum(["invoice", "subscription"])).optional(),
    interval_description: z.string().nullable().optional(),
    payment_schedule: z
      .enum(["combined", "interval", "sporadic"])
      .nullable()
      .optional(),
    transaction_type: z.enum(["business", "personal"]).nullable().optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutAcssDebitMandateOptions
 */
const SchemaOut$CheckoutAcssDebitMandateOptions: z.ZodType<
  External$CheckoutAcssDebitMandateOptions, // output type of this zod object
  z.ZodTypeDef,
  CheckoutAcssDebitMandateOptions // the object to be transformed
> = z
  .object({
    customMandateUrl: z.string().optional(),
    defaultFor: z.array(z.enum(["invoice", "subscription"])).optional(),
    intervalDescription: z.string().nullable().optional(),
    paymentSchedule: z
      .enum(["combined", "interval", "sporadic"])
      .nullable()
      .optional(),
    transactionType: z.enum(["business", "personal"]).nullable().optional(),
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

export const Schemas$CheckoutAcssDebitMandateOptions = {
  in: SchemaIn$CheckoutAcssDebitMandateOptions,
  out: SchemaOut$CheckoutAcssDebitMandateOptions,
};
