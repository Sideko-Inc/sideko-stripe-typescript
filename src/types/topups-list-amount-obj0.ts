import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TopupsListAmountObj0
 */
export type TopupsListAmountObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * TopupsListAmountObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TopupsListAmountObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TopupsListAmountObj0
 */
const SchemaIn$TopupsListAmountObj0: z.ZodType<
  TopupsListAmountObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TopupsListAmountObj0
 */
const SchemaOut$TopupsListAmountObj0: z.ZodType<
  External$TopupsListAmountObj0, // output type of this zod object
  z.ZodTypeDef,
  TopupsListAmountObj0 // the object to be transformed
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

export const Schemas$TopupsListAmountObj0 = {
  in: SchemaIn$TopupsListAmountObj0,
  out: SchemaOut$TopupsListAmountObj0,
};
