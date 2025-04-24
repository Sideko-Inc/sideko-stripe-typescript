import {
  External$QuoteUpdateBodyAutomaticTaxLiability,
  QuoteUpdateBodyAutomaticTaxLiability,
  Schemas$QuoteUpdateBodyAutomaticTaxLiability,
} from "./quote-update-body-automatic-tax-liability";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Settings for automatic tax lookup for this quote and resulting invoices and subscriptions.
 */
export type QuoteUpdateBodyAutomaticTax = {
  enabled: boolean;
  liability?: QuoteUpdateBodyAutomaticTaxLiability | undefined;
};

/**
 * @internal
 * QuoteUpdateBodyAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteUpdateBodyAutomaticTax = {
  enabled: boolean;
  liability?: External$QuoteUpdateBodyAutomaticTaxLiability | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteUpdateBodyAutomaticTax
 */
const SchemaIn$QuoteUpdateBodyAutomaticTax: z.ZodType<
  QuoteUpdateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability: Schemas$QuoteUpdateBodyAutomaticTaxLiability.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteUpdateBodyAutomaticTax
 */
const SchemaOut$QuoteUpdateBodyAutomaticTax: z.ZodType<
  External$QuoteUpdateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  QuoteUpdateBodyAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability: Schemas$QuoteUpdateBodyAutomaticTaxLiability.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$QuoteUpdateBodyAutomaticTax = {
  in: SchemaIn$QuoteUpdateBodyAutomaticTax,
  out: SchemaOut$QuoteUpdateBodyAutomaticTax,
};
