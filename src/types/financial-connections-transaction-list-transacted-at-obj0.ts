import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * FinancialConnectionsTransactionListTransactedAtObj0
 */
export type FinancialConnectionsTransactionListTransactedAtObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * FinancialConnectionsTransactionListTransactedAtObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$FinancialConnectionsTransactionListTransactedAtObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object FinancialConnectionsTransactionListTransactedAtObj0
 */
const SchemaIn$FinancialConnectionsTransactionListTransactedAtObj0: z.ZodType<
  FinancialConnectionsTransactionListTransactedAtObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$FinancialConnectionsTransactionListTransactedAtObj0
 */
const SchemaOut$FinancialConnectionsTransactionListTransactedAtObj0: z.ZodType<
  External$FinancialConnectionsTransactionListTransactedAtObj0, // output type of this zod object
  z.ZodTypeDef,
  FinancialConnectionsTransactionListTransactedAtObj0 // the object to be transformed
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

export const Schemas$FinancialConnectionsTransactionListTransactedAtObj0 = {
  in: SchemaIn$FinancialConnectionsTransactionListTransactedAtObj0,
  out: SchemaOut$FinancialConnectionsTransactionListTransactedAtObj0,
};
