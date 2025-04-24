import {
  External$InvoiceSettingCustomField,
  InvoiceSettingCustomField,
  Schemas$InvoiceSettingCustomField,
} from "./invoice-setting-custom-field";
import {
  External$InvoiceSettingCustomerRenderingOptions,
  InvoiceSettingCustomerRenderingOptions,
  Schemas$InvoiceSettingCustomerRenderingOptions,
} from "./invoice-setting-customer-rendering-options";
import {
  External$PaymentMethod,
  PaymentMethod,
  Schemas$PaymentMethod,
} from "./payment-method";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoiceSettingCustomerSetting = {
  /**
   * Default custom fields to be displayed on invoices for this customer.
   */
  customFields?: InvoiceSettingCustomField[] | null | undefined;
  /**
   * ID of a payment method that's attached to the customer, to be used as the customer's default payment method for subscriptions and invoices.
   */
  defaultPaymentMethod?: (string | PaymentMethod) | undefined;
  /**
   * Default footer to be displayed on invoices for this customer.
   */
  footer?: string | null | undefined;
  renderingOptions?: InvoiceSettingCustomerRenderingOptions | undefined;
};

/**
 * @internal
 * InvoiceSettingCustomerSetting without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceSettingCustomerSetting = {
  custom_fields?: External$InvoiceSettingCustomField[] | null | undefined;
  default_payment_method?: (string | External$PaymentMethod) | undefined;
  footer?: string | null | undefined;
  rendering_options?:
    | External$InvoiceSettingCustomerRenderingOptions
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceSettingCustomerSetting
 */
const SchemaIn$InvoiceSettingCustomerSetting: z.ZodType<
  InvoiceSettingCustomerSetting, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    custom_fields: z
      .array(Schemas$InvoiceSettingCustomField.in)
      .nullable()
      .optional(),
    default_payment_method: z
      .union([z.string(), z.lazy(() => Schemas$PaymentMethod.in)])
      .optional(),
    footer: z.string().nullable().optional(),
    rendering_options:
      Schemas$InvoiceSettingCustomerRenderingOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceSettingCustomerSetting
 */
const SchemaOut$InvoiceSettingCustomerSetting: z.ZodType<
  External$InvoiceSettingCustomerSetting, // output type of this zod object
  z.ZodTypeDef,
  InvoiceSettingCustomerSetting // the object to be transformed
> = z
  .object({
    customFields: z
      .array(Schemas$InvoiceSettingCustomField.out)
      .nullable()
      .optional(),
    defaultPaymentMethod: z
      .union([z.string(), z.lazy(() => Schemas$PaymentMethod.out)])
      .optional(),
    footer: z.string().nullable().optional(),
    renderingOptions:
      Schemas$InvoiceSettingCustomerRenderingOptions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      customFields: "custom_fields",
      defaultPaymentMethod: "default_payment_method",
      footer: "footer",
      renderingOptions: "rendering_options",
    });
  });

export const Schemas$InvoiceSettingCustomerSetting = {
  in: SchemaIn$InvoiceSettingCustomerSetting,
  out: SchemaOut$InvoiceSettingCustomerSetting,
};
