import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TransformUsage = {
  /**
   * Divide usage by this number.
   */
  divideBy: number;
  /**
   * After division, either round the result `up` or `down`.
   */
  round: "down" | "up";
};

/**
 * @internal
 * TransformUsage without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TransformUsage = {
  divide_by: number;
  round: "down" | "up";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TransformUsage
 */
const SchemaIn$TransformUsage: z.ZodType<
  TransformUsage, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TransformUsage
 */
const SchemaOut$TransformUsage: z.ZodType<
  External$TransformUsage, // output type of this zod object
  z.ZodTypeDef,
  TransformUsage // the object to be transformed
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

export const Schemas$TransformUsage = {
  in: SchemaIn$TransformUsage,
  out: SchemaOut$TransformUsage,
};
