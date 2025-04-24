import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item
 */
export type CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item = {
  name: string;
  value: string;
};

/**
 * @internal
 * CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item = {
  name: string;
  value: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item
 */
const SchemaIn$CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item: z.ZodType<
  CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item
 */
const SchemaOut$CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item: z.ZodType<
  External$CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item // the object to be transformed
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

export const Schemas$CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item = {
  in: SchemaIn$CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item,
  out: SchemaOut$CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item,
};
