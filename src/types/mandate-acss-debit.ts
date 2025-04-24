import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type MandateAcssDebit = {
  /**
   * List of Stripe products where this mandate can be selected automatically.
   */
  defaultFor?: ("invoice" | "subscription")[] | undefined;
  /**
   * Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'.
   */
  intervalDescription?: string | null | undefined;
  /**
   * Payment schedule for the mandate.
   */
  paymentSchedule: "combined" | "interval" | "sporadic";
  /**
   * Transaction type of the mandate.
   */
  transactionType: "business" | "personal";
};

/**
 * @internal
 * MandateAcssDebit without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$MandateAcssDebit = {
  default_for?: ("invoice" | "subscription")[] | undefined;
  interval_description?: string | null | undefined;
  payment_schedule: "combined" | "interval" | "sporadic";
  transaction_type: "business" | "personal";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object MandateAcssDebit
 */
const SchemaIn$MandateAcssDebit: z.ZodType<
  MandateAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    default_for: z.array(z.enum(["invoice", "subscription"])).optional(),
    interval_description: z.string().nullable().optional(),
    payment_schedule: z.enum(["combined", "interval", "sporadic"]),
    transaction_type: z.enum(["business", "personal"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      default_for: "defaultFor",
      interval_description: "intervalDescription",
      payment_schedule: "paymentSchedule",
      transaction_type: "transactionType",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$MandateAcssDebit
 */
const SchemaOut$MandateAcssDebit: z.ZodType<
  External$MandateAcssDebit, // output type of this zod object
  z.ZodTypeDef,
  MandateAcssDebit // the object to be transformed
> = z
  .object({
    defaultFor: z.array(z.enum(["invoice", "subscription"])).optional(),
    intervalDescription: z.string().nullable().optional(),
    paymentSchedule: z.enum(["combined", "interval", "sporadic"]),
    transactionType: z.enum(["business", "personal"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      defaultFor: "default_for",
      intervalDescription: "interval_description",
      paymentSchedule: "payment_schedule",
      transactionType: "transaction_type",
    });
  });

export const Schemas$MandateAcssDebit = {
  in: SchemaIn$MandateAcssDebit,
  out: SchemaOut$MandateAcssDebit,
};
