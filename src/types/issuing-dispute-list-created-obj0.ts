import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingDisputeListCreatedObj0
 */
export type IssuingDisputeListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * IssuingDisputeListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingDisputeListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingDisputeListCreatedObj0
 */
const SchemaIn$IssuingDisputeListCreatedObj0: z.ZodType<
  IssuingDisputeListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingDisputeListCreatedObj0
 */
const SchemaOut$IssuingDisputeListCreatedObj0: z.ZodType<
  External$IssuingDisputeListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  IssuingDisputeListCreatedObj0 // the object to be transformed
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

export const Schemas$IssuingDisputeListCreatedObj0 = {
  in: SchemaIn$IssuingDisputeListCreatedObj0,
  out: SchemaOut$IssuingDisputeListCreatedObj0,
};
