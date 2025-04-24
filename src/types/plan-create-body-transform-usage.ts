import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.
 */
export type PlanCreateBodyTransformUsage = {
  divideBy: number;
  round: "down" | "up";
};

/**
 * @internal
 * PlanCreateBodyTransformUsage without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PlanCreateBodyTransformUsage = {
  divide_by: number;
  round: "down" | "up";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PlanCreateBodyTransformUsage
 */
const SchemaIn$PlanCreateBodyTransformUsage: z.ZodType<
  PlanCreateBodyTransformUsage, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    divide_by: z.number().int(),
    round: z.enum(["down", "up"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      divide_by: "divideBy",
      round: "round",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PlanCreateBodyTransformUsage
 */
const SchemaOut$PlanCreateBodyTransformUsage: z.ZodType<
  External$PlanCreateBodyTransformUsage, // output type of this zod object
  z.ZodTypeDef,
  PlanCreateBodyTransformUsage // the object to be transformed
> = z
  .object({
    divideBy: z.number().int(),
    round: z.enum(["down", "up"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      divideBy: "divide_by",
      round: "round",
    });
  });

export const Schemas$PlanCreateBodyTransformUsage = {
  in: SchemaIn$PlanCreateBodyTransformUsage,
  out: SchemaOut$PlanCreateBodyTransformUsage,
};
