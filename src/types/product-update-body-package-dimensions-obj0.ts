import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ProductUpdateBodyPackageDimensionsObj0
 */
export type ProductUpdateBodyPackageDimensionsObj0 = {
  height: number;
  length: number;
  weight: number;
  width: number;
};

/**
 * @internal
 * ProductUpdateBodyPackageDimensionsObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ProductUpdateBodyPackageDimensionsObj0 = {
  height: number;
  length: number;
  weight: number;
  width: number;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ProductUpdateBodyPackageDimensionsObj0
 */
const SchemaIn$ProductUpdateBodyPackageDimensionsObj0: z.ZodType<
  ProductUpdateBodyPackageDimensionsObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ProductUpdateBodyPackageDimensionsObj0
 */
const SchemaOut$ProductUpdateBodyPackageDimensionsObj0: z.ZodType<
  External$ProductUpdateBodyPackageDimensionsObj0, // output type of this zod object
  z.ZodTypeDef,
  ProductUpdateBodyPackageDimensionsObj0 // the object to be transformed
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

export const Schemas$ProductUpdateBodyPackageDimensionsObj0 = {
  in: SchemaIn$ProductUpdateBodyPackageDimensionsObj0,
  out: SchemaOut$ProductUpdateBodyPackageDimensionsObj0,
};
