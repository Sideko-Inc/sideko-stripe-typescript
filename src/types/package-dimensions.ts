import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PackageDimensions = {
  /**
   * Height, in inches.
   */
  height: number;
  /**
   * Length, in inches.
   */
  length: number;
  /**
   * Weight, in ounces.
   */
  weight: number;
  /**
   * Width, in inches.
   */
  width: number;
};

/**
 * @internal
 * PackageDimensions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PackageDimensions = {
  height: number;
  length: number;
  weight: number;
  width: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PackageDimensions
 */
const SchemaIn$PackageDimensions: z.ZodType<
  PackageDimensions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    height: z.number(),
    length: z.number(),
    weight: z.number(),
    width: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      height: "height",
      length: "length",
      weight: "weight",
      width: "width",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PackageDimensions
 */
const SchemaOut$PackageDimensions: z.ZodType<
  External$PackageDimensions, // output type of this zod object
  z.ZodTypeDef,
  PackageDimensions // the object to be transformed
> = z
  .object({
    height: z.number(),
    length: z.number(),
    weight: z.number(),
    width: z.number(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      height: "height",
      length: "length",
      weight: "weight",
      width: "width",
    });
  });

export const Schemas$PackageDimensions = {
  in: SchemaIn$PackageDimensions,
  out: SchemaOut$PackageDimensions,
};
