import {
  External$PaymentLinkUpdateBodyAutomaticTaxLiability,
  PaymentLinkUpdateBodyAutomaticTaxLiability,
  Schemas$PaymentLinkUpdateBodyAutomaticTaxLiability,
} from "./payment-link-update-body-automatic-tax-liability";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Configuration for automatic tax collection.
 */
export type PaymentLinkUpdateBodyAutomaticTax = {
  enabled: boolean;
  liability?: PaymentLinkUpdateBodyAutomaticTaxLiability | undefined;
};

/**
 * @internal
 * PaymentLinkUpdateBodyAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkUpdateBodyAutomaticTax = {
  enabled: boolean;
  liability?: External$PaymentLinkUpdateBodyAutomaticTaxLiability | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkUpdateBodyAutomaticTax
 */
const SchemaIn$PaymentLinkUpdateBodyAutomaticTax: z.ZodType<
  PaymentLinkUpdateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability: Schemas$PaymentLinkUpdateBodyAutomaticTaxLiability.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkUpdateBodyAutomaticTax
 */
const SchemaOut$PaymentLinkUpdateBodyAutomaticTax: z.ZodType<
  External$PaymentLinkUpdateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkUpdateBodyAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$PaymentLinkUpdateBodyAutomaticTaxLiability.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$PaymentLinkUpdateBodyAutomaticTax = {
  in: SchemaIn$PaymentLinkUpdateBodyAutomaticTax,
  out: SchemaOut$PaymentLinkUpdateBodyAutomaticTax,
};
