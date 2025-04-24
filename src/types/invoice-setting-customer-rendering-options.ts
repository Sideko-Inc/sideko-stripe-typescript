import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoiceSettingCustomerRenderingOptions = {
  /**
   * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs.
   */
  amountTaxDisplay?: string | null | undefined;
  /**
   * ID of the invoice rendering template to be used for this customer's invoices. If set, the template will be used on all invoices for this customer unless a template is set directly on the invoice.
   */
  template?: string | null | undefined;
};

/**
 * @internal
 * InvoiceSettingCustomerRenderingOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceSettingCustomerRenderingOptions = {
  amount_tax_display?: string | null | undefined;
  template?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceSettingCustomerRenderingOptions
 */
const SchemaIn$InvoiceSettingCustomerRenderingOptions: z.ZodType<
  InvoiceSettingCustomerRenderingOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_tax_display: z.string().nullable().optional(),
    template: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_tax_display: "amountTaxDisplay",
      template: "template",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceSettingCustomerRenderingOptions
 */
const SchemaOut$InvoiceSettingCustomerRenderingOptions: z.ZodType<
  External$InvoiceSettingCustomerRenderingOptions, // output type of this zod object
  z.ZodTypeDef,
  InvoiceSettingCustomerRenderingOptions // the object to be transformed
> = z
  .object({
    amountTaxDisplay: z.string().nullable().optional(),
    template: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountTaxDisplay: "amount_tax_display",
      template: "template",
    });
  });

export const Schemas$InvoiceSettingCustomerRenderingOptions = {
  in: SchemaIn$InvoiceSettingCustomerRenderingOptions,
  out: SchemaOut$InvoiceSettingCustomerRenderingOptions,
};
