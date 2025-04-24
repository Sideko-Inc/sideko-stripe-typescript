import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0
 */
export type PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0 =
  {
    amountTaxDisplay?: ("exclude_tax" | "include_inclusive_tax") | undefined;
  };

/**
 * @internal
 * PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0 =
  {
    amount_tax_display?: ("exclude_tax" | "include_inclusive_tax") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0
 */
const SchemaIn$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0: z.ZodType<
  PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount_tax_display: z
      .enum(["exclude_tax", "include_inclusive_tax"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount_tax_display: "amountTaxDisplay",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0
 */
const SchemaOut$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0: z.ZodType<
  External$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0 // the object to be transformed
> = z
  .object({
    amountTaxDisplay: z
      .enum(["exclude_tax", "include_inclusive_tax"])
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amountTaxDisplay: "amount_tax_display",
    });
  });

export const Schemas$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0 =
  {
    in: SchemaIn$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0,
    out: SchemaOut$PaymentLinkUpdateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0,
  };
