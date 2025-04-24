import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PlanCreateBodyTiersItem
 */
export type PlanCreateBodyTiersItem = {
  flatAmount?: number | undefined;
  flatAmountDecimal?: string | undefined;
  unitAmount?: number | undefined;
  unitAmountDecimal?: string | undefined;
  upTo: "inf" | number;
};

/**
 * @internal
 * PlanCreateBodyTiersItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PlanCreateBodyTiersItem = {
  flat_amount?: number | undefined;
  flat_amount_decimal?: string | undefined;
  unit_amount?: number | undefined;
  unit_amount_decimal?: string | undefined;
  up_to: "inf" | number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PlanCreateBodyTiersItem
 */
const SchemaIn$PlanCreateBodyTiersItem: z.ZodType<
  PlanCreateBodyTiersItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    flat_amount: z.number().int().optional(),
    flat_amount_decimal: z.string().optional(),
    unit_amount: z.number().int().optional(),
    unit_amount_decimal: z.string().optional(),
    up_to: z.union([z.enum(["inf"]), z.number().int()]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PlanCreateBodyTiersItem
 */
const SchemaOut$PlanCreateBodyTiersItem: z.ZodType<
  External$PlanCreateBodyTiersItem, // output type of this zod object
  z.ZodTypeDef,
  PlanCreateBodyTiersItem // the object to be transformed
> = z
  .object({
    flatAmount: z.number().int().optional(),
    flatAmountDecimal: z.string().optional(),
    unitAmount: z.number().int().optional(),
    unitAmountDecimal: z.string().optional(),
    upTo: z.union([z.enum(["inf"]), z.number().int()]),
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

export const Schemas$PlanCreateBodyTiersItem = {
  in: SchemaIn$PlanCreateBodyTiersItem,
  out: SchemaOut$PlanCreateBodyTiersItem,
};
