import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedProductFeature = {
  /**
   * Always true for a deleted object
   */
  deleted: boolean;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "product_feature";
};

/**
 * @internal
 * DeletedProductFeature without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedProductFeature = {
  deleted: boolean;
  id: string;
  object: "product_feature";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedProductFeature
 */
const SchemaIn$DeletedProductFeature: z.ZodType<
  DeletedProductFeature, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["product_feature"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedProductFeature
 */
const SchemaOut$DeletedProductFeature: z.ZodType<
  External$DeletedProductFeature, // output type of this zod object
  z.ZodTypeDef,
  DeletedProductFeature // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["product_feature"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedProductFeature = {
  in: SchemaIn$DeletedProductFeature,
  out: SchemaOut$DeletedProductFeature,
};
