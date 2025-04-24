import {
  CustomerSubscriptionCreateBodyAutomaticTaxLiability,
  External$CustomerSubscriptionCreateBodyAutomaticTaxLiability,
  Schemas$CustomerSubscriptionCreateBodyAutomaticTaxLiability,
} from "./customer-subscription-create-body-automatic-tax-liability";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Automatic tax settings for this subscription. We recommend you only include this parameter when the existing value is being changed.
 */
export type CustomerSubscriptionCreateBodyAutomaticTax = {
  enabled: boolean;
  liability?: CustomerSubscriptionCreateBodyAutomaticTaxLiability | undefined;
};

/**
 * @internal
 * CustomerSubscriptionCreateBodyAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionCreateBodyAutomaticTax = {
  enabled: boolean;
  liability?:
    | External$CustomerSubscriptionCreateBodyAutomaticTaxLiability
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionCreateBodyAutomaticTax
 */
const SchemaIn$CustomerSubscriptionCreateBodyAutomaticTax: z.ZodType<
  CustomerSubscriptionCreateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$CustomerSubscriptionCreateBodyAutomaticTaxLiability.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionCreateBodyAutomaticTax
 */
const SchemaOut$CustomerSubscriptionCreateBodyAutomaticTax: z.ZodType<
  External$CustomerSubscriptionCreateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionCreateBodyAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$CustomerSubscriptionCreateBodyAutomaticTaxLiability.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$CustomerSubscriptionCreateBodyAutomaticTax = {
  in: SchemaIn$CustomerSubscriptionCreateBodyAutomaticTax,
  out: SchemaOut$CustomerSubscriptionCreateBodyAutomaticTax,
};
