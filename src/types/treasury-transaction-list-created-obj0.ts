import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TreasuryTransactionListCreatedObj0
 */
export type TreasuryTransactionListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * TreasuryTransactionListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryTransactionListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryTransactionListCreatedObj0
 */
const SchemaIn$TreasuryTransactionListCreatedObj0: z.ZodType<
  TreasuryTransactionListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryTransactionListCreatedObj0
 */
const SchemaOut$TreasuryTransactionListCreatedObj0: z.ZodType<
  External$TreasuryTransactionListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  TreasuryTransactionListCreatedObj0 // the object to be transformed
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

export const Schemas$TreasuryTransactionListCreatedObj0 = {
  in: SchemaIn$TreasuryTransactionListCreatedObj0,
  out: SchemaOut$TreasuryTransactionListCreatedObj0,
};
