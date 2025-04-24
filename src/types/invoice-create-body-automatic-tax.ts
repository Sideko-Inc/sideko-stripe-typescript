import {
  External$InvoiceCreateBodyAutomaticTaxLiability,
  InvoiceCreateBodyAutomaticTaxLiability,
  Schemas$InvoiceCreateBodyAutomaticTaxLiability,
} from "./invoice-create-body-automatic-tax-liability";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Settings for automatic tax lookup for this invoice.
 */
export type InvoiceCreateBodyAutomaticTax = {
  enabled: boolean;
  liability?: InvoiceCreateBodyAutomaticTaxLiability | undefined;
};

/**
 * @internal
 * InvoiceCreateBodyAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyAutomaticTax = {
  enabled: boolean;
  liability?: External$InvoiceCreateBodyAutomaticTaxLiability | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyAutomaticTax
 */
const SchemaIn$InvoiceCreateBodyAutomaticTax: z.ZodType<
  InvoiceCreateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability: Schemas$InvoiceCreateBodyAutomaticTaxLiability.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyAutomaticTax
 */
const SchemaOut$InvoiceCreateBodyAutomaticTax: z.ZodType<
  External$InvoiceCreateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability: Schemas$InvoiceCreateBodyAutomaticTaxLiability.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$InvoiceCreateBodyAutomaticTax = {
  in: SchemaIn$InvoiceCreateBodyAutomaticTax,
  out: SchemaOut$InvoiceCreateBodyAutomaticTax,
};
