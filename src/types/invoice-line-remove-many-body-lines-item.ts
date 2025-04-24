import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceLineRemoveManyBodyLinesItem
 */
export type InvoiceLineRemoveManyBodyLinesItem = {
  behavior: "delete" | "unassign";
  id: string;
};

/**
 * @internal
 * InvoiceLineRemoveManyBodyLinesItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceLineRemoveManyBodyLinesItem = {
  behavior: "delete" | "unassign";
  id: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceLineRemoveManyBodyLinesItem
 */
const SchemaIn$InvoiceLineRemoveManyBodyLinesItem: z.ZodType<
  InvoiceLineRemoveManyBodyLinesItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    behavior: z.enum(["delete", "unassign"]),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      behavior: "behavior",
      id: "id",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceLineRemoveManyBodyLinesItem
 */
const SchemaOut$InvoiceLineRemoveManyBodyLinesItem: z.ZodType<
  External$InvoiceLineRemoveManyBodyLinesItem, // output type of this zod object
  z.ZodTypeDef,
  InvoiceLineRemoveManyBodyLinesItem // the object to be transformed
> = z
  .object({
    behavior: z.enum(["delete", "unassign"]),
    id: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      behavior: "behavior",
      id: "id",
    });
  });

export const Schemas$InvoiceLineRemoveManyBodyLinesItem = {
  in: SchemaIn$InvoiceLineRemoveManyBodyLinesItem,
  out: SchemaOut$InvoiceLineRemoveManyBodyLinesItem,
};
