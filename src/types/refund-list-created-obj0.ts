import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * RefundListCreatedObj0
 */
export type RefundListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * @internal
 * RefundListCreatedObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$RefundListCreatedObj0 = {
  gt?: number | undefined;
  gte?: number | undefined;
  lt?: number | undefined;
  lte?: number | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object RefundListCreatedObj0
 */
const SchemaIn$RefundListCreatedObj0: z.ZodType<
  RefundListCreatedObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$RefundListCreatedObj0
 */
const SchemaOut$RefundListCreatedObj0: z.ZodType<
  External$RefundListCreatedObj0, // output type of this zod object
  z.ZodTypeDef,
  RefundListCreatedObj0 // the object to be transformed
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

export const Schemas$RefundListCreatedObj0 = {
  in: SchemaIn$RefundListCreatedObj0,
  out: SchemaOut$RefundListCreatedObj0,
};
