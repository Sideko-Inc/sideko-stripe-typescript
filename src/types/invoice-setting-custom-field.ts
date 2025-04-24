import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoiceSettingCustomField = {
  /**
   * The name of the custom field.
   */
  name: string;
  /**
   * The value of the custom field.
   */
  value: string;
};

/**
 * @internal
 * InvoiceSettingCustomField without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceSettingCustomField = {
  name: string;
  value: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceSettingCustomField
 */
const SchemaIn$InvoiceSettingCustomField: z.ZodType<
  InvoiceSettingCustomField, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceSettingCustomField
 */
const SchemaOut$InvoiceSettingCustomField: z.ZodType<
  External$InvoiceSettingCustomField, // output type of this zod object
  z.ZodTypeDef,
  InvoiceSettingCustomField // the object to be transformed
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

export const Schemas$InvoiceSettingCustomField = {
  in: SchemaIn$InvoiceSettingCustomField,
  out: SchemaOut$InvoiceSettingCustomField,
};
