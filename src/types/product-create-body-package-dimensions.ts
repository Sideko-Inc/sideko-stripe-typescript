import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The dimensions of this product for shipping purposes.
 */
export type ProductCreateBodyPackageDimensions = {
  height: number;
  length: number;
  weight: number;
  width: number;
};

/**
 * @internal
 * ProductCreateBodyPackageDimensions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProductCreateBodyPackageDimensions = {
  height: number;
  length: number;
  weight: number;
  width: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProductCreateBodyPackageDimensions
 */
const SchemaIn$ProductCreateBodyPackageDimensions: z.ZodType<
  ProductCreateBodyPackageDimensions, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProductCreateBodyPackageDimensions
 */
const SchemaOut$ProductCreateBodyPackageDimensions: z.ZodType<
  External$ProductCreateBodyPackageDimensions, // output type of this zod object
  z.ZodTypeDef,
  ProductCreateBodyPackageDimensions // the object to be transformed
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

export const Schemas$ProductCreateBodyPackageDimensions = {
  in: SchemaIn$ProductCreateBodyPackageDimensions,
  out: SchemaOut$ProductCreateBodyPackageDimensions,
};
