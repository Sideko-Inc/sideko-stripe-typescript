import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item
 */
export type CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item = {
  name: string;
  value: string;
};

/**
 * @internal
 * CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item = {
  name: string;
  value: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item
 */
const SchemaIn$CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item: z.ZodType<
  CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item
 */
const SchemaOut$CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item: z.ZodType<
  External$CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item // the object to be transformed
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

export const Schemas$CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item = {
  in: SchemaIn$CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item,
  out: SchemaOut$CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item,
};
