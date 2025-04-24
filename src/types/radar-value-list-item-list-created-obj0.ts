import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * RadarValueListItemListCreatedObj0
 */
export type RadarValueListItemListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * RadarValueListItemListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RadarValueListItemListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RadarValueListItemListCreatedObj0
 */
const SchemaIn$RadarValueListItemListCreatedObj0: z.ZodType<
  RadarValueListItemListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RadarValueListItemListCreatedObj0
 */
const SchemaOut$RadarValueListItemListCreatedObj0: z.ZodType<
  External$RadarValueListItemListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  RadarValueListItemListCreatedObj0 // the object to be transformed
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

export const Schemas$RadarValueListItemListCreatedObj0 = {
  in: SchemaIn$RadarValueListItemListCreatedObj0,
  out: SchemaOut$RadarValueListItemListCreatedObj0,
};
