import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * DisputeListCreatedObj0
 */
export type DisputeListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * DisputeListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DisputeListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DisputeListCreatedObj0
 */
const SchemaIn$DisputeListCreatedObj0: z.ZodType<
  DisputeListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DisputeListCreatedObj0
 */
const SchemaOut$DisputeListCreatedObj0: z.ZodType<
  External$DisputeListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  DisputeListCreatedObj0 // the object to be transformed
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

export const Schemas$DisputeListCreatedObj0 = {
  in: SchemaIn$DisputeListCreatedObj0,
  out: SchemaOut$DisputeListCreatedObj0,
};
