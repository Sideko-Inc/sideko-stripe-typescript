import {
  CustomerSubscriptionModifyBodyAutomaticTaxLiability,
  External$CustomerSubscriptionModifyBodyAutomaticTaxLiability,
  Schemas$CustomerSubscriptionModifyBodyAutomaticTaxLiability,
} from "./customer-subscription-modify-body-automatic-tax-liability";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Automatic tax settings for this subscription. We recommend you only include this parameter when the existing value is being changed.
 */
export type CustomerSubscriptionModifyBodyAutomaticTax = {
  enabled: boolean;
  liability?: CustomerSubscriptionModifyBodyAutomaticTaxLiability | undefined;
};

/**
 * @internal
 * CustomerSubscriptionModifyBodyAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionModifyBodyAutomaticTax = {
  enabled: boolean;
  liability?:
    | External$CustomerSubscriptionModifyBodyAutomaticTaxLiability
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionModifyBodyAutomaticTax
 */
const SchemaIn$CustomerSubscriptionModifyBodyAutomaticTax: z.ZodType<
  CustomerSubscriptionModifyBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$CustomerSubscriptionModifyBodyAutomaticTaxLiability.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionModifyBodyAutomaticTax
 */
const SchemaOut$CustomerSubscriptionModifyBodyAutomaticTax: z.ZodType<
  External$CustomerSubscriptionModifyBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionModifyBodyAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$CustomerSubscriptionModifyBodyAutomaticTaxLiability.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$CustomerSubscriptionModifyBodyAutomaticTax = {
  in: SchemaIn$CustomerSubscriptionModifyBodyAutomaticTax,
  out: SchemaOut$CustomerSubscriptionModifyBodyAutomaticTax,
};
