import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedCustomer = {
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
  object: "customer";
};

/**
 * @internal
 * DeletedCustomer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedCustomer = {
  deleted: boolean;
  id: string;
  object: "customer";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedCustomer
 */
const SchemaIn$DeletedCustomer: z.ZodType<
  DeletedCustomer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["customer"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedCustomer
 */
const SchemaOut$DeletedCustomer: z.ZodType<
  External$DeletedCustomer, // output type of this zod object
  z.ZodTypeDef,
  DeletedCustomer // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["customer"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedCustomer = {
  in: SchemaIn$DeletedCustomer,
  out: SchemaOut$DeletedCustomer,
};
