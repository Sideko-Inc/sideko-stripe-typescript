import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryTransactionEntryListEffectiveAtObj0
 */
export type TreasuryTransactionEntryListEffectiveAtObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * TreasuryTransactionEntryListEffectiveAtObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryTransactionEntryListEffectiveAtObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryTransactionEntryListEffectiveAtObj0
 */
const SchemaIn$TreasuryTransactionEntryListEffectiveAtObj0: z.ZodType<
  TreasuryTransactionEntryListEffectiveAtObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryTransactionEntryListEffectiveAtObj0
 */
const SchemaOut$TreasuryTransactionEntryListEffectiveAtObj0: z.ZodType<
  External$TreasuryTransactionEntryListEffectiveAtObj0, // output type of this zod object
  z.ZodTypeDef,
  TreasuryTransactionEntryListEffectiveAtObj0 // the object to be transformed
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

export const Schemas$TreasuryTransactionEntryListEffectiveAtObj0 = {
  in: SchemaIn$TreasuryTransactionEntryListEffectiveAtObj0,
  out: SchemaOut$TreasuryTransactionEntryListEffectiveAtObj0,
};
