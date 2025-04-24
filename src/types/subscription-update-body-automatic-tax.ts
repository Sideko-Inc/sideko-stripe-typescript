import {
  External$SubscriptionUpdateBodyAutomaticTaxLiability,
  Schemas$SubscriptionUpdateBodyAutomaticTaxLiability,
  SubscriptionUpdateBodyAutomaticTaxLiability,
} from "./subscription-update-body-automatic-tax-liability";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Automatic tax settings for this subscription. We recommend you only include this parameter when the existing value is being changed.
 */
export type SubscriptionUpdateBodyAutomaticTax = {
  enabled: boolean;
  liability?: SubscriptionUpdateBodyAutomaticTaxLiability | undefined;
};

/**
 * @internal
 * SubscriptionUpdateBodyAutomaticTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionUpdateBodyAutomaticTax = {
  enabled: boolean;
  liability?: External$SubscriptionUpdateBodyAutomaticTaxLiability | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionUpdateBodyAutomaticTax
 */
const SchemaIn$SubscriptionUpdateBodyAutomaticTax: z.ZodType<
  SubscriptionUpdateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$SubscriptionUpdateBodyAutomaticTaxLiability.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionUpdateBodyAutomaticTax
 */
const SchemaOut$SubscriptionUpdateBodyAutomaticTax: z.ZodType<
  External$SubscriptionUpdateBodyAutomaticTax, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionUpdateBodyAutomaticTax // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    liability:
      Schemas$SubscriptionUpdateBodyAutomaticTaxLiability.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      liability: "liability",
    });
  });

export const Schemas$SubscriptionUpdateBodyAutomaticTax = {
  in: SchemaIn$SubscriptionUpdateBodyAutomaticTax,
  out: SchemaOut$SubscriptionUpdateBodyAutomaticTax,
};
