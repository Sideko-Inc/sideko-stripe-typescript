import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0
 */
export type CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0 = {
  amountTaxDisplay?: ("exclude_tax" | "include_inclusive_tax") | undefined;
  template?: string | undefined;
};

/**
 * @internal
 * CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0 = {
  amount_tax_display?: ("exclude_tax" | "include_inclusive_tax") | undefined;
  template?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0
 */
const SchemaIn$CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0: z.ZodType<
  CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0
 */
const SchemaOut$CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0: z.ZodType<
  External$CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0 // the object to be transformed
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

export const Schemas$CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0 = {
  in: SchemaIn$CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0,
  out: SchemaOut$CustomerCreateBodyInvoiceSettingsRenderingOptionsObj0,
};
