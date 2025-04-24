import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PromotionCodeListCreatedObj0
 */
export type PromotionCodeListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * PromotionCodeListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PromotionCodeListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PromotionCodeListCreatedObj0
 */
const SchemaIn$PromotionCodeListCreatedObj0: z.ZodType<
  PromotionCodeListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PromotionCodeListCreatedObj0
 */
const SchemaOut$PromotionCodeListCreatedObj0: z.ZodType<
  External$PromotionCodeListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  PromotionCodeListCreatedObj0 // the object to be transformed
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

export const Schemas$PromotionCodeListCreatedObj0 = {
  in: SchemaIn$PromotionCodeListCreatedObj0,
  out: SchemaOut$PromotionCodeListCreatedObj0,
};
