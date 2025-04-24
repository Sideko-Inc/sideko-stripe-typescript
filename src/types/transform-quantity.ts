import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TransformQuantity = {
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
 * TransformQuantity without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TransformQuantity = {
  divide_by: number;
  round: "down" | "up";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TransformQuantity
 */
const SchemaIn$TransformQuantity: z.ZodType<
  TransformQuantity, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TransformQuantity
 */
const SchemaOut$TransformQuantity: z.ZodType<
  External$TransformQuantity, // output type of this zod object
  z.ZodTypeDef,
  TransformQuantity // the object to be transformed
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

export const Schemas$TransformQuantity = {
  in: SchemaIn$TransformQuantity,
  out: SchemaOut$TransformQuantity,
};
