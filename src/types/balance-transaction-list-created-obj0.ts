import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BalanceTransactionListCreatedObj0
 */
export type BalanceTransactionListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * BalanceTransactionListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BalanceTransactionListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BalanceTransactionListCreatedObj0
 */
const SchemaIn$BalanceTransactionListCreatedObj0: z.ZodType<
  BalanceTransactionListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BalanceTransactionListCreatedObj0
 */
const SchemaOut$BalanceTransactionListCreatedObj0: z.ZodType<
  External$BalanceTransactionListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  BalanceTransactionListCreatedObj0 // the object to be transformed
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

export const Schemas$BalanceTransactionListCreatedObj0 = {
  in: SchemaIn$BalanceTransactionListCreatedObj0,
  out: SchemaOut$BalanceTransactionListCreatedObj0,
};
