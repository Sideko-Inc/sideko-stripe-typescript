import {
  External$PaymentLinkCreateBodyAutomaticTaxLiability,
  PaymentLinkCreateBodyAutomaticTaxLiability,
  Schemas$PaymentLinkCreateBodyAutomaticTaxLiability,
} from "./payment-link-create-body-automatic-tax-liability";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Configuration for automatic tax collection.
 */
export type PaymentLinkCreateBodyAutomaticTax = {
  enabled: boolean;
  liability?: PaymentLinkCreateBodyAutomaticTaxLiability | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBodyAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyAutomaticTax = {
  enabled: boolean;
  liability?: External$PaymentLinkCreateBodyAutomaticTaxLiability | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyAutomaticTax
 */
const SchemaIn$PaymentLinkCreateBodyAutomaticTax: z.ZodType<
  PaymentLinkCreateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability: Schemas$PaymentLinkCreateBodyAutomaticTaxLiability.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyAutomaticTax
 */
const SchemaOut$PaymentLinkCreateBodyAutomaticTax: z.ZodType<
  External$PaymentLinkCreateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$PaymentLinkCreateBodyAutomaticTaxLiability.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$PaymentLinkCreateBodyAutomaticTax = {
  in: SchemaIn$PaymentLinkCreateBodyAutomaticTax,
  out: SchemaOut$PaymentLinkCreateBodyAutomaticTax,
};
