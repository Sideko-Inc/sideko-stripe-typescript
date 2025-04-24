import {
  External$QuoteCreateBodyAutomaticTaxLiability,
  QuoteCreateBodyAutomaticTaxLiability,
  Schemas$QuoteCreateBodyAutomaticTaxLiability,
} from "./quote-create-body-automatic-tax-liability";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Settings for automatic tax lookup for this quote and resulting invoices and subscriptions.
 */
export type QuoteCreateBodyAutomaticTax = {
  enabled: boolean;
  liability?: QuoteCreateBodyAutomaticTaxLiability | undefined;
};

/**
 * @internal
 * QuoteCreateBodyAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$QuoteCreateBodyAutomaticTax = {
  enabled: boolean;
  liability?: External$QuoteCreateBodyAutomaticTaxLiability | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object QuoteCreateBodyAutomaticTax
 */
const SchemaIn$QuoteCreateBodyAutomaticTax: z.ZodType<
  QuoteCreateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability: Schemas$QuoteCreateBodyAutomaticTaxLiability.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$QuoteCreateBodyAutomaticTax
 */
const SchemaOut$QuoteCreateBodyAutomaticTax: z.ZodType<
  External$QuoteCreateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  QuoteCreateBodyAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability: Schemas$QuoteCreateBodyAutomaticTaxLiability.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$QuoteCreateBodyAutomaticTax = {
  in: SchemaIn$QuoteCreateBodyAutomaticTax,
  out: SchemaOut$QuoteCreateBodyAutomaticTax,
};
