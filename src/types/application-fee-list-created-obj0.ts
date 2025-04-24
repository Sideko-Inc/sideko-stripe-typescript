import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ApplicationFeeListCreatedObj0
 */
export type ApplicationFeeListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * ApplicationFeeListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ApplicationFeeListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ApplicationFeeListCreatedObj0
 */
const SchemaIn$ApplicationFeeListCreatedObj0: z.ZodType<
  ApplicationFeeListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ApplicationFeeListCreatedObj0
 */
const SchemaOut$ApplicationFeeListCreatedObj0: z.ZodType<
  External$ApplicationFeeListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  ApplicationFeeListCreatedObj0 // the object to be transformed
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

export const Schemas$ApplicationFeeListCreatedObj0 = {
  in: SchemaIn$ApplicationFeeListCreatedObj0,
  out: SchemaOut$ApplicationFeeListCreatedObj0,
};
