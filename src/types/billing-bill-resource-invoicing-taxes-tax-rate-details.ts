import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingBillResourceInvoicingTaxesTaxRateDetails = {
  taxRate: string;
};

/**
 * @internal
 * BillingBillResourceInvoicingTaxesTaxRateDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingBillResourceInvoicingTaxesTaxRateDetails = {
  tax_rate: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingBillResourceInvoicingTaxesTaxRateDetails
 */
const SchemaIn$BillingBillResourceInvoicingTaxesTaxRateDetails: z.ZodType<
  BillingBillResourceInvoicingTaxesTaxRateDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    tax_rate: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tax_rate: "taxRate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingBillResourceInvoicingTaxesTaxRateDetails
 */
const SchemaOut$BillingBillResourceInvoicingTaxesTaxRateDetails: z.ZodType<
  External$BillingBillResourceInvoicingTaxesTaxRateDetails, // output type of this zod object
  z.ZodTypeDef,
  BillingBillResourceInvoicingTaxesTaxRateDetails // the object to be transformed
> = z
  .object({
    taxRate: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      taxRate: "tax_rate",
    });
  });

export const Schemas$BillingBillResourceInvoicingTaxesTaxRateDetails = {
  in: SchemaIn$BillingBillResourceInvoicingTaxesTaxRateDetails,
  out: SchemaOut$BillingBillResourceInvoicingTaxesTaxRateDetails,
};
