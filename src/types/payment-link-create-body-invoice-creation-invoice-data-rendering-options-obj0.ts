import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0
 */
export type PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0 =
  {
    amountTaxDisplay?: ("exclude_tax" | "include_inclusive_tax") | undefined;
  };

/**
 * @internal
 * PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0 =
  {
    amount_tax_display?: ("exclude_tax" | "include_inclusive_tax") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0
 */
const SchemaIn$PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0: z.ZodType<
  PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0
 */
const SchemaOut$PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0: z.ZodType<
  External$PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0 // the object to be transformed
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

export const Schemas$PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0 =
  {
    in: SchemaIn$PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0,
    out: SchemaOut$PaymentLinkCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0,
  };
