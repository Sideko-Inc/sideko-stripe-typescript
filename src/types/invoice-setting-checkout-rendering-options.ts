import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type InvoiceSettingCheckoutRenderingOptions = {
  /**
   * How line-item prices and amounts will be displayed with respect to tax on invoice PDFs.
   */
  amountTaxDisplay?: string | null | undefined;
};

/**
 * @internal
 * InvoiceSettingCheckoutRenderingOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceSettingCheckoutRenderingOptions = {
  amount_tax_display?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceSettingCheckoutRenderingOptions
 */
const SchemaIn$InvoiceSettingCheckoutRenderingOptions: z.ZodType<
  InvoiceSettingCheckoutRenderingOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_tax_display: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_tax_display: "amountTaxDisplay",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceSettingCheckoutRenderingOptions
 */
const SchemaOut$InvoiceSettingCheckoutRenderingOptions: z.ZodType<
  External$InvoiceSettingCheckoutRenderingOptions, // output type of this zod object
  z.ZodTypeDef,
  InvoiceSettingCheckoutRenderingOptions // the object to be transformed
> = z
  .object({
    amountTaxDisplay: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountTaxDisplay: "amount_tax_display",
    });
  });

export const Schemas$InvoiceSettingCheckoutRenderingOptions = {
  in: SchemaIn$InvoiceSettingCheckoutRenderingOptions,
  out: SchemaOut$InvoiceSettingCheckoutRenderingOptions,
};
