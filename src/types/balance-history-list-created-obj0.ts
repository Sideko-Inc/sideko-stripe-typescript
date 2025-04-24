import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BalanceHistoryListCreatedObj0
 */
export type BalanceHistoryListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * BalanceHistoryListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BalanceHistoryListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BalanceHistoryListCreatedObj0
 */
const SchemaIn$BalanceHistoryListCreatedObj0: z.ZodType<
  BalanceHistoryListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BalanceHistoryListCreatedObj0
 */
const SchemaOut$BalanceHistoryListCreatedObj0: z.ZodType<
  External$BalanceHistoryListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  BalanceHistoryListCreatedObj0 // the object to be transformed
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

export const Schemas$BalanceHistoryListCreatedObj0 = {
  in: SchemaIn$BalanceHistoryListCreatedObj0,
  out: SchemaOut$BalanceHistoryListCreatedObj0,
};
