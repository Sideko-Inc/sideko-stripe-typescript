import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CouponListCreatedObj0
 */
export type CouponListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * CouponListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CouponListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CouponListCreatedObj0
 */
const SchemaIn$CouponListCreatedObj0: z.ZodType<
  CouponListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CouponListCreatedObj0
 */
const SchemaOut$CouponListCreatedObj0: z.ZodType<
  External$CouponListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  CouponListCreatedObj0 // the object to be transformed
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

export const Schemas$CouponListCreatedObj0 = {
  in: SchemaIn$CouponListCreatedObj0,
  out: SchemaOut$CouponListCreatedObj0,
};
