import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0
 */
export type CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0 = {
  amountTaxDisplay?: ("exclude_tax" | "include_inclusive_tax") | undefined;
  template?: string | undefined;
};

/**
 * @internal
 * CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0 = {
  amount_tax_display?: ("exclude_tax" | "include_inclusive_tax") | undefined;
  template?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0
 */
const SchemaIn$CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0: z.ZodType<
  CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_tax_display: z
      .enum(["exclude_tax", "include_inclusive_tax"])
      .optional(),
    template: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_tax_display: "amountTaxDisplay",
      template: "template",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0
 */
const SchemaOut$CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0: z.ZodType<
  External$CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0 // the object to be transformed
> = z
  .object({
    amountTaxDisplay: z
      .enum(["exclude_tax", "include_inclusive_tax"])
      .optional(),
    template: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountTaxDisplay: "amount_tax_display",
      template: "template",
    });
  });

export const Schemas$CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0 = {
  in: SchemaIn$CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0,
  out: SchemaOut$CustomerUpdateBodyInvoiceSettingsRenderingOptionsObj0,
};
