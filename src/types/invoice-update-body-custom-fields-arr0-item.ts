import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyCustomFieldsArr0Item
 */
export type InvoiceUpdateBodyCustomFieldsArr0Item = {
  name: string;
  value: string;
};

/**
 * @internal
 * InvoiceUpdateBodyCustomFieldsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyCustomFieldsArr0Item = {
  name: string;
  value: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyCustomFieldsArr0Item
 */
const SchemaIn$InvoiceUpdateBodyCustomFieldsArr0Item: z.ZodType<
  InvoiceUpdateBodyCustomFieldsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyCustomFieldsArr0Item
 */
const SchemaOut$InvoiceUpdateBodyCustomFieldsArr0Item: z.ZodType<
  External$InvoiceUpdateBodyCustomFieldsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyCustomFieldsArr0Item // the object to be transformed
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

export const Schemas$InvoiceUpdateBodyCustomFieldsArr0Item = {
  in: SchemaIn$InvoiceUpdateBodyCustomFieldsArr0Item,
  out: SchemaOut$InvoiceUpdateBodyCustomFieldsArr0Item,
};
