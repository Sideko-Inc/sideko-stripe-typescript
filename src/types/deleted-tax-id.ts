import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedTaxId = {
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
  object: "tax_id";
};

/**
 * @internal
 * DeletedTaxId without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedTaxId = {
  deleted: boolean;
  id: string;
  object: "tax_id";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedTaxId
 */
const SchemaIn$DeletedTaxId: z.ZodType<
  DeletedTaxId, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["tax_id"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedTaxId
 */
const SchemaOut$DeletedTaxId: z.ZodType<
  External$DeletedTaxId, // output type of this zod object
  z.ZodTypeDef,
  DeletedTaxId // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["tax_id"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedTaxId = {
  in: SchemaIn$DeletedTaxId,
  out: SchemaOut$DeletedTaxId,
};
