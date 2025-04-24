import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedInvoice = {
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
  object: "invoice";
};

/**
 * @internal
 * DeletedInvoice without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedInvoice = {
  deleted: boolean;
  id: string;
  object: "invoice";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedInvoice
 */
const SchemaIn$DeletedInvoice: z.ZodType<
  DeletedInvoice, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["invoice"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedInvoice
 */
const SchemaOut$DeletedInvoice: z.ZodType<
  External$DeletedInvoice, // output type of this zod object
  z.ZodTypeDef,
  DeletedInvoice // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["invoice"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedInvoice = {
  in: SchemaIn$DeletedInvoice,
  out: SchemaOut$DeletedInvoice,
};
