import {
  External$SubscriptionCreateBodyAutomaticTaxLiability,
  Schemas$SubscriptionCreateBodyAutomaticTaxLiability,
  SubscriptionCreateBodyAutomaticTaxLiability,
} from "./subscription-create-body-automatic-tax-liability";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Automatic tax settings for this subscription. We recommend you only include this parameter when the existing value is being changed.
 */
export type SubscriptionCreateBodyAutomaticTax = {
  enabled: boolean;
  liability?: SubscriptionCreateBodyAutomaticTaxLiability | undefined;
};

/**
 * @internal
 * SubscriptionCreateBodyAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionCreateBodyAutomaticTax = {
  enabled: boolean;
  liability?: External$SubscriptionCreateBodyAutomaticTaxLiability | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionCreateBodyAutomaticTax
 */
const SchemaIn$SubscriptionCreateBodyAutomaticTax: z.ZodType<
  SubscriptionCreateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$SubscriptionCreateBodyAutomaticTaxLiability.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionCreateBodyAutomaticTax
 */
const SchemaOut$SubscriptionCreateBodyAutomaticTax: z.ZodType<
  External$SubscriptionCreateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionCreateBodyAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$SubscriptionCreateBodyAutomaticTaxLiability.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$SubscriptionCreateBodyAutomaticTax = {
  in: SchemaIn$SubscriptionCreateBodyAutomaticTax,
  out: SchemaOut$SubscriptionCreateBodyAutomaticTax,
};
