import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentMethodDetailsCardInstallmentsPlan = {
  /**
   * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
   */
  count?: number | null | undefined;
  /**
   * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
   * One of `month`.
   */
  interval?: "month" | null | undefined;
  /**
   * Type of installment plan, one of `fixed_count`.
   */
  type: "fixed_count";
};

/**
 * @internal
 * PaymentMethodDetailsCardInstallmentsPlan without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDetailsCardInstallmentsPlan = {
  count?: number | null | undefined;
  interval?: "month" | null | undefined;
  type: "fixed_count";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDetailsCardInstallmentsPlan
 */
const SchemaIn$PaymentMethodDetailsCardInstallmentsPlan: z.ZodType<
  PaymentMethodDetailsCardInstallmentsPlan, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    count: z.number().int().nullable().optional(),
    interval: z.enum(["month"]).nullable().optional(),
    type: z.enum(["fixed_count"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      count: "count",
      interval: "interval",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDetailsCardInstallmentsPlan
 */
const SchemaOut$PaymentMethodDetailsCardInstallmentsPlan: z.ZodType<
  External$PaymentMethodDetailsCardInstallmentsPlan, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDetailsCardInstallmentsPlan // the object to be transformed
> = z
  .object({
    count: z.number().int().nullable().optional(),
    interval: z.enum(["month"]).nullable().optional(),
    type: z.enum(["fixed_count"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      count: "count",
      interval: "interval",
      type: "type",
    });
  });

export const Schemas$PaymentMethodDetailsCardInstallmentsPlan = {
  in: SchemaIn$PaymentMethodDetailsCardInstallmentsPlan,
  out: SchemaOut$PaymentMethodDetailsCardInstallmentsPlan,
};
