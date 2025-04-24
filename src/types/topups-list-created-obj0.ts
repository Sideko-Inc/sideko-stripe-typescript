import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TopupsListCreatedObj0
 */
export type TopupsListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * TopupsListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TopupsListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TopupsListCreatedObj0
 */
const SchemaIn$TopupsListCreatedObj0: z.ZodType<
  TopupsListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TopupsListCreatedObj0
 */
const SchemaOut$TopupsListCreatedObj0: z.ZodType<
  External$TopupsListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  TopupsListCreatedObj0 // the object to be transformed
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

export const Schemas$TopupsListCreatedObj0 = {
  in: SchemaIn$TopupsListCreatedObj0,
  out: SchemaOut$TopupsListCreatedObj0,
};
