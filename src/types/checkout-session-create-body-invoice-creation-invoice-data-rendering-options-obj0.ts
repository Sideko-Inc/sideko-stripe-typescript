import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0
 */
export type CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0 =
  {
    amountTaxDisplay?: ("exclude_tax" | "include_inclusive_tax") | undefined;
  };

/**
 * @internal
 * CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0 =
  {
    amount_tax_display?: ("exclude_tax" | "include_inclusive_tax") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0
 */
const SchemaIn$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0: z.ZodType<
  CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0
 */
const SchemaOut$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0: z.ZodType<
  External$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0 // the object to be transformed
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

export const Schemas$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0 =
  {
    in: SchemaIn$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0,
    out: SchemaOut$CheckoutSessionCreateBodyInvoiceCreationInvoiceDataRenderingOptionsObj0,
  };
