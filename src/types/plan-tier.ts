import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PlanTier = {
  /**
   * Price for the entire tier.
   */
  flatAmount?: number | null | undefined;
  /**
   * Same as `flat_amount`, but contains a decimal value with at most 12 decimal places.
   */
  flatAmountDecimal?: string | null | undefined;
  /**
   * Per unit price for units relevant to the tier.
   */
  unitAmount?: number | null | undefined;
  /**
   * Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
   */
  unitAmountDecimal?: string | null | undefined;
  /**
   * Up to and including to this quantity will be contained in the tier.
   */
  upTo?: number | null | undefined;
};

/**
 * @internal
 * PlanTier without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PlanTier = {
  flat_amount?: number | null | undefined;
  flat_amount_decimal?: string | null | undefined;
  unit_amount?: number | null | undefined;
  unit_amount_decimal?: string | null | undefined;
  up_to?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PlanTier
 */
const SchemaIn$PlanTier: z.ZodType<
  PlanTier, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    flat_amount: z.number().int().nullable().optional(),
    flat_amount_decimal: z.string().nullable().optional(),
    unit_amount: z.number().int().nullable().optional(),
    unit_amount_decimal: z.string().nullable().optional(),
    up_to: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      flat_amount: "flatAmount",
      flat_amount_decimal: "flatAmountDecimal",
      unit_amount: "unitAmount",
      unit_amount_decimal: "unitAmountDecimal",
      up_to: "upTo",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PlanTier
 */
const SchemaOut$PlanTier: z.ZodType<
  External$PlanTier, // output type of this zod object
  z.ZodTypeDef,
  PlanTier // the object to be transformed
> = z
  .object({
    flatAmount: z.number().int().nullable().optional(),
    flatAmountDecimal: z.string().nullable().optional(),
    unitAmount: z.number().int().nullable().optional(),
    unitAmountDecimal: z.string().nullable().optional(),
    upTo: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      flatAmount: "flat_amount",
      flatAmountDecimal: "flat_amount_decimal",
      unitAmount: "unit_amount",
      unitAmountDecimal: "unit_amount_decimal",
      upTo: "up_to",
    });
  });

export const Schemas$PlanTier = {
  in: SchemaIn$PlanTier,
  out: SchemaOut$PlanTier,
};
