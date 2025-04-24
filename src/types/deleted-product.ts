import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedProduct = {
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
  object: "product";
};

/**
 * @internal
 * DeletedProduct without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedProduct = {
  deleted: boolean;
  id: string;
  object: "product";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedProduct
 */
const SchemaIn$DeletedProduct: z.ZodType<
  DeletedProduct, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["product"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedProduct
 */
const SchemaOut$DeletedProduct: z.ZodType<
  External$DeletedProduct, // output type of this zod object
  z.ZodTypeDef,
  DeletedProduct // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["product"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedProduct = {
  in: SchemaIn$DeletedProduct,
  out: SchemaOut$DeletedProduct,
};
