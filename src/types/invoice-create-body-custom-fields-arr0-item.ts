import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyCustomFieldsArr0Item
 */
export type InvoiceCreateBodyCustomFieldsArr0Item = {
  name: string;
  value: string;
};

/**
 * @internal
 * InvoiceCreateBodyCustomFieldsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyCustomFieldsArr0Item = {
  name: string;
  value: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyCustomFieldsArr0Item
 */
const SchemaIn$InvoiceCreateBodyCustomFieldsArr0Item: z.ZodType<
  InvoiceCreateBodyCustomFieldsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    name: z.string(),
    value: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      name: "name",
      value: "value",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyCustomFieldsArr0Item
 */
const SchemaOut$InvoiceCreateBodyCustomFieldsArr0Item: z.ZodType<
  External$InvoiceCreateBodyCustomFieldsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyCustomFieldsArr0Item // the object to be transformed
> = z
  .object({
    name: z.string(),
    value: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      name: "name",
      value: "value",
    });
  });

export const Schemas$InvoiceCreateBodyCustomFieldsArr0Item = {
  in: SchemaIn$InvoiceCreateBodyCustomFieldsArr0Item,
  out: SchemaOut$InvoiceCreateBodyCustomFieldsArr0Item,
};
