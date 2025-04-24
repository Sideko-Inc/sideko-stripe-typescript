import {
  CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item,
  External$CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item,
  Schemas$CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item,
} from "./customer-create-body-invoice-settings-custom-fields-arr0-item";
import {
  CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0,
  External$CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0,
  Schemas$CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0,
} from "./customer-create-body-invoice-settings-rendering-options-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Default invoice settings for this customer.
 */
export type CustomerCreateBodyInvoiceSettings = {
  customFields?:
    | (CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item[] | string)
    | undefined;
  defaultPaymentMethod?: string | undefined;
  footer?: string | undefined;
  renderingOptions?:
    | (CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0 | string)
    | undefined;
};

/**
 * @internal
 * CustomerCreateBodyInvoiceSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCreateBodyInvoiceSettings = {
  custom_fields?:
    | (
        | External$CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item[]
        | string
      )
    | undefined;
  default_payment_method?: string | undefined;
  footer?: string | undefined;
  rendering_options?:
    | (External$CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0 | string)
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCreateBodyInvoiceSettings
 */
const SchemaIn$CustomerCreateBodyInvoiceSettings: z.ZodType<
  CustomerCreateBodyInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    custom_fields: z
      .union([
        z.array(
          Schemas$CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item.in,
        ),
        z.string(),
      ])
      .optional(),
    default_payment_method: z.string().optional(),
    footer: z.string().optional(),
    rendering_options: z
      .union([
        Schemas$CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCreateBodyInvoiceSettings
 */
const SchemaOut$CustomerCreateBodyInvoiceSettings: z.ZodType<
  External$CustomerCreateBodyInvoiceSettings, // output type of this zod object
  z.ZodTypeDef,
  CustomerCreateBodyInvoiceSettings // the object to be transformed
> = z
  .object({
    customFields: z
      .union([
        z.array(
          Schemas$CustomerCreateBodyInvoiceSettingsCustomFieldsArr0Item.out,
        ),
        z.string(),
      ])
      .optional(),
    defaultPaymentMethod: z.string().optional(),
    footer: z.string().optional(),
    renderingOptions: z
      .union([
        Schemas$CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0.out,
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

export const Schemas$CustomerCreateBodyInvoiceSettings = {
  in: SchemaIn$CustomerCreateBodyInvoiceSettings,
  out: SchemaOut$CustomerCreateBodyInvoiceSettings,
};
