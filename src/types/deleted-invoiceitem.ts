import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type DeletedInvoiceitem = {
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
  object: "invoiceitem";
};

/**
 * @internal
 * DeletedInvoiceitem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$DeletedInvoiceitem = {
  deleted: boolean;
  id: string;
  object: "invoiceitem";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object DeletedInvoiceitem
 */
const SchemaIn$DeletedInvoiceitem: z.ZodType<
  DeletedInvoiceitem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["invoiceitem"]),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$DeletedInvoiceitem
 */
const SchemaOut$DeletedInvoiceitem: z.ZodType<
  External$DeletedInvoiceitem, // output type of this zod object
  z.ZodTypeDef,
  DeletedInvoiceitem // the object to be transformed
> = z
  .object({
    deleted: z.boolean(),
    id: z.string(),
    object: z.enum(["invoiceitem"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      deleted: "deleted",
      id: "id",
      object: "object",
    });
  });

export const Schemas$DeletedInvoiceitem = {
  in: SchemaIn$DeletedInvoiceitem,
  out: SchemaOut$DeletedInvoiceitem,
};
