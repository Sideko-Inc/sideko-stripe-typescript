import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryFinancialAccountListCreatedObj0
 */
export type TreasuryFinancialAccountListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountListCreatedObj0
 */
const SchemaIn$TreasuryFinancialAccountListCreatedObj0: z.ZodType<
  TreasuryFinancialAccountListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    gt: z.number().int().optional(),
    gte: z.number().int().optional(),
    lt: z.number().int().optional(),
    lte: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      gt: "gt",
      gte: "gte",
      lt: "lt",
      lte: "lte",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountListCreatedObj0
 */
const SchemaOut$TreasuryFinancialAccountListCreatedObj0: z.ZodType<
  External$TreasuryFinancialAccountListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountListCreatedObj0 // the object to be transformed
> = z
  .object({
    gt: z.number().int().optional(),
    gte: z.number().int().optional(),
    lt: z.number().int().optional(),
    lte: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      gt: "gt",
      gte: "gte",
      lt: "lt",
      lte: "lte",
    });
  });

export const Schemas$TreasuryFinancialAccountListCreatedObj0 = {
  in: SchemaIn$TreasuryFinancialAccountListCreatedObj0,
  out: SchemaOut$TreasuryFinancialAccountListCreatedObj0,
};
