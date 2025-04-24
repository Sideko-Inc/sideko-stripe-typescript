import {
  CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item,
  External$CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item,
  Schemas$CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item,
} from "./customer-update-body-invoice-settings-custom-fields-arr0-item";
import {
  CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0,
  External$CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0,
  Schemas$CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0,
} from "./customer-update-body-invoice-settings-rendering-options-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Default invoice settings for this customer.
 */
export type CustomerUpdateBodyInvoiceSettings = {
  customFields?:
    | (CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item[] | string)
    | undefined;
  defaultPaymentMethod?: string | undefined;
  footer?: string | undefined;
  renderingOptions?:
    | (CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0 | string)
    | undefined;
};

/**
 * @internal
 * CustomerUpdateBodyInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerUpdateBodyInvoiceSettings = {
  custom_fields?:
    | (
        | External$CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item[]
        | string
      )
    | undefined;
  default_payment_method?: string | undefined;
  footer?: string | undefined;
  rendering_options?:
    | (External$CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0 | string)
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerUpdateBodyInvoiceSettings
 */
const SchemaIn$CustomerUpdateBodyInvoiceSettings: z.ZodType<
  CustomerUpdateBodyInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    custom_fields: z
      .union([
        z.array(
          Schemas$CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
    default_payment_method: z.string().optional(),
    footer: z.string().optional(),
    rendering_options: z
      .union([
        Schemas$CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0.in,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      custom_fields: "customFields",
      default_payment_method: "defaultPaymentMethod",
      footer: "footer",
      rendering_options: "renderingOptions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerUpdateBodyInvoiceSettings
 */
const SchemaOut$CustomerUpdateBodyInvoiceSettings: z.ZodType<
  External$CustomerUpdateBodyInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  CustomerUpdateBodyInvoiceSettings // the object to be transformed
> = z
  .object({
    customFields: z
      .union([
        z.array(
          Schemas$CustomerUpdateBodyInvoiceSettingsCustomFieldsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    defaultPaymentMethod: z.string().optional(),
    footer: z.string().optional(),
    renderingOptions: z
      .union([
        Schemas$CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0.out,
        z.string(),
      ])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customFields: "custom_fields",
      defaultPaymentMethod: "default_payment_method",
      footer: "footer",
      renderingOptions: "rendering_options",
    });
  });

export const Schemas$CustomerUpdateBodyInvoiceSettings = {
  in: SchemaIn$CustomerUpdateBodyInvoiceSettings,
  out: SchemaOut$CustomerUpdateBodyInvoiceSettings,
};
