import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.
 */
export type PriceCreateBodyTransformQuantity = {
  divideBy: number;
  round: "down" | "up";
};

/**
 * @internal
 * PriceCreateBodyTransformQuantity without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PriceCreateBodyTransformQuantity = {
  divide_by: number;
  round: "down" | "up";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PriceCreateBodyTransformQuantity
 */
const SchemaIn$PriceCreateBodyTransformQuantity: z.ZodType<
  PriceCreateBodyTransformQuantity, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PriceCreateBodyTransformQuantity
 */
const SchemaOut$PriceCreateBodyTransformQuantity: z.ZodType<
  External$PriceCreateBodyTransformQuantity, // output type of this zod object
  z.ZodTypeDef,
  PriceCreateBodyTransformQuantity // the object to be transformed
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

export const Schemas$PriceCreateBodyTransformQuantity = {
  in: SchemaIn$PriceCreateBodyTransformQuantity,
  out: SchemaOut$PriceCreateBodyTransformQuantity,
};
