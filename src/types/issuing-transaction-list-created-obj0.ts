import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingTransactionListCreatedObj0
 */
export type IssuingTransactionListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * IssuingTransactionListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingTransactionListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingTransactionListCreatedObj0
 */
const SchemaIn$IssuingTransactionListCreatedObj0: z.ZodType<
  IssuingTransactionListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingTransactionListCreatedObj0
 */
const SchemaOut$IssuingTransactionListCreatedObj0: z.ZodType<
  External$IssuingTransactionListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingTransactionListCreatedObj0 // the object to be transformed
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

export const Schemas$IssuingTransactionListCreatedObj0 = {
  in: SchemaIn$IssuingTransactionListCreatedObj0,
  out: SchemaOut$IssuingTransactionListCreatedObj0,
};
