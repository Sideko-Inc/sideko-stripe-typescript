import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedPrice = {
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
  object: "price";
};

/**
 * @internal
 * DeletedPrice without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedPrice = {
  deleted: boolean;
  id: string;
  object: "price";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedPrice
 */
const SchemaIn$DeletedPrice: z.ZodType<
  DeletedPrice, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["price"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedPrice
 */
const SchemaOut$DeletedPrice: z.ZodType<
  External$DeletedPrice, // output type of this zod object
  z.ZodTypeDef,
  DeletedPrice // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["price"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedPrice = {
  in: SchemaIn$DeletedPrice,
  out: SchemaOut$DeletedPrice,
};
