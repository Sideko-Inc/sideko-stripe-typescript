import {
  External$InvoiceUpdateBodyAutomaticTaxLiability,
  InvoiceUpdateBodyAutomaticTaxLiability,
  Schemas$InvoiceUpdateBodyAutomaticTaxLiability,
} from "./invoice-update-body-automatic-tax-liability";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Settings for automatic tax lookup for this invoice.
 */
export type InvoiceUpdateBodyAutomaticTax = {
  enabled: boolean;
  liability?: InvoiceUpdateBodyAutomaticTaxLiability | undefined;
};

/**
 * @internal
 * InvoiceUpdateBodyAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyAutomaticTax = {
  enabled: boolean;
  liability?: External$InvoiceUpdateBodyAutomaticTaxLiability | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyAutomaticTax
 */
const SchemaIn$InvoiceUpdateBodyAutomaticTax: z.ZodType<
  InvoiceUpdateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability: Schemas$InvoiceUpdateBodyAutomaticTaxLiability.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyAutomaticTax
 */
const SchemaOut$InvoiceUpdateBodyAutomaticTax: z.ZodType<
  External$InvoiceUpdateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability: Schemas$InvoiceUpdateBodyAutomaticTaxLiability.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$InvoiceUpdateBodyAutomaticTax = {
  in: SchemaIn$InvoiceUpdateBodyAutomaticTax,
  out: SchemaOut$InvoiceUpdateBodyAutomaticTax,
};
